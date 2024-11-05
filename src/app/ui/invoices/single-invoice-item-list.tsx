"use client";

import { FC, useEffect, useState } from "react";

import { Item } from "@prisma/client";
import SingleInvoiceItemDesktop from "./single-invoice-item-desktop";
import SingleInvoiceItemMobile from "./single-invoice-item-mobile";

interface SingleInvoiceItemListProps {
  items: Item[];
}

const MOBILE_BREAKPOINT = 768;

const SingleInvoiceItemList: FC<SingleInvoiceItemListProps> = ({ items }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : MOBILE_BREAKPOINT
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set the mounted flag to true after initial render

    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMounted) {
    // Avoid rendering until component is mounted on client
    return null;
  }

  const renderMobile = items.map((item) => (
    <SingleInvoiceItemMobile key={item.id} item={item} />
  ));

  const renderDesktop = items.map((item) => (
    <SingleInvoiceItemDesktop key={item.id} item={item} />
  ));

  return (
    <>
      {windowWidth < MOBILE_BREAKPOINT ? (
        renderMobile
      ) : (
        <>
          <div className="w-full h-[15px] mt-[30px] flex justify-between">
            <p className="text-[13px] text-cool-blue dark:text-pale-periwinkle font-medium leading-[18px] tracking-[-.1px]">
              Item Name
            </p>
            <div className="flex w-1/2 justify-between">
              <p className="w-1/3 text-[13px] text-cool-blue dark:text-pale-periwinkle font-medium leading-[18px] tracking-[-.1px] text-center">
                QTY.
              </p>
              <p className="w-1/3 text-[13px] text-cool-blue dark:text-pale-periwinkle font-medium leading-[18px] tracking-[-.1px] text-right">
                Price
              </p>
              <p className="w-1/3 text-[13px] text-cool-blue dark:text-pale-periwinkle font-medium leading-[18px] tracking-[-.1px] text-right">
                Total
              </p>
            </div>
          </div>
          {renderDesktop}
        </>
      )}
    </>
  );
};

export default SingleInvoiceItemList;
