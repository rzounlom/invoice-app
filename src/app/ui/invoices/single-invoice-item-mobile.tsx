import { FC } from "react";
import { Item } from "@prisma/client";

interface SingleInvoiceItemMobileProps {
  item: Item;
}

const SingleInvoiceItemMobile: FC<SingleInvoiceItemMobileProps> = ({
  item,
}) => {
  return (
    <div className="mt-[24px] w-full h-[40px] flex justify-between text-[15px] font-bold leading-[15px] tracking-[-.25px]">
      <div className="h-full flex flex-col justify-between">
        <p className="text-jet-black dark:text-white">{item.name}</p>
        <p className="text-cool-blue dark:text-cool-blue">
          {item.quantity} X {item.price}
        </p>
      </div>
      <div className="h-full flex items-center">
        <p className="text-jet-black dark:text-white">
          £ {item.quantity * item.price}
        </p>
      </div>
    </div>
  );
};

export default SingleInvoiceItemMobile;
