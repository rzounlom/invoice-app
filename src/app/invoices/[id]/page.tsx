import { FC } from "react";
import InvoiceMain from "@/app/ui/invoices/invoices-main";

const SingleInvoice: FC = () => {
  return (
    <div className="w-full h-[calc(100vh-103px)] xl:w-[calc(100vw-103px)]">
      <InvoiceMain>Single Invoice</InvoiceMain>
    </div>
  );
};

export default SingleInvoice;
