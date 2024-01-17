import { FC } from "react";
import InvoiceHeader from "@/components/invoice/InvoiceHeader";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getInvoices = async () => {
  const user = await getUserFromClerkID();
  const invoices = await prisma.invoice.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return invoices;
};

const InvoicesPage: FC = async () => {
  const invoices = await getInvoices();

  console.log({ invoices });
  return (
    <div className="w-screen px-[24px] pt-[30px] pb-[100px]">
      <InvoiceHeader />
    </div>
  );
};

export default InvoicesPage;
