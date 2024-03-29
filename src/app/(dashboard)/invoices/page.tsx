import { FC } from "react";
import { Invoice } from "@prisma/client";
import InvoiceHeader from "@/components/ui/invoice/InvoiceHeader";
import InvoiceList from "@/components/ui/invoice/InvoiceList";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getInvoices = async () => {
  let invoices: Invoice[] | [] = [];

  const user = await getUserFromClerkID();

  if (user) {
    invoices = await prisma.invoice.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return invoices;
};

const InvoicesPage: FC = async () => {
  const invoices = await getInvoices();

  return (
    <div className="w-full px-[24px] pt-[30px] pb-[50px] bg-#F8F8FB dark:bg-[#141625]">
      <InvoiceHeader invoiceCount={invoices.length} />
      <InvoiceList invoices={invoices} />
    </div>
  );
};

export default InvoicesPage;
