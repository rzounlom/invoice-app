export type DropdownItem = {
  id: number;
  name: "draft" | "pending" | "paid";
  label: string;
};

// invoice types
enum INVOICE_STATUS {
  DRAFT,
  PENDING,
  PAID,
  ARCIHVED,
}

export type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type Invoice = {
  userId: string;
  paymentDate: string;
  description: String;
  paymentTerms: number;
  clientName: String;
  clientEmail: String;
  status: INVOICE_STATUS;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
};
