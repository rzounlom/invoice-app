"use server";

import { Invoice, Item } from "@prisma/client";

import { auth } from "@clerk/nextjs/server";
import { calculateDueDate } from "@/lib/utils/calculateDueDate";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import z from "zod";

const addressSchema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  postCode: z.string().min(1, "Post code is required"),
  country: z.string().min(1, "Country is required"),
});

const itemSchema = z.object({
  name: z.string().min(1, "Item name is required"),
  quantity: z.number().positive("Quantity must be a positive number"),
  price: z.number().nonnegative("Price must be a non-negative number"),
  total: z.number().nonnegative("Total must be a non-negative number"),
});

const EditInvoiceSchema = z.object({
  paymentDue: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Payment due date is required",
  }),
  description: z.string().min(1, "Description is required"),
  paymentTerms: z
    .number()
    .int()
    .positive("Payment terms must be a positive integer"),
  clientName: z.string().min(1, "Client name is required"),
  clientEmail: z.string().email("Invalid email format"),
  status: z.enum(["paid", "pending", "draft"], {
    errorMap: () => ({
      message: "Status must be 'paid', 'pending', or 'draft'",
    }),
  }),
  senderAddress: addressSchema,
  clientAddress: addressSchema,
  items: z.array(itemSchema).nonempty("At least one item is required"),
  total: z.number().nonnegative("Total must be a non-negative number"),
});

interface EditInvoiceFormState {
  errors: {
    paymentDue?: string[];
    description?: string[];
    paymentTerms?: string[];
    clientName?: string[];
    clientEmail?: string[];
    status?: string[];
    senderAddress?: string[];
    clientAddress?: string[];
    items?: string[];
    total?: string[];
    _form?: string[];
  };
}

export async function editInvoice(
  invoice: Invoice,
  status: string,
  invoiceItems: Item[] | Omit<Item, "id">[],
  itemsToRemove: string[],
  formState: EditInvoiceFormState,
  formData: FormData
): Promise<EditInvoiceFormState> {
  const invoiceData = {
    paymentDue: formData.get("invoiceDate") as string,
    description: formData.get("description") as string,
    paymentTerms: parseInt(formData.get("paymentTerms") as string, 10),
    clientName: formData.get("clientName") as string,
    clientEmail: formData.get("clientEmail") as string,
    status,
    senderAddress: {
      street: formData.get("senderStreet") as string,
      city: formData.get("senderCity") as string,
      postCode: formData.get("senderPostalCode") as string,
      country: formData.get("senderCountry") as string,
    },
    clientAddress: {
      street: formData.get("clientStreet") as string,
      city: formData.get("clientCity") as string,
      postCode: formData.get("clientPostalCode") as string,
      country: formData.get("clientCountry") as string,
    },
    items: invoiceItems,
    total: invoiceItems.reduce((acc, item) => acc + item.total, 0),
  };

  const session = auth();

  if (!session || !session.userId) {
    return {
      errors: {
        _form: ["You must be logged in to create an invoice"],
      },
    };
  }

  const result = EditInvoiceSchema.safeParse(invoiceData);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Check if the user exists
  const user = await db.user.findUnique({
    where: { clerkId: session.userId },
  });

  if (!user) {
    return {
      errors: {
        _form: ["You must be logged in to create an invoice"],
      },
    };
  }

  try {
    const senderAddress = await db.address.update({
      where: {
        id: invoice.senderAddressId,
      },
      data: invoiceData.senderAddress,
    });

    const clientAddress = await db.address.update({
      where: {
        id: invoice.clientAddressId,
      },
      data: invoiceData.clientAddress,
    });

    const createdInvoice = await db.invoice.update({
      where: {
        id: invoice.id,
      },
      data: {
        paymentDue: calculateDueDate(
          invoiceData.paymentDue,
          invoiceData.paymentTerms
        ),
        description: invoiceData.description,
        paymentTerms: invoiceData.paymentTerms,
        clientName: invoiceData.clientName,
        clientEmail: invoiceData.clientEmail,
        status: invoiceData.status,
        total: invoiceData.total,
        senderAddressId: senderAddress.id,
        clientAddressId: clientAddress.id,
      },
    });

    // Remove items that were marked for deletion
    if (itemsToRemove.length > 0) {
      await db.item.deleteMany({
        where: {
          id: {
            in: itemsToRemove,
          },
        },
      });
    }

    const itemsWithInvoiceId = invoiceData.items.map((item) => ({
      ...item,
      invoiceId: createdInvoice.id, // Add the created invoice ID to each item
    }));

    await Promise.all(
      itemsWithInvoiceId.map(async (item) => {
        if ("id" in item) {
          return;
        } else {
          await db.item.create({
            data: {
              invoiceId: createdInvoice.id,
              name: item.name,
              quantity: item.quantity,
              price: item.price,
              total: item.total,
            },
          });
        }
      })
    );
  } catch (error) {
    console.error("Error creating invoice:", error);
    return {
      errors: {
        _form: [
          "An error occurred while creating the invoice. Please try again.",
        ],
      },
    };
  }

  revalidatePath("/invoices");
  redirect("/invoices");
}
