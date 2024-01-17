import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

export const GET = async (req: Request, res: Response) => {
  if (!req.body) {
    return NextResponse.next();
  }

  const { userId } = await req.json();

  const invoices = await prisma.invoice.findMany({
    where: {
      userId,
    },
  });
  console.log({ invoices });

  return NextResponse.json({ data: invoices });
};

export const POST = async (req: Request, res: Response) => {
  if (!req.body) {
    return NextResponse.next();
  }

  const { invoice } = await req.json();

  const newInvoice = await prisma.invoice.create({
    data: {
      ...invoice,
    },
  });
  console.log({ newInvoice });

  return NextResponse.json({ data: newInvoice });
};
