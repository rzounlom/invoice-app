import { INVOICE_STATUS, Invoice } from "@prisma/client";

import { FC } from "react";
import InvoiceCard from "./InvoiceCard";
import NoInvoices from "@/components/NoInvoices";

interface InvoiceListProps {
  invoices: Invoice[];
}

const InvoiceList: FC<InvoiceListProps> = ({ invoices }) => {
  if (!invoices.length) return <NoInvoices />;
  return (
    <div className="mt-8">
      {invoices.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};

export default InvoiceList;
