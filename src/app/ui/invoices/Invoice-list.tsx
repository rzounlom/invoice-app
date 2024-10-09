"use client";

import "./invoice-list.scss";

import { FC, useState } from "react";

import Image from "next/image";
import { Invoice } from "@/app/types";
import InvoiceCard from "./invoice-card";
import clsx from "clsx";

interface InvoiceLIstProps {
  invoices: Invoice[];
}

const InvoiceLIst: FC<InvoiceLIstProps> = ({ invoices }) => {
  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>(invoices); //TODO: turn into server component to and async when fetching data from db
  const [filter, setFilter] = useState({
    draft: false,
    paid: false,
    pending: false,
  });

  const [toggleFilter, setToggleFilter] = useState<boolean>(false);

  const handleToggleFilter = () => setToggleFilter(!toggleFilter);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    // Update the filter state based on the checkbox change
    const updatedFilter = { ...filter, [name]: checked };
    setFilter(updatedFilter);

    // Determine if any filter is active
    const isAnyFilterActive = Object.values(updatedFilter).some(
      (value) => value
    );

    // Filter the invoices based on the updated filter state
    const filtered = invoices.filter((invoice) => {
      // If no filter is active, return all invoices
      if (!isAnyFilterActive) {
        return true;
      }
      // Otherwise, filter based on the active filters
      if (updatedFilter.draft && invoice.status === "draft") {
        return true;
      }
      if (updatedFilter.paid && invoice.status === "paid") {
        return true;
      }
      if (updatedFilter.pending && invoice.status === "pending") {
        return true;
      }
      return false;
    });

    // Update the filtered invoices state
    setFilteredInvoices(filtered);
  };

  return (
    <div className="h-auto w-full max-w-[730px]">
      <div className="w-full h-[44px] lg:h-[48px] flex items-center relative">
        <div className="w-[50%] h-full flex flex-col justify-center">
          <p className="text-[24px] font-bold">Invoices</p>
          <p className="text-muted-slate text-[13px]">
            {invoices.length ? invoices.length : "No"} invoices
          </p>
        </div>
        <div className="flex w-[50%] h-full justify-between relative">
          <div
            className={clsx(
              "h-[128px] w-[192px] flex flex-col justify-center absolute p-[24px]  mt-[48px] right-[30%] lg:right-[55%] rounded-[8px] shadow-xl transition-opacity duration-300 bg-white dark:bg-midnight-navy",
              {
                "opacity-0 pointer-events-none": !toggleFilter, // Hide the element smoothly
                "opacity-100 pointer-events-auto": toggleFilter, // Show the element smoothly
              }
            )}
          >
            <div className="w-full flex items-center text-midnight-navy dark:text-white">
              <div>
                <input
                  name="draft"
                  type="checkbox"
                  checked={filter.draft}
                  className="appearance-none custom-checkbox h-[16px] w-[16px] border border-lavender-purple rounded-[2px] bg-pale-periwinkle checked:bg-lavender-purple checked:border-transparent focus:outline-none"
                  onChange={handleFilter}
                />
              </div>
              <p className="ml-[13px]">Draft</p>
            </div>
            <div className="w-full flex items-center text-midnight-navy dark:text-white">
              <div>
                <input
                  name="pending"
                  type="checkbox"
                  checked={filter.pending}
                  className="appearance-none custom-checkbox h-[16px] w-[16px] border border-lavender-purple rounded-[2px] bg-pale-periwinkle checked:bg-lavender-purple checked:border-transparent focus:outline-none"
                  onChange={handleFilter}
                />
              </div>
              <p className="ml-[13px]">Pending</p>
            </div>
            <div className="w-full flex items-center text-midnight-navy dark:text-white">
              <div>
                <input
                  name="paid"
                  type="checkbox"
                  checked={filter.paid}
                  className="appearance-none custom-checkbox h-[16px] w-[16px] border border-lavender-purple rounded-[2px] bg-pale-periwinkle checked:bg-lavender-purple checked:border-transparent focus:outline-none"
                  onChange={handleFilter}
                />
              </div>
              <p className="ml-[13px]">Paid</p>
            </div>
          </div>
          <div
            className="flex w-[53px] lg:w-[200px] items-center hover:cursor-pointer"
            onClick={handleToggleFilter}
          >
            <p className="text-[15px] font-bold lg:hidden">Filter</p>
            <p className="text-[15px] font-bold hidden lg:block">
              Filter by status
            </p>
            <div className="ml-[12px] ">
              <Image
                className="scale-[2]"
                src={
                  toggleFilter ? "/icon-arrow-up.svg" : "/icon-arrow-down.svg"
                }
                alt="arrow down icon"
                height={4}
                width={8}
              />
            </div>
          </div>

          <div className="w-[90px] lg:w-[150px] h-full hover:cursor-pointer">
            <button className="h-full w-full  flex items-center justify-between p-[6px] rounded-[24px] bg-lavender-purple text-white">
              <div className="h-[32px] w-[32px] bg-white rounded-full flex items-center justify-center text-lavender-purple">
                <Image
                  src="/icon-plus.svg"
                  height={12}
                  width={12}
                  alt="plus icon"
                />
              </div>
              <p className="mr-[8px] font-bold text-[15px] lg:hidden">New</p>
              <p className="mr-[8px] font-bold text-[15px] hidden lg:block">
                New Invoice
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[30px] mb-[100px]">
        {filteredInvoices.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </div>
  );
};

export default InvoiceLIst;
