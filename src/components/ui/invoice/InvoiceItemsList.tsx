import { FC } from "react";
import InvoiceItem from "./InvoiceItem";
import { Item } from "@prisma/client";

interface InvoiceItemsListProps {
  items: Item[];
}

const InvoiceItemsList: FC<InvoiceItemsListProps> = ({ items }) => {
  return (
    <div className="pr-4 pl-4 pt-4">
      {items.map((item: Item, idx) => (
        <InvoiceItem key={`item-[${idx}]`} item={item} />
      ))}
    </div>
  );
};

export default InvoiceItemsList;
