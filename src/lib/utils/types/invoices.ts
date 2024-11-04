import { Address, Invoice, Item } from "@prisma/client";

export interface FullInvoice extends Invoice {
  items: Item[];
  senderAddress: Address;
  clientAddress: Address;
}
