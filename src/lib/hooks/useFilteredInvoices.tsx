import { useEffect, useState } from "react";

import { Invoice } from "@prisma/client";
import { useAppSelector } from "./hooks";

// Define the type for your invoices if you're using TypeScript
// interface Invoice { id: string; status: 'PAID' | 'PENDING' | 'DRAFT'; /* other properties */ }

export const useFilteredInvoices = (invoices: Invoice[]) => {
  const filterStatus = useAppSelector(
    (state: { invoice: { filterStatus: any } }) => state.invoice.filterStatus
  );
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);

  useEffect(() => {
    switch (filterStatus) {
      case "paid":
        setFilteredInvoices(
          invoices.filter((invoice) => invoice.status === "PAID")
        );
        break;
      case "pending":
        setFilteredInvoices(
          invoices.filter((invoice) => invoice.status === "PENDING")
        );
        break;
      case "draft":
        setFilteredInvoices(
          invoices.filter((invoice) => invoice.status === "DRAFT")
        );
        break;
      default:
        setFilteredInvoices(invoices);
    }
  }, [filterStatus, invoices]);

  return filteredInvoices;
};
