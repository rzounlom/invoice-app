import { FC } from "react";
import InvoiceActions from "@/components/ui/invoice/InvoiceActions";
import SingleInvoice from "@/components/ui/invoice/SingleInvoice";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

interface InvoicePageProps {
  params: { id: string };
}

const getInvoice = async (id: string) => {
  const user = await getUserFromClerkID();
  try {
    const invoice = await prisma.invoice.findUnique({
      where: {
        userId: user?.id,
        id,
      },
    });
    return invoice;
  } catch (error) {
    console.log(error);
  }
};

const InvoicePage: FC<InvoicePageProps> = async ({ params }) => {
  const invoice = await getInvoice(params.id);
  return (
    <div>
      <SingleInvoice invoice={invoice!!} />
      <div className="md:hidden h-[91px] shadow-md">
        <InvoiceActions />
      </div>
    </div>
  );
};

export default InvoicePage;
