import { FC } from "react";
import InvoiceMain from "@/app/ui/invoices/invoices-main";
import NewInvoice from "@/app/ui/invoices/new-invoice";

const NewInvoicePage: FC = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] xl:w-[calc(100vw-103px)] xl:h-full text-jet-black dark:text-white">
      <InvoiceMain>
        <NewInvoice />
      </InvoiceMain>
    </div>
  );
};

export default NewInvoicePage;
