import { FC } from "react";
import InvoiceItem from "./invoice-item";
import { Item } from "@prisma/client";

interface InvoiceItemListProps {
  items: Omit<Item, "id">[];
  onRemoveItem: (item: Item | Omit<Item, "id">) => void;
}

const InvoiceItemList: FC<InvoiceItemListProps> = ({ items, onRemoveItem }) => {
  return (
    <div className="w-full mt-[69px] md:mt-[25px]">
      <p className="text-[15px] font-bold text-lavender-purple leading-[15px] tracking-[-.25px]">
        Item List
      </p>

      {items.map((item, idx) => (
        <InvoiceItem
          key={`${idx}-${item.invoiceId}`}
          item={item}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </div>
  );
};

export default InvoiceItemList;
