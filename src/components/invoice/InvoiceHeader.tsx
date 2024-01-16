import DropdownMenu from "../ui/DropDownMenu";
import { FC } from "react";
import Image from "next/image";
interface InvoiceHeaderProps {}

const InvoiceHeader: FC<InvoiceHeaderProps> = ({}) => {
  return (
    <div className="w-full h-[44px] flex justify-between items-center">
      <div className="w-[50%]">
        <div className="text-[24px] font-bold color-[#0C0E16]">Invoices</div>
        <div className="text-[13px] color-[#888EB0]">7 invoices</div>
      </div>
      <div className="w-[60%] flex justify-between">
        <div className="relative flex justify-center items-center w-[50%]">
          <p>Filter</p>
          <p className="hidden md:block ml-1">by status</p>
          <DropdownMenu />
        </div>
        <div className="flex items-center w-[50%] ">
          <div className="w-[90px] h-[44px] md:w-[150px] flex justify-around items-center rounded-full bg-[#7C5DFA]">
            <Image
              src="/img/icon/icon-plus.svg"
              alt="plus Icon"
              width={32}
              height={32}
            />

            <p className="mr-4 md:mr-2 md:flex text-white text-[15px] font-bold">
              New <span className="hidden md:block ml-2">Invoice</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
