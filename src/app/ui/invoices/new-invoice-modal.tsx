"use client";

import { ChangeEvent, FC, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { FaPlus } from "react-icons/fa";
import { Item } from "@prisma/client";

interface NewInvoiceModalProps {
  open: boolean;
  onClose: () => void;
  addNewItem: (item: Omit<Item, "invoiceId" | "id">) => void;
}

const NewInvoiceModal: FC<NewInvoiceModalProps> = ({
  open,
  onClose,
  addNewItem,
}) => {
  const [item, setItem] = useState({
    name: "",
    quantity: 1,
    price: 0,
    total: 0,
  });

  const [error, setError] = useState(false);

  const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update quantity and price as numbers; name remains a string.
    const newItem = {
      ...item,
      [name]: value,
    };

    // Calculate total based on updated quantity and price
    newItem.total = Number((newItem.quantity * newItem.price).toFixed(2));

    setItem(newItem);
  };
  const handleClose = () => {
    setError(false);
    setItem({
      name: "",
      quantity: 1,
      price: 0,
      total: 0,
    });
    onClose();
  };

  const handleAddItem = () => {
    setError(false);
    if (item.name === "" || item.quantity === 0 || item.price === 0) {
      setError(true);
      return;
    }

    addNewItem(item);
    setItem({
      name: "",
      quantity: 0,
      price: 0,
      total: 0,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="h-[10px] text-coral-red">
              {error && "Please fill out all fields"}
            </div>
            <form className="mt-[24px] md:mt-[5px] w-full md:flex md:items-center md:justify-between">
              <div className="md:w-[40%] md:mt-[25px]">
                <label
                  htmlFor="name"
                  className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                >
                  Item Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={item.name}
                  placeholder="Banner Design"
                  className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  onChange={handleItemChange}
                />
              </div>
              <div className="md:w-[58%] flex flex-wrap justify-between">
                <div className="mt-[25px] w-[15%]">
                  <label
                    htmlFor="quantity"
                    className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                  >
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    value={item.quantity}
                    placeholder="1"
                    className="mt-[9px] block w-full h-[48px] rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                    onChange={handleItemChange}
                  />
                </div>
                <div className="mt-[25px] w-[31%] ml-[10px]">
                  <label
                    htmlFor="price"
                    className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
                  >
                    Price
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    value={item.price}
                    placeholder={"156.00"}
                    className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                    onChange={handleItemChange}
                  />
                </div>
                <div className="mt-[25px] w-[31%] ml-[5px]">
                  <label
                    htmlFor="total"
                    className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate ml-[20px]"
                  >
                    Total
                  </label>
                  <input
                    readOnly
                    id="total"
                    name="total"
                    type="number"
                    value={item.total}
                    placeholder="0"
                    className="mt-[9px] bg-transparent dark:text-muted-slate block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-[25px] w-[15%] flex justify-center items-center text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate">
                  <FaPlus
                    className="hover:cursor-pointer hover:text-emerald-green mt-[21px] transition-colors duration-250 ease-in-out"
                    onClick={handleAddItem}
                  />
                </div>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default NewInvoiceModal;
