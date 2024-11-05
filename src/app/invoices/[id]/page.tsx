import { FC } from "react";
import { FullInvoice } from "@/lib/utils/types/invoices";
import InvoiceMain from "@/app/ui/invoices/invoices-main";
import SingleInvoice from "@/app/ui/invoices/single-invoice";
import { db } from "@/db";

interface SingleInvoiceProps {
  params: {
    id: string;
  };
}

const SingleInvoicePage: FC<SingleInvoiceProps> = async ({ params }) => {
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
    <div className="w-full h-[calc(100vh-80px)] xl:w-[calc(100vw-103px)] xl:h-full text-jet-black dark:text-white">
      <InvoiceMain>
        {invoice && <SingleInvoice invoice={invoice} />}
      </InvoiceMain>
    </div>
  );
};

export default SingleInvoicePage;
