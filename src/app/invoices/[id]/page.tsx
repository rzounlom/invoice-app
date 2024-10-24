import { FC } from "react";
import InvoiceMain from "@/app/ui/invoices/invoices-main";

const SingleInvoice: FC = async () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] xl:w-[calc(100vw-103px)] xl:h-full">
      <InvoiceMain>
        <div className="border h-full w-full flex flex-col">
          <div className="h-[91px] "></div>
        </div>
      </InvoiceMain>
    </div>
  );
};

export default SingleInvoice;
