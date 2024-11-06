"use client";

import * as actions from "@/actions";

import { FC, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import DeleteInvoiceModal from "./delete-invoice-modal";
import { FullInvoice } from "@/lib/utils/types/invoices";
import Image from "next/image";
import Link from "next/link";
import SingleInvoiceItemList from "./single-invoice-item-list";
import StatusCard from "./status-card";
import clsx from "clsx";
import { formatDate } from "@/lib/utils/format-date";

interface SingleInvoiceProps {
  invoice: FullInvoice;
}

const SingleInvoice: FC<SingleInvoiceProps> = ({ invoice }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isMobile, setIsMobile] = useState(false);

  const { pending } = useFormStatus();

  const [formState, action] = useFormState(
    actions.updateInvoiceStatus.bind(
      null,
      invoice.id,
      invoice.status === "draft" ? "pending" : "paid"
    ),
    {
      errors: {},
    }
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set the initial value
    checkScreenSize();

    // Add resize event listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const renderStatusText = () => {
    if (pending) {
      return "Saving...";
    } else if (invoice.status === "draft") {
      return "Mark as Pending";
    } else {
      return "Mark as Paid";
    }
  };

  return (
    <div className="h-auto w-full max-w-[735px] pb-[70px]">
      <DeleteInvoiceModal
        open={open}
        onClose={handleClose}
        invoiceId={invoice.id}
      />
      <Link
        href="/invoices"
        className="w-[100px] flex items-center cursor-pointer font-bold"
      >
        <Image
          className="mb-[2px]"
          src="/icon-arrow-left.svg"
          height={4}
          width={8}
          alt="arrow left"
        />
        <p className="ml-[23px] text-[15px]">Go Back</p>
      </Link>

      <div className="h-[91px] mt-[31px] shadow-md rounded-[8px] flex justify-between bg-white dark:bg-midnight-navy">
        <div className="h-full w-full md:w-[30%] p-[24px] flex justify-between items-center rounded-[8px]">
          <p className="text-[13px] font-medium  text-soft-steel-blue dark:text-pale-periwinkle leading-[15px] tracking-[-.1px]">
            Status
          </p>
          <StatusCard status={invoice.status} />
        </div>
        <div
          className={clsx(
            `hidden h-full w-[50%] p-[24px] md:flex items-center`,
            {
              "justify-around": invoice.status === "paid",
              "justify-between": invoice.status !== "paid",
            }
          )}
        >
          <Link href={`/invoices/${invoice.id}}/edit`}>
            <button
              className={clsx(
                `w-[73px] h-[48px] bg-muted-white dark:bg-deep-charcoal rounded-[24px] text-cool-blue dark:text-pale-periwinkle text-[15px] leading-[15px] tracking-[-.25px] font-bold`,
                {
                  "w-[131px]": invoice.status === "paid",
                }
              )}
            >
              Edit
            </button>
          </Link>

          <button
            className={clsx(
              `w-[89px] h-[48px] bg-coral-red rounded-[24px] text-white text-[15px] leading-[15px] tracking-[-.25px] font-bold`,
              {
                "w-[131px]": invoice.status === "paid",
              }
            )}
            onClick={handleOpen}
          >
            Delete
          </button>
          {invoice.status !== "paid" && (
            <form action={action}>
              <button
                type="submit"
                className="w-[131px] h-[48px] bg-lavender-purple rounded-[24px] text-white text-[15px] leading-[15px] tracking-[-.25px] font-bold"
              >
                {renderStatusText()}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="w-full min-h-[500px] mt-[16px] p-[32px] bg-white dark:bg-midnight-navy rounded-[8px] shadow-md">
        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div>
            <p className="text-[15px] font-bold leading-[15px] tracking-[-.25px]">
              <span className="text-cool-blue">#</span>
              <span className="text-jet-black dark:text-white">
                {invoice.id.substring(0, 6).toUpperCase()}
              </span>
            </p>
            <p className="mt-[7px] text-[13px] font-medium text-cool-blue dark:text-pale-periwinkle leading-[15px] tracking-[-.1px]">
              {invoice.description}
            </p>
          </div>
          <div className="mt-[30px] md:mt-0 text-[13px] font-medium text-cool-blue dark:text-pale-periwinkle leading-[15px] tracking-[-.1px]">
            <p>{invoice.senderAddress.street}</p>
            <p>{invoice.senderAddress.city}</p>
            <p>{invoice.senderAddress.postCode}</p>
            <p>{invoice.senderAddress.country}</p>
          </div>
        </div>
        <div className="mt-[31px] w-full flex flex-wrap min-h-[130px]">
          <div className="w-1/2 h-full md:w-1/3">
            <div>
              <p className="text-[13px] font-medium text-cool-blue dark:text-pale-periwinkle leading-[15px] tracking-[-.1px]">
                Invoice Date
              </p>
              <p className="mt-[10px] text-[15px] font-bold text-jet-black dark:text-white leading-[20px] tracking-[-.25px]">
                {formatDate(invoice.createdAt)}
              </p>
            </div>
            <div className="mt-[25px]">
              <p className="text-[13px] font-medium text-cool-blue dark:text-pale-periwinkle leading-[15px] tracking-[-.1px]">
                Payment Date
              </p>
              <p className="mt-[12px] text-[15px] font-bold text-jet-black dark:text-white leading-[20px] tracking-[-.25px]">
                {formatDate(invoice.paymentDue)}
              </p>
            </div>
          </div>

          <div className="w-1/2 h-full md:w-1/3">
            <div>
              <p className="text-[13px] font-medium text-cool-blue dark:text-pale-periwinkle leading-[15px] tracking-[-.1px]">
                Bill To
              </p>
              <p className="mt-[10px] text-[15px] font-bold text-jet-black dark:text-white leading-[20px] tracking-[-.25px]">
                {invoice.clientName}
              </p>
              <div className="md:mt-0 text-[13px] font-medium text-cool-blue dark:text-pale-periwinkle leading-[18px] tracking-[-.1px]">
                <p>{invoice.clientAddress.street}</p>
                <p>{invoice.clientAddress.city}</p>
                <p>{invoice.clientAddress.postCode}</p>
                <p>{invoice.clientAddress.country}</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 mt-[30px] md:mt-0">
            <p className="text-[13px] font-medium text-cool-blue dark:text-pale-periwinkle leading-[15px] tracking-[-.1px]">
              Sent to
            </p>
            <p className="mt-[10px] text-[15px] font-bold text-jet-black dark:text-white leading-[20px] tracking-[-.25px]">
              {invoice.clientEmail}
            </p>
          </div>
          <div className="border w-full mt-[30px] flex flex-col p-[24px] pt-0 min-h-[74px] bg-muted-white dark:bg-deep-charcoal rounded-t-[8px]">
            <SingleInvoiceItemList items={invoice.items} />
          </div>
          <div className="border w-full h-[80px] p-[24px] flex items-center justify-between bg-pale-navy dark:bg-jet-black rounded-b-[8px] text-white">
            <p className="text-[13px] font-medium leading-[18px] tracking-[-.1px]">
              Grand Total
            </p>
            <p className="text-[24px] font-bold leading-[32px] tracking-[-.5px]">
              £ {invoice.total}
            </p>
          </div>
        </div>
      </div>

      {isMobile && (
        <div className="md:hidden h-[91px] mt-[31px] shadow-md rounded-[8px] flex justify-between bg-white dark:bg-midnight-navy">
          <div
            className={clsx(
              `md:hidden h-full w-full p-[24px] flex  items-center`,
              {
                "justify-around": invoice.status === "paid",
                "justify-between": invoice.status !== "paid",
              }
            )}
          >
            <Link href={`/invoices/${invoice.id}}/edit`}>
              <button
                className={clsx(
                  `w-[73px] h-[48px] bg-muted-white dark:bg-deep-charcoal rounded-[24px] text-cool-blue dark:text-pale-periwinkle text-[15px] leading-[15px] tracking-[-.25px] font-bold`,
                  { "w-[131px]": invoice.status === "paid" }
                )}
              >
                Edit
              </button>
            </Link>

            <button
              className={clsx(
                `w-[89px] h-[48px] bg-coral-red rounded-[24px] text-white text-[15px] leading-[15px] tracking-[-.25px] font-bold`,
                {
                  "w-[131px]": invoice.status === "paid",
                }
              )}
              onClick={handleOpen}
            >
              Delete
            </button>
            {invoice.status !== "paid" && (
              <form action={action}>
                <button
                  type="submit"
                  disabled={pending}
                  className="w-[131px] ml-[2px] h-[48px] bg-lavender-purple rounded-[24px] text-white text-[15px] leading-[15px] tracking-[-.25px] font-bold"
                >
                  {renderStatusText()}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleInvoice;
