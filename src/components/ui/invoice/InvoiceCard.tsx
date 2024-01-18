import { FC } from "react";
import { Invoice } from "@prisma/client";
import { formatNumber } from "@/utils/formatNumber";
import { formatText } from "@/utils/formatText";
import { formattedDate } from "@/utils/formatDate";

interface InvoiceCardProps {
  invoice: Partial<Invoice>;
}

const InvoiceCard: FC<InvoiceCardProps> = ({ invoice }) => {
  const statusStyle = () => {
    switch (invoice?.status) {
      case "PAID":
        return { bg: "#dcf7ee", text: "#33D69F" };
      case "PENDING":
        return { bg: "#fdecd2", text: "#FF8F00" };
      case "DRAFT":
        return { bg: "#e4e4ea", text: "#373B53" };
      default:
        return { bg: "#e4e4ea", text: "#373B53" };
    }
  };

  const renderStatus = statusStyle();

  return (
    <div className="h-[134px] w-full mt-[6px] rounded shadow-md p-[24px] bg-white dark:bg-[#1E2139]">
      <div className="flex justify-between items-start h-[30%]">
        <p className="text-[15px] font-bold">
          <span className="text-[#7E88C3] dark:text-white">#</span>
          {invoice.id?.substring(0, 6)}
        </p>
        <p className="text-[13px] text-[#858BB2] dark:text-white">
          Jensen Huang
        </p>
      </div>
      <div className="flex justify-between items-center h-[60%]">
        <div className="flex flex-col h-full justify-between">
          <p className="text-[13px] text-[#7E88C3] dark:text-white">
            Due {invoice?.paymentDate && formattedDate(invoice.paymentDate)}
          </p>
          <p className="text-[15px] font-bold dark:text-white">
            &#8364; {invoice?.total && formatNumber(invoice?.total)}
          </p>
        </div>
        <p
          className={`h-[40px] w-[104px] flex justify-center items-center text-[15px] font-bold rounded bg-[${renderStatus.bg}] text-[${renderStatus.text}]`}
        >
          <span
            className={`h-[8px] w-[8px] rounded bg-[${renderStatus.text}] mr-[8px] mb-[2px] shadow-md`}
          ></span>
          {invoice.status && formatText(invoice.status)}
        </p>
      </div>
    </div>
  );
};

export default InvoiceCard;
