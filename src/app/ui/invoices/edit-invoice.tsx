"use client";

import * as actions from "@/actions";

import { FC, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { FullInvoice } from "@/lib/utils/types/invoices";
import Image from "next/image";
import InvoiceItemList from "./invoice-item-list";
import { Item } from "@prisma/client";
import Link from "next/link";
import NewInvoiceModal from "./new-invoice-modal";
import { v4 as uuidv4 } from "uuid";

interface EditInvoiceProps {
  invoice: FullInvoice;
}

const EditInvoice: FC<EditInvoiceProps> = ({ invoice }) => {
  const [invoiceItmes, setInvoiceItems] = useState<Item[] | Omit<Item, "id">[]>(
    invoice.items
  );

  const [itemsToDelete, setItemsToDelete] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [invoiceStatus, setInvoiceStatus] = useState<"pending" | "draft">(
    "pending"
  );
  const [formState, action] = useFormState(
    actions.editInvoice.bind(
      null,
      invoice,
      invoiceStatus,
      invoiceItmes,
      itemsToDelete
    ),
    {
      errors: {},
    }
  );

  const { pending } = useFormStatus();

  const handleAddItem = (item: Omit<Item, "id" | "invoiceId">) => {
    const newItem = {
      ...item,
      invoiceId: uuidv4(),
      price: Number(item.price),
      quantity: Number(item.quantity),
    };
    setInvoiceItems([...invoiceItmes, newItem]);
  };

  const handleDeleteItem = (currentItem: Item | Omit<Item, "id">) => {
    if ("id" in currentItem) {
      setItemsToDelete([...itemsToDelete, currentItem.id]);
      const newItems = invoiceItmes.filter((item) => {
        if ("id" in item && item.id !== currentItem.id) {
          return item.id !== currentItem.id;
        } else {
          return item.invoiceId !== currentItem.invoiceId;
        }
      });

      setInvoiceItems(newItems);
    } else {
      setInvoiceItems(
        invoiceItmes.filter((item) => item.invoiceId !== currentItem.invoiceId)
      );
    }
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

      <form action={action} className="h-auto w-full max-w-[735px] pb-[100px]">
        <Link
          href={`/invoices/${invoice.id}`}
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
          Edit Invoice{" "}
        </p>

        {/* Business Info */}
        <div className="w-full mt-[22px]">
          <p className="text-[15px] font-bold text-lavender-purple leading-[15px] tracking-[-.25px]">
            Bill From
          </p>
          {formState.errors.senderAddress && (
            <div className="mt-2 rounded p-2 bg-red-200 border border-red-400">
              {formState.errors.senderAddress &&
                formState.errors.senderAddress.join(", ")}
            </div>
          )}
          <div className="mt-[24px]">
            <div>
              <label
                htmlFor="senderStreet"
                className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
              >
                Street Address
              </label>
              <input
                id="senderStreet"
                name="senderStreet"
                type="text"
                placeholder="777 Miami Ave"
                defaultValue={invoice.senderAddress.street}
                className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy"
              />
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="mt-[25px] w-[47%] md:w-[32%]">
                <label
                  htmlFor="senderCity"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  City
                </label>
                <input
                  id="senderCity"
                  name="senderCity"
                  type="text"
                  placeholder="Miami"
                  defaultValue={invoice.senderAddress.city}
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy"
                />
              </div>
              <div className="mt-[25px] w-[47%] md:w-[32%]">
                <label
                  htmlFor="senderPostalCode"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Postal Code
                </label>
                <input
                  id="senderPostalCode"
                  name="senderPostalCode"
                  type="text"
                  placeholder="46240"
                  defaultValue={invoice.senderAddress.postCode}
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy"
                />
              </div>
              <div className="mt-[25px] w-full md:w-[32%]">
                <label
                  htmlFor="senderCountry"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Country
                </label>
                <input
                  id="senderCountry"
                  name="senderCountry"
                  type="text"
                  placeholder="United States"
                  defaultValue={invoice.senderAddress.country}
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy"
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
          {formState.errors.clientName && (
            <div className="mt-2 rounded p-2 bg-red-200 border border-red-400">
              {formState.errors.clientName.join(", ")}
            </div>
          )}
          {formState.errors.clientEmail && (
            <div className="mt-2 rounded p-2 bg-red-200 border border-red-400">
              {formState.errors.clientEmail.join(", ")}
            </div>
          )}
          {formState.errors.clientAddress && (
            <div className="mt-2 rounded p-2 bg-red-200 border border-red-400">
              {formState.errors.clientAddress.join(", ")}
            </div>
          )}
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
                defaultValue={invoice.clientName}
                className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy"
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
                defaultValue={invoice.clientEmail}
                className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy"
              />
            </div>
            <div>
              <label
                htmlFor="clientStreet"
                className="block mt-[25px] text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
              >
                Street Address
              </label>
              <input
                id="clientStreet"
                name="clientStreet"
                type="text"
                placeholder="84 Church Way"
                defaultValue={invoice.clientAddress.street}
                className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy"
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
                  defaultValue={invoice.clientAddress.city}
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy"
                />
              </div>
              <div className="mt-[25px] w-[47%] md:w-[32%]">
                <label
                  htmlFor="clientPostalCode"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Postal Code
                </label>
                <input
                  id="clientPostalCode"
                  name="clientPostalCode"
                  type="text"
                  placeholder="BD1 9PB"
                  defaultValue={invoice.clientAddress.postCode}
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy"
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
                  defaultValue={invoice.clientAddress.country}
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Info */}
        <div className="w-full">
          <div className="mt-[25px]">
            {formState.errors.paymentDue && (
              <div className="mt-2 rounded p-2 bg-red-200 border border-red-400 w-full">
                {formState.errors.paymentDue &&
                  formState.errors.paymentDue.join(", ")}
              </div>
            )}
            {formState.errors.paymentTerms && (
              <div className="mt-2 rounded p-2 bg-red-200 border border-red-400 w-full">
                {formState.errors.paymentTerms &&
                  formState.errors.paymentTerms.join(", ")}
              </div>
            )}
            <div className="flex flex-wrap justify-between">
              <div className="mt-[25px] w-[47%]">
                <label
                  htmlFor="invoiceDate"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Issue Date
                </label>
                <input
                  id="invoiceDate"
                  name="invoiceDate"
                  type="date"
                  defaultValue={invoice.paymentDue.toISOString().split("T")[0]}
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy dark:text-muted-slate"
                />
              </div>
              <div className="mt-[25px] w-[47%]">
                <label
                  htmlFor="paymentTerms"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Payment Terms
                </label>
                <select
                  id="paymentTerms"
                  name="paymentTerms"
                  defaultValue={invoice.paymentTerms.toString()}
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy dark:text-muted-slate"
                >
                  <option value="1">Net 30</option>
                  <option value="2">Net 60</option>
                  <option value="3">Net 90</option>
                </select>
              </div>
              <div className="mt-[25px] w-full">
                {formState.errors.description && (
                  <div className="mt-2 rounded p-2 bg-red-200 border border-red-400">
                    {formState.errors.description &&
                      formState.errors.description.join(", ")}
                  </div>
                )}
                <label
                  htmlFor="description"
                  className="mt-2 block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Project Description
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  defaultValue={invoice.description}
                  placeholder="Graphic Design"
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-dark-indigo  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-midnight-navy"
                />
              </div>
            </div>
          </div>

          {/* Invoice Items */}
          <InvoiceItemList
            items={invoiceItmes}
            onRemoveItem={handleDeleteItem}
          />

          {formState.errors.items && (
            <div className="mt-2 rounded p-2 bg-red-200 border border-red-400">
              {formState.errors.items && formState.errors.items.join(", ")}
            </div>
          )}
          <div className="h-[48px] w-full mt-[15px]">
            <div
              className="h-full w-full flex justify-center items-center bg-pale-periwinkle hover:bg-muted-slate hover:text-off-white rounded-[24px] text-[15px] font-medium text-cool-blue dark:bg-deep-charcoal dark:hover:bg-pale-navy dark:text-pale-periwinkle transition duration-300 ease-in-out cursor-pointer"
              onClick={handleOpen}
            >
              + Add New Item
            </div>
          </div>
          <div className="h-[10px text-coral-red mt-[34px]">
            {Object.keys(formState.errors).length > 0 &&
              !formState.errors.hasOwnProperty("_form") &&
              "- All fields must be added"}
          </div>
          <div className="h-[10px text-coral-red mt-[34px]">
            {formState.errors._form && `${formState.errors._form.join(", ")}`}
          </div>
          <div className="h-[91px] mt-[41px] bg-white dark:bg-midnight-navy flex items-center justify-around md:justify-between md:px-[30px]">
            <Link href={`/invoices/${invoice.id}`}>
              <button className="border h-[48px] w-[84px] rounded-[24px] bg-muted-white text-[15px] font-bold text-cool-blue leading-[15px] tracking-[-.25px]">
                Cancel
              </button>
            </Link>{" "}
            <div className="w-[70%] md:w-[45%] flex justify-around">
              <button
                className="h-[48px] w-[117px] md:w-[133px] rounded-[24px] bg-pale-navy text-[15px] font-bold text-muted-slate dark:text-pale-periwinkle leading-[15px] tracking-[-.25px]"
                type="submit"
                onClick={() => setInvoiceStatus("draft")}
                disabled={pending}
              >
                {pending ? "Saving..." : "Save as Draft"}
              </button>
              <button
                className="h-[48px] w-[117px] md:w-[133px] rounded-[24px] bg-lavender-purple text-[15px] font-bold text-white dark:text-pale-periwinkle leading-[15px] tracking-[-.25px]"
                type="submit"
                onClick={() => setInvoiceStatus("pending")}
                disabled={pending}
              >
                {pending ? "Saving..." : "Save & Send"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditInvoice;
