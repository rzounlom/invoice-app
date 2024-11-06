import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

interface DeleteInvoiceFormState {
  errors: {
    _form?: string[];
  };
}

export const deleteInvoice = async (
  id: string,
  formState: DeleteInvoiceFormState
): Promise<DeleteInvoiceFormState> => {
  const invoice = await db.invoice.findUnique({
    where: {
      id,
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
    await db.invoice.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Error deleting invoice:", error);
    return {
      errors: {
        _form: [
          "An error occurred while deleting the invoice. Please try again.",
        ],
      },
    };
  }
  revalidatePath("/invoices");
  redirect("/invoices");
};
