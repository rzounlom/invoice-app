"use client";

import { Invoice, Item } from "@prisma/client";

import { FC } from "react";
import InvoiceActions from "./InvoiceActions";
import InvoiceItemsList from "./InvoiceItemsList";
import Link from "next/link";
import { formatText } from "@/utils/formatText";
import { formattedDate } from "@/utils/formatDate";
import { getStatusStyles } from "@/utils/getStatusStyles";

interface SingleInvoiceProps {
  invoice: Partial<Invoice>;
}

const SingleInvoice: FC<SingleInvoiceProps> = ({ invoice }) => {
  const statusStules = getStatusStyles(invoice.status);

  const invoiceTotal =
    invoice.items &&
    invoice.items.reduce(
      (total, item: Item) => (total += item.quantity * item.price),
      0
    );

  return (
    <div className="w-full h-[100vh] px-[24px] pt-[30px] pb-[50px] bg-[#F8F8FB] dark:bg-[#141625] rounded-b-md">
      <Link href="/invoices">
        <p className="h-[4px] w-[8px] font-bold color text-[#7C5DFA] hover:cursor-pointer] text-[20px]">
          &#x3c;
        </p>
        <p className="ml-[23px] text-[#0C0E16] dark:text-[#FFF] text-[15px] font-bold">
          Go Back
        </p>
      </Link>
      <div className="h-[91px] md:h-[80px] w-full p-[24px] md:p-[20px] mt-[28px] bg-[#FFF] dark:bg-[#1E2139] shadow-md rounded">
        <div className="w-full h-full flex justify-between items-center">
          <div className="w-full md:w-[20%] flex justify-between items-center">
            <p className="text-[#858BB2] dark:text-[#DFE3FA] text-[13px]">
              Status
            </p>
            <p
              className={`h-[40px] w-[104px] flex justify-center items-center text-[15px] font-bold rounded ${statusStules.bg} ${statusStules.text} shadow-md`}
            >
              <span
                className={`h-[8px] w-[8px] rounded ${statusStules.fill} mr-[8px] mb-[2px] shadow-md`}
              ></span>
              {invoice.status && formatText(invoice.status)}
            </p>
          </div>

          <div className="hidden md:block w-[50%] h-full">
            <InvoiceActions />
          </div>
        </div>
      </div>
      <div className="w-full min-h-[600px] md:min-h-[550px] mt-6 p-[24px] flex flex-col  md:px-[50px] bg-white dark:bg-[#1E2139] shadow-md rounded-md">
        <div className="h-[139px] md:h-[40px] flex flex-col justify-between md:flex-row">
          <div className="h-[34px]">
            <p className="text-[15px] font-bold text-white">
              <span className="text-[#7E88C3]">#</span>
              {invoice.id?.substring(0, 6)}
            </p>
            <p className="text-[18px] font-bold text-[#7E88C3] dark:text-[#DFE3FA]">
              {invoice.description}
            </p>
          </div>
          <div className="h-[75px] text-[13px] text-[#7E88C3] dark:text-[#DFE3FA]">
            <p>{invoice.senderAddress?.street}</p>
            <p>{invoice.senderAddress?.city}</p>
            <p>{invoice.senderAddress?.postCode}</p>
            <p>{invoice.senderAddress?.country}</p>
          </div>
        </div>
        <div className="h-[220px] mt-6 flex flex-col justify-between md:flex-row  md:items-center">
          <div className="h-[65%] flex md:w-full">
            <div className="h-full w-[50%] flex flex-col justify-between">
              <div className="h-[40%] flex flex-col justify-between">
                <p className="text-[13px] text-[#7E88C3] dark:text-[#DFE3FA]">
                  Invoice Date
                </p>
                <p className="text-[15px] font-bold">
                  {invoice.createdAt &&
                    formattedDate(invoice.createdAt.toISOString())}
                </p>
              </div>
              <div className="h-[40%] flex flex-col justify-between">
                <p className="text-[13px] text-[#7E88C3] dark:text-[#DFE3FA]">
                  Payment Date
                </p>
                <p className="text-[15px] font-bold">
                  {invoice.paymentDate && formattedDate(invoice.paymentDate)}
                </p>
              </div>
            </div>
            <div className="h-full w-[50%]">
              <div className="h-full">
                <div className="h-[40%] flex flex-col justify-between">
                  <p className="text-[13px] text-[#7E88C3] dark:text-[#DFE3FA]">
                    Bill To
                  </p>
                  <p className="text-[15px] font-bold">{invoice.clientName}</p>
                </div>
                <div className="h-[60%] text-[13px] text-[#7E88C3] flex flex-col justify-between dark:text-white">
                  <p>{invoice.clientAddress?.street}</p>
                  <p>{invoice.clientAddress?.city}</p>
                  <p>{invoice.clientAddress?.postCode}</p>
                  <p>{invoice.clientAddress?.country}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[25%] md:h-[60%] flex flex-col justify-between md:justify-start items-start">
            <p className="text-[13px] text-[#7E88C3] dark:text-[#DFE3FA]">
              Send to
            </p>
            <p className="font-bold md:mt-2">{invoice.clientEmail}</p>
          </div>
        </div>
        <div className="min-h-[154px] mt-6 rounded-t-md w-full flex flex-col bg-[#F9FAFE] dark:bg-[#252945] justify-between">
          {invoice.items && <InvoiceItemsList items={invoice.items} />}
          <div className="h-[80px] flex justify-around items-center mt-6 bg-[#0C0E16] text-white rounded-b-md">
            <p>Grand total</p>
            <p className="font-bold text-xl">£ {invoiceTotal?.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInvoice;
