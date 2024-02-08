import { FC } from "react";
import { Item } from "@prisma/client";

interface InvoiceItemProps {
  item: Item;
}

const InvoiceItem: FC<InvoiceItemProps> = ({ item }) => {
  return (
    <div className="h-[48px] flex font-bold">
      <div className="h-full w-[50%] flex flex-col justify-around">
        <p className="">Banner Design</p>
        <p className="text-[#7E88C3]">
          {item.quantity} x £ {item.price.toFixed(2)}
        </p>
      </div>
      <div className="h-full w-[50%] flex items-center justify-end">
        <p>£ {item.total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default InvoiceItem;
