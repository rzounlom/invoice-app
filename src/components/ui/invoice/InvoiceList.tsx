import { INVOICE_STATUS, Invoice } from "@prisma/client";

import { FC } from "react";
import InvoiceCard from "./InvoiceCard";
import NoInvoices from "@/components/NoInvoices";

interface InvoiceListProps {
  invoices: Invoice[];
}

const testInvoice = {
  paymentDate: "2021-08-19",
  description: "Re-branding",
  paymentTerms: 1,
  clientName: "Jensen Huang",
  clientEmail: "test@gmail.com",
  status: INVOICE_STATUS.PENDING,
  userId: "65a2dcae8e53c996de9beab0",
  senderAddress: {
    street: "19 Union Terrace",
    city: "London",
    postCode: "E1 3EZ",
    country: "United Kingdom",
  },
  clientAddress: {
    street: "84 Church Way",
    city: "Bradford",
    postCode: "BD1 9PB",
    country: "United Kingdom",
  },
  items: [
    {
      name: "Brand Guidelines",
      quantity: 1,
      price: 1800.9,
      total: 1800.9,
    },
    {
      name: "Brand Guidelines",
      quantity: 1,
      price: 1800.9,
      total: 1800.9,
    },
  ],
  total: 3601.8,
};

const InvoiceList: FC<InvoiceListProps> = ({ invoices }) => {
  console.log("invoiceList: ", { invoices });
  if (!invoices.length) return <NoInvoices />;
  return (
    <div>
      <InvoiceCard invoice={testInvoice} />
    </div>
  );
};

export default InvoiceList;
