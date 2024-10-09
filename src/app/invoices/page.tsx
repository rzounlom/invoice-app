import { FC } from "react";
import InvoiceLIst from "../ui/invoices/Invoice-list";
import InvoiceMain from "../ui/invoices/invoices-main";
import invoices from "@/data/data.json";

const Home: FC = () => {
  //TODO: remove hardcoded data and fetch from db
  return (
    <div className="w-full h-[calc(100vh-80px)] xl:w-[calc(100vw-103px)] xl:h-full">
      <InvoiceMain>
        <InvoiceLIst invoices={invoices} />
      </InvoiceMain>
    </div>
  );
};

export default Home;
