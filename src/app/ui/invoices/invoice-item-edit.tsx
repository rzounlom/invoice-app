import { FC } from "react";
import { FaTrash } from "react-icons/fa6";
import { Item } from "@prisma/client";

interface InvoiceItemEditProps {
  item: Item;
}

const InvoiceItemEdit: FC<InvoiceItemEditProps> = ({ item }) => {
  return (
    <div className="mt-[24px] md:mt-[5px] w-full md:flex md:items-center md:justify-between">
      <div className="md:w-[40%] md:mt-[25px]">
        <label
          htmlFor="name"
          className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
        >
          Item Name
        </label>
        <input
          readOnly
          id="name"
          name="name"
          type="text"
          value={item.name}
          placeholder="Banner Design"
          className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            readOnly
            id="quantity"
            name="quantity"
            type="text"
            value={item.quantity}
            placeholder="1"
            className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mt-[25px] w-[31%]">
          <label
            htmlFor="price"
            className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
          >
            Price
          </label>
          <input
            readOnly
            id="price"
            name="price"
            type="text"
            value={item.price}
            placeholder="156.00"
            className="mt-[9px] block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mt-[25px] w-[31%] border">
          <label
            htmlFor="total"
            className="block text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate"
          >
            Total
          </label>
          <input
            readOnly
            id="total"
            name="total"
            type="text"
            value={item.total}
            placeholder="0"
            className="mt-[9px] bg-transparent block w-full h-[48px] rounded-md border-0 px-[20px] py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:ring-inset sm:text-sm sm:leading-6"
          />
        </div>
        <div className="border mt-[25px] w-[15%] flex justify-center items-center text-[13px] font-medium leading-[15px] tracking-[-.1px] text-cool-blue dark:text-muted-slate">
          <FaTrash className="hover:cursor-pointer hover:text-coral-red mt-[21px] transition-colors duration-250 ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default InvoiceItemEdit;
