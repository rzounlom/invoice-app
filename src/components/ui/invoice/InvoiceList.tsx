import { FC } from "react";
import { Invoice } from "@prisma/client";
import InvoiceCard from "./InvoiceCard";
import Link from "next/link";
import NoInvoices from "@/components/NoInvoices";

interface InvoiceListProps {
  invoices: Invoice[];
}

// const testInvoice = {
//   senderAddress: {
//     street: "19 Union Terrace",
//     city: "London",
//     postCode: "E1 3EZ",
//     country: "United Kingdom",
//   },
//   clientAddress: {
//     street: "84 Church Way",
//     city: "Bradford",
//     postCode: "BD1 9PB",
//     country: "United Kingdom",
//   },
//   items: [
//     {
//       name: "Brand Guidelines",
//       quantity: 1,
//       price: 1800.9,
//       total: 1800.9,
//     },
//     {
//       name: "Brand Guidelines",
//       quantity: 1,
//       price: 1800.9,
//       total: 1800.9,
//     },
//   ],
//   id: "65a852d61a8ef576a4e17754",
//   userId: "65a2dcae8e53c996de9beab0",
//   // createdAt: "2024-01-17T22:21:10.891Z",
//   // updatedAt: "2024-01-17T22:21:10.891Z",
//   paymentDate: "2021-08-19",
//   description: "Re-branding",
//   paymentTerms: 1,
//   clientName: "Jensen Huang",
//   clientEmail: "test@gmail.com",
//   status: INVOICE_STATUS.PENDING,
//   total: 3601.8,
// };

const InvoiceList: FC<InvoiceListProps> = ({ invoices }) => {
  if (!invoices.length) return <NoInvoices />;
  return (
    <div className="mt-8 max-h-[700px] md:max-h-[900px]  xl:max-h-[730px] overflow-auto">
      {invoices.map((invoice) => (
        <div key={invoice.id}>
          <Link href={`/invoices/${invoice.id}`}>
            <InvoiceCard invoice={invoice} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InvoiceList;
