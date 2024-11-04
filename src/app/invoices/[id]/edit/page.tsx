import { FC } from "react";
import InvoiceMain from "@/app/ui/invoices/invoices-main";
import { db } from "@/db";

interface SingleInvoiceProps {
  params: {
    id: string;
  };
}

const SingleInvoice: FC<SingleInvoiceProps> = async ({ params }) => {
  const { id } = params;

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

  console.log("Found Invoice!", invoice);
  return (
    <div className="w-full h-[calc(100vh-80px)] xl:w-[calc(100vw-103px)] xl:h-full">
      <InvoiceMain>
        <div className="border h-full w-full flex flex-col">
          <div className="h-[91px] ">
            Single Invoice Edit page with invoice {id}
          </div>
        </div>
      </InvoiceMain>
    </div>
  );
};

export default SingleInvoice;
