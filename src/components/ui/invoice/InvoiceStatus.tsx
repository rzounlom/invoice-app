import { FC } from "react";
import { INVOICE_STATUS } from "@prisma/client";
import { formatText } from "@/utils/formatText";

interface InvoiceStatusProps {
  status: INVOICE_STATUS | undefined;
}

const PaidStatus: FC<InvoiceStatusProps> = ({ status }) => (
  <p
    className={`border-2 border-black h-[40px] w-[104px] flex justify-center items-center text-[15px] font-bold rounded bg-[#dcf7ee] text-[#33D69F] shadow-md`}
  >
    <span
      className={`h-[8px] w-[8px] rounded  mr-[8px] mb-[3px] shadow-md bg-[#33D69F]`}
    ></span>
    {status && formatText(status)}
  </p>
);

const PendingStatus: FC<InvoiceStatusProps> = ({ status }) => (
  <p
    className={`border-2 border-black h-[40px] w-[104px] flex justify-center items-center text-[15px] font-bold rounded bg-[#fdecd2] text-[#FF8F00] shadow-md`}
  >
    <span
      className={`h-[8px] w-[8px] rounded  mr-[8px] mb-[3px] shadow-md bg-[#FF8F00]`}
    ></span>
    {status && formatText(status)}
  </p>
);

const DdraftStatus: FC<InvoiceStatusProps> = ({ status }) => (
  <p
    className={`border-2 border-black h-[40px] w-[104px] flex justify-center items-center text-[15px] font-bold rounded bg-[#e4e4ea] text-[#373B53] shadow-md`}
  >
    <span
      className={`h-[8px] w-[8px] rounded  mr-[8px] mb-[3px] shadow-md bg-[#373B53]`}
    ></span>
    {status && formatText(status)}
  </p>
);

const InvoiceStatus: FC<InvoiceStatusProps> = ({ status }) => {
  console.log({ status });
  switch (status) {
    case status && status === "PAID":
      return <PaidStatus status={status} />;
    case status && status === "PENDING":
      return <PendingStatus status={status} />;
    default:
      return <DdraftStatus status={status} />;
  }
};

export default InvoiceStatus;
