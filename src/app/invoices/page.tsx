import { FC } from "react";
import InvoiceMain from "../ui/invoices/invoices-main";

const Home: FC = () => {
  return (
    <div className="w-full h-[calc(100vh-103px)] xl:w-[calc(100vw-103px)] xl:h-full">
      <InvoiceMain />
    </div>
  );
};

export default Home;
