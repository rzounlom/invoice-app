"use server";

import { Item } from "@prisma/client";
// import { db } from "@/db";
// import { revalidatePath } from "next/cache";
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

const CreateInvoiceSchema = z.object({
  paymentDue: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format for paymentDue",
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

interface CreateInvoiceFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createInvoice(
  invoiceItems: Omit<Item, "id">[],
  formState: CreateInvoiceFormState,
  formData: FormData
): Promise<CreateInvoiceFormState> {
  const invoiceData = {
    paymentDue: formData.get("invoiceDate") as string,
    description: formData.get("description") as string,
    paymentTerms: parseInt(formData.get("paymentTerms") as string, 10),
    clientName: formData.get("clientName") as string,
    clientEmail: formData.get("clientEmail") as string,
    // status: formData.get("status") as string,
    senderAddress: {
      street: formData.get("senderStreet") as string,
      city: formData.get("senderCity") as string,
      postCode: formData.get("senderPoastalCode") as string,
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

  console.log({ formState, invoiceData });

  return formState;
}
