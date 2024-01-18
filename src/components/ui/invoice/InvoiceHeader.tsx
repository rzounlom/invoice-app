"use client";

import { FC, useState } from "react";

import DropdownMenu from "../DropdownMenu";
import { INVOICE_STATUS } from "@prisma/client";
import Image from "next/image";
import SlideOver from "../SlideOver";
import { createNewInvoice } from "@/utils/api";

interface InvoiceHeaderProps {
  invoiceCount: number;
}

const InvoiceHeader: FC<InvoiceHeaderProps> = ({ invoiceCount }) => {
  const [open, setOpen] = useState(false);

  const handleNewInvoice = async () => {
    try {
      const newInvoice = await createNewInvoice({
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
      });

      console.log({ newInvoice });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="w-full h-[44px] flex justify-between items-center">
      <SlideOver open={open} setOpen={setOpen} />
      <div className="w-[50%]">
        <div className="text-[24px] font-bold color-[#0C0E16]">Invoices</div>
        <div className="text-[13px] color-[#888EB0]">
          {invoiceCount} invoices
        </div>
      </div>
      <div className="w-[60%] flex justify-between">
        <div className="relative flex justify-center items-center w-[50%]">
          <p>Filter</p>
          <p className="hidden md:block ml-1">by status</p>
          <DropdownMenu />
        </div>
        <div className="flex items-center w-[50%] ">
          <div
            className="w-[90px] h-[44px] md:w-[150px] flex justify-around items-center rounded-full bg-[#7C5DFA]"
            onClick={() => setOpen(true)}
          >
            <Image
              src="/img/icon/icon-plus.svg"
              alt="plus Icon"
              width={32}
              height={32}
            />

            <p
              className="mr-4 md:mr-2 md:flex text-white text-[15px] font-bold hover:cursor-pointer"
              onClick={() => handleNewInvoice()}
            >
              New <span className="hidden md:block ml-2">Invoice</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
