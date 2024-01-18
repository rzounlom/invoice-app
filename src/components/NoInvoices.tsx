import { FC } from "react";

const NoInvoices: FC = ({}) => {
  return (
    <div className="min-h-[70vh] md:min-h-[80vh] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="h-[160px] md:h-[200px] md:w-[241px] w-[193px] bg-[url('/img/illustration-empty.svg')] bg-cover"></div>
        <p className="text-[24px] font-bold mt-8 text-[#0C0E16] dark:text-white">
          There is nothing here
        </p>
        <p className="text-[13px] font-medium mt-2 text-[#0C0E16] dark:text-white text-center">
          Create an invoice by clicking the <br /> New button and get started
        </p>
      </div>
    </div>
  );
};

export default NoInvoices;
