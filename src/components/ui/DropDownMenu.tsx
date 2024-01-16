"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";

import { DropdownItem } from "@/types";
import Image from "next/image";
import { dropdownItems } from "@/lib/data/dropdownItems";
import { setFilterStatus } from "@/lib/features/invoice/invoicSlice";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownMenu() {
  const [active, setActive] = useState(false);

  const dispatch = useAppDispatch();
  const { filterStatus } = useAppSelector((state) => state.invoice);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div onClick={() => setActive(!active)}>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-[#7C5DFA]">
          {active ? (
            <ChevronUpIcon
              className="-mr-1 h-5 w-5 text-[#7C5DFA]"
              aria-hidden="true"
            />
          ) : (
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-[#7C5DFA]"
              aria-hidden="true"
            />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-36 md:w-[192px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {dropdownItems.map((item: DropdownItem) => (
              <div
                key={item.id}
                onClick={() => dispatch(setFilterStatus(item.name))}
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        "flex items-center",
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <div
                        className={`h-[16px] w-[16px] flex justify-center items-center border-2 border-[#7C5DFA] ${
                          filterStatus === item.name
                            ? "bg-[#7C5DFA]"
                            : "bg-[#DFE3FA]"
                        } rounded`}
                      >
                        {filterStatus === item.name && (
                          <Image
                            src="/img/icon/icon-check.svg"
                            alt="check icon"
                            width={10}
                            height={9}
                          />
                        )}
                      </div>
                      <p className="ml-[8px]">{item.label}</p>
                    </a>
                  )}
                </Menu.Item>
              </div>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
