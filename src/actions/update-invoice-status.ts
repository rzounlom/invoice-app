"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";

interface UpdateInvoiceStatusInvoiceFormState {
  errors: {
    _form?: string[];
  };
}

export const updateInvoiceStatus = async (
  id: string,
  status: string
): Promise<UpdateInvoiceStatusInvoiceFormState> => {
  const invoice = await db.invoice.findUnique({
    where: {
      id,
    },
    include: {
      items: true,
      senderAddress: true,
      clientAddress: true,
    },
  });

  if (!invoice) {
    return {
      errors: {
        _form: ["Invoice not found"],
      },
    };
  }

  try {
    await db.invoice.update({
      where: { id },
      data: {
        status,
      },
    });
  } catch (error) {
    console.error("Error updating invoice:", error);
    return {
      errors: {
        _form: [
          "An error occurred while updating the invoice. Please try again.",
        ],
      },
    };
  }
  revalidatePath(`/invoices/${id}`);
  return {
    errors: {},
  };
};
