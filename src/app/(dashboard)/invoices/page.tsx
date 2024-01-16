import { FC } from "react";
import InvoiceHeader from "@/components/invoice/InvoiceHeader";

const InvoicesPage: FC = () => {
  return (
    <div className="w-screen px-[24px] pt-[30px] pb-[100px]">
      <InvoiceHeader />
    </div>
  );
};

export default InvoicesPage;
