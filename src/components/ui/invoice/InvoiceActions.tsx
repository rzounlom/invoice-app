import { FC } from "react";

interface InvoiceActionsProps {}

const InvoiceActions: FC<InvoiceActionsProps> = ({}) => {
  return (
    <div className="w-full h-full flex justify-between items-center px-[24px] py-[22px] shadow-md dark:bg-[#252945]">
      <button className="h-[48px] w-[73px] rounded-full bg-[#F9FAFE] dark:bg-[#252945] font-bold text-[#7E88C3] dark:text-[#DFE3FA] shadow-md">
        Edit
      </button>
      <button className="h-[48px] w-[89px] rounded-full font-bold text-white bg-[#EC5757] shadow-md">
        Delete
      </button>
      <button className="h-[48px] w-[149px] rounded-full font-bold text-white bg-[#7C5DFA] shadow-md">
        Mark as Paid
      </button>
    </div>
  );
};

export default InvoiceActions;
