import { FC } from "react";
import Image from "next/image";

const NoInovices: FC = ({}) => {
  return (
    <div className="max-w-full h-[93%] md:h-[70%] xl:h-[93%] flex justify-center items-center">
      <div className="w-full flex flex-col items-center">
        <div className="h-[200px] w-[242px] mb-[66px]">
          <Image
            src="/illustration-empty.svg"
            alt="no invoices"
            layout="responsive"
            width={100} // width as a percentage or arbitrary number
            height={100} // height as a percentage or arbitrary number
          />
        </div>

        <p className="text-[24px] font-bold  leading-normal tracking-[-.75px] text-jet-black dark:text-white">
          There is nothing here
        </p>
        <p className="w-[192px] h-[31px] mt-[23px] text-[13px] font-medium  leading-[15px] tracking-[-.1px] text-muted-slate dark:text-pale-periwinkle">
          Create a new invoice by clicking the New Invoice button and get
          started
        </p>
      </div>
    </div>
  );
};

export default NoInovices;
