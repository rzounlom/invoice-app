import EditInvoice from "@/app/ui/invoices/edit-invoice";
import { FC } from "react";
import { FullInvoice } from "@/lib/utils/types/invoices";
import InvoiceMain from "@/app/ui/invoices/invoices-main";
import { db } from "@/db";

interface EditleInvoiceProps {
  params: {
    id: string;
  };
}

const EditleInvoice: FC<EditleInvoiceProps> = async ({ params }) => {
  const { id } = params;

  const invoice: FullInvoice | null = await db.invoice.findUnique({
    where: {
      id,
    },
    include: {
      items: true,
      senderAddress: true,
      clientAddress: true,
    },
  });

  return (
    <div className="w-full h-[calc(100vh-80px)] xl:w-[calc(100vw-103px)] xl:h-full">
      <InvoiceMain>{invoice && <EditInvoice invoice={invoice} />}</InvoiceMain>
    </div>
  );
};

export default EditleInvoice;
