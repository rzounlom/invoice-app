import { FC } from "react";
import { Item } from "@prisma/client";

interface SingleInvoiceItemDesktopProps {
  item: Item;
}

const SingleInvoiceItemDesktop: FC<SingleInvoiceItemDesktopProps> = ({
  item,
}) => {
  return (
    <div className="h-[15px] mt-[32px] flex justify-between">
      <div className="h-full">
        <p className="text-[15px] text-jet-black dark:text-white font-bold leading-[15px] tracking-[-.25px]">
          {item.name}
        </p>
      </div>
      <div className="w-1/2 flex justify-between">
        <p className="w-1/3 text-[15px] text-cool-blue dark:text-pale-periwinkle font-bold leading-[15px] tracking-[-.25px] text-center">
          {item.quantity}
        </p>

        <p className="w-1/3 text-[15px] text-cool-blue dark:text-pale-periwinkle font-bold leading-[15px] tracking-[-.25px] text-right">
          £ {item.price}
        </p>
        <p className="w-1/3 text-[15px] text-jet-black dark:text-white font-bold leading-[15px] tracking-[-.25px] text-right">
          £ {item.quantity * item.price}
        </p>
      </div>
    </div>
  );
};

export default SingleInvoiceItemDesktop;
