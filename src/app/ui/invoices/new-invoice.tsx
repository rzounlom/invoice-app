"use client";

import { FC, useState } from "react";

import Image from "next/image";
import InvoiceItemList from "./invoice-item-list";
import { Item } from "@prisma/client";
import Link from "next/link";
import NewInvoiceModal from "./new-invoice-modal";
import { v4 as uuidv4 } from "uuid";

const items = [
  {
    name: "Front-End Development",
    quantity: 1,
    price: 180,
    total: 180,
    invoiceId: "1",
    id: "a",
  },
  {
    name: "Back-End Development",
    quantity: 1,
    price: 180,
    total: 180,
    invoiceId: "2",
    id: "ab",
  },
  {
    name: "UI/UX Design",
    quantity: 1,
    price: 250,
    total: 250,
    invoiceId: "3",
    id: "abc",
  },
];

const NewInvoice: FC = () => {
  const [invoiceItmes, setInvoiceItems] = useState<Omit<Item, "id">[]>(items);
  const [open, setOpen] = useState(false);

  const handleAddItem = (item: Omit<Item, "id" | "invoiceId">) => {
    console.log("Add Item", item);
    const newItem = {
      ...item,
      invoiceId: uuidv4(),
      price: Number(item.price),
      quantity: Number(item.quantity),
    };
    console.log("New Item", newItem);
    setInvoiceItems([...invoiceItmes, newItem]);
  };

  const handleDeleteItem = (id: string) => {
    console.log("Delete Item", id);
    setInvoiceItems(invoiceItmes.filter((item) => item.invoiceId !== id));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <NewInvoiceModal
        open={open}
        onClose={handleClose}
        addNewItem={handleAddItem}
      />
      <div className="h-auto w-full max-w-[735px] pb-[100px]">
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
        <p className="mt-[26px] font-bold text-[24px] leading-[32px] tracking-[-.5px]">
          New Invoice{" "}
        </p>

        {/* Business Info */}
        <div className="w-full mt-[22px]">
          <p className="text-[15px] font-bold text-lavender-purple leading-[15px] tracking-[-.25px]">
            Bill From
          </p>
          <div className="mt-[24px]">
            <div>
              <label
                htmlFor="address"
                className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
              >
                Street Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="777 Miami Ave"
                className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="mt-[25px] w-[47%] md:w-[32%]">
                <label
                  htmlFor="city"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Miami"
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-[25px] w-[47%] md:w-[32%]">
                <label
                  htmlFor="zip"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Postal Code
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  placeholder="46240"
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-[25px] w-full md:w-[32%]">
                <label
                  htmlFor="country"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="United States"
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Client Info */}
        <div className="w-full mt-[22px]">
          <p className="text-[15px] font-bold text-lavender-purple leading-[15px] tracking-[-.25px]">
            Bill To
          </p>
          <div className="mt-[24px]">
            <div>
              <label
                htmlFor="clientName"
                className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
              >
                Client Name
              </label>
              <input
                id="clientName"
                name="clientName"
                type="text"
                placeholder="Alex Grim"
                className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label
                htmlFor="clientEmail"
                className="block mt-[25px] text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
              >
                Client&apos;s Email
              </label>
              <input
                id="clientEmail"
                name="clientEmail"
                type="text"
                placeholder="alexgrim@mail.com"
                className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label
                htmlFor="clientAddress"
                className="block mt-[25px] text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
              >
                Street Address
              </label>
              <input
                id="clientAddress"
                name="clientAddress"
                type="text"
                placeholder="84 Church Way"
                className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="mt-[25px] w-[47%] md:w-[32%]">
                <label
                  htmlFor="clientCity"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  City
                </label>
                <input
                  id="clientCity"
                  name="clientCity"
                  type="text"
                  placeholder="Bradford"
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-[25px] w-[47%] md:w-[32%]">
                <label
                  htmlFor="clientZip"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Postal Code
                </label>
                <input
                  id="clientZip"
                  name="clientZip"
                  type="text"
                  placeholder="BD1 9PB"
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-[25px] w-full md:w-[32%]">
                <label
                  htmlFor="clientCountry"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Country
                </label>
                <input
                  id="clientCountry"
                  name="clientCountry"
                  type="text"
                  placeholder="United Kingdom"
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Info */}
        <div className="w-full">
          <div className="mt-[25px]">
            <div className="flex flex-wrap justify-between">
              <div className="mt-[25px] w-[47%]">
                <label
                  htmlFor="invoiceDate"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Invoice Date
                </label>
                <input
                  id="invoiceDate"
                  name="invoiceDate"
                  type="text"
                  placeholder="21 Aug 2021"
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-[25px] w-[47%]">
                <label
                  htmlFor="paymentTerms"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Payment Terms
                </label>
                <input
                  id="paymentTerms"
                  name="paymentTerms"
                  type="text"
                  placeholder="Net 30 Days"
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-[25px] w-full">
                <label
                  htmlFor="description"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Project Description
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Graphic Design"
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          {/* Invoice Items */}
          <InvoiceItemList
            items={invoiceItmes}
            onRemoveItem={handleDeleteItem}
          />
          <div className="h-[48px] w-full mt-[15px]">
            <button
              className="h-full w-full flex justify-center items-center bg-pale-periwinkle hover:bg-muted-slate hover:text-off-white rounded-[24px] text-[15px] font-medium text-cool-blue dark:bg-deep-charcoal dark:hover:bg-pale-navy dark:text-pale-periwinkle transition duration-300 ease-in-out"
              onClick={handleOpen}
            >
              + Add New Item
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewInvoice;
