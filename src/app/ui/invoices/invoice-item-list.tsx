import { FC } from "react";
import InvoiceItemNew from "./invoice-item-new";
import { Item } from "@prisma/client";

interface InvoiceItemListProps {
  items: Item[];
}

const InvoiceItemList: FC<InvoiceItemListProps> = ({ items }) => {
  return (
    <div className="w-full mt-[69px] md:mt-[25px]">
      <p className="text-[15px] font-bold text-lavender-purple leading-[15px] tracking-[-.25px]">
        Item List
      </p>

      {items.map((item) => (
        <InvoiceItemNew key={item.id} item={item} />
      ))}
    </div>
  );
};

export default InvoiceItemList;
