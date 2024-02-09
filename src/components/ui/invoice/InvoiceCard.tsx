import { FC } from "react";
import Image from "next/image";
import { Invoice } from "@prisma/client";
import { formatNumber } from "@/utils/formatNumber";
import { formatText } from "@/utils/formatText";
import { formattedDate } from "@/utils/formatDate";
import { getStatusStyles } from "@/utils/getStatusStyles";

interface InvoiceCardProps {
  invoice: Partial<Invoice>;
}

const InvoiceCard: FC<InvoiceCardProps> = ({ invoice }) => {
  const statusStules = getStatusStyles(invoice.status);

  return (
    <div className="h-[134px]  md:h-[72px] w-full mt-[15px] rounded shadow-md p-[24px] bg-white dark:bg-[#1E2139]">
      <div className="flex justify-between items-center h-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-around md:w-[55%] h-full justify-between">
          <p className="text-[15px] font-bold">
            <span className="text-[#7E88C3] dark:text-white">#</span>
            {invoice.id?.substring(0, 6)}
          </p>
          <p className="text-[13px] text-[#7E88C3] dark:text-white">
            Due {invoice?.paymentDate && formattedDate(invoice.paymentDate)}
          </p>
          <p className="text-[15px] font-bold dark:text-white">
            £ {invoice?.total && formatNumber(invoice?.total)}
          </p>
        </div>
        <div className="h-full w-[104px] md:w-[35%] flex justify-between flex-col md:flex-row items-end md:items-center">
          <p className="text-[13px] text-[#858BB2] dark:text-white">
            {invoice.clientName}
          </p>
          <div className="flex items-center">
            <p
              className={`border-2 border-black h-[40px] w-[104px] flex justify-center items-center text-[15px] font-bold rounded ${statusStules.bg} ${statusStules.text} shadow-md`}
            >
              <span
                className={`h-[8px] w-[8px] rounded  mr-[8px] mb-[3px] shadow-md ${statusStules.fill}`}
              ></span>
              {invoice.status && formatText(invoice.status)}
            </p>
            <div className="ml-2 hidden md:block">
              <Image
                src={`/img/icon/icon-arrow-right.svg`}
                height={8}
                width={8}
                alt="arrow icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
