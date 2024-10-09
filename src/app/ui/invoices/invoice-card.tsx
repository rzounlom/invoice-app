import { FC } from "react";
import { Invoice } from "@/app/types";
import StatusCard from "./status-card";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatDate } from "@/lib/utils/format-date";

interface InvoiceCardProps {
  invoice: Invoice;
}

const InvoiceCard: FC<InvoiceCardProps> = ({ invoice }) => {
  return (
    <>
      <div className="hidden md:block border-t border-b border-midnight-navy w-full h-[72px] flex items-center justify-between bg-off-white dark:bg-midnight-navy">
        <div className="flex items-center w-[33%] h-full">
          <p className="text-[15px] ml-[24px]">{invoice.id}</p>
        </div>
        <div className="flex items-center w-[33%] h-full">
          <p className="text-[15px]">{invoice.clientName}</p>
        </div>
        <div className="flex items-center w-[33%] h-full">
          <p className="text-[15px]">{invoice.status}</p>
        </div>
      </div>
      <div className="md:hidden w-full h-[134px] flex items-center justify-between rounded-[8px] shadow-md mt-[16px] px-[24px] py-[25px] bg-white dark:bg-midnight-navy">
        <div className="flex flex-col justify-between items-start w-[50%] h-full text-[15px]">
          <p className="font-bold tracking-[-.25px] leading[15px]">
            <span className="text-muted-slate">#</span>
            <span className="text-jet-black dark:text-white">{invoice.id}</span>
          </p>
          <p className="flex text-[13px] tracking-[-.1px] leading[15px]">
            <span className="font-medium text-muted-slate">Due</span>{" "}
            <span className="ml-[5px] text-cool-blue">
              {formatDate(invoice.paymentDue)}
            </span>
          </p>
          <p className="font-bold text-jet-black leading-[24px] tracking-[-.25px]">
            £ {formatCurrency(invoice.total)}
          </p>
        </div>
        <div className="flex flex-col justify-between items-end w-[50%] h-full">
          <p className="font-medium text-[13px] text-soft-steel-blue leading-[15px] tracking-[-.1px]">
            {invoice.clientName}
          </p>
          <StatusCard status={invoice.status} />
        </div>
      </div>
    </>
  );
};

export default InvoiceCard;
