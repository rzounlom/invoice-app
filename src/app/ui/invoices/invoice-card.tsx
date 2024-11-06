import { FC } from "react";
import Image from "next/image";
// import { Invoice } from "@/app/types";
import type { Invoice } from "@prisma/client";
import Link from "next/link";
import StatusCard from "./status-card";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatDate } from "@/lib/utils/format-date";
interface InvoiceCardProps {
  invoice: Invoice;
}

const InvoiceCard: FC<InvoiceCardProps> = ({ invoice }) => {
  return (
    <>
      <Link href={`/invoices/${invoice.id}`}>
        <div className="hidden md:flex md:flex-row justify-between items-center w-full h-[72px] rounded-[8px] shadow-md mt-[16px] bg-white dark:bg-midnight-navy hover:cursor-pointer border border-transparent hover:border-lavender-purple transition-colors duration-300 px-[24px]">
          <p className="w-[20%] font-bold tracking-[-.25px] leading[15px] ">
            <span className="text-muted-slate">#</span>
            <span className="text-jet-black dark:text-white">
              {invoice.id.substring(0, 6).toUpperCase()}
            </span>
          </p>
          <p className="w-[20%] flex text-[13px] tracking-[-.1px] leading[15px]">
            <span className="font-medium text-muted-slate dark:text-white">
              Due
            </span>{" "}
            <span className="ml-[5px] text-cool-blue dark:text-white">
              {formatDate(invoice.paymentDue)}
            </span>
          </p>
          <p className="w-[20%] font-medium text-[13px] text-soft-steel-blue dark:text-white leading-[15px] tracking-[-.1px]">
            {invoice.clientName}
          </p>
          <p className="w-[20%] font-bold text-jet-black dark:text-white leading-[24px] tracking-[-.25px]">
            £ {formatCurrency(invoice.total)}
          </p>
          <div className="w-[20%] flex justify-between items-center">
            <StatusCard status={invoice.status} />
            <div>
              <Image
                className="scale-[2]"
                src="/icon-arrow-right.svg"
                height={8}
                width={4}
                alt="arrow left"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden w-full h-[134px] flex items-center justify-between rounded-[8px] shadow-md mt-[16px] px-[24px] py-[25px] bg-white dark:bg-midnight-navy">
          <div className="flex flex-col justify-between items-start w-[50%] h-full text-[15px]">
            <p className="font-bold tracking-[-.25px] leading[15px]">
              <span className="text-muted-slate">#</span>
              <span className="text-jet-black dark:text-white">
                {invoice.id.substring(0, 6).toUpperCase()}
              </span>
            </p>
            <p className="flex text-[13px] tracking-[-.1px] leading[15px]">
              <span className="font-medium text-muted-slate dark:text-white">
                Due
              </span>{" "}
              <span className="ml-[5px] text-cool-blue dark:text-white">
                {formatDate(invoice.paymentDue)}
              </span>
            </p>
            <p className="font-bold text-jet-black dark:text-white leading-[24px] tracking-[-.25px]">
              £ {formatCurrency(invoice.total)}
            </p>
          </div>
          <div className="flex flex-col justify-between items-end w-[50%] h-full">
            <p className="font-medium text-[13px] text-soft-steel-blue dark:text-white leading-[15px] tracking-[-.1px]">
              {invoice.clientName}
            </p>
            <StatusCard status={invoice.status} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default InvoiceCard;
