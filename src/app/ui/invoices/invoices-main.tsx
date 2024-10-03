"use client";

import { FC } from "react";
import clsx from "clsx";
import useMountedTheme from "../hooks/use-mounted-themes";

interface InvoiceMainProps {}

const InvoiceMain: FC<InvoiceMainProps> = ({}) => {
  const { mounted, theme } = useMountedTheme();

  if (!mounted) return <div className="w-full h-full bg-off-white"></div>;

  return (
    <div
      className={clsx("w-full h-full", {
        "dark:bg-dark-indigo": theme === "dark",
        "bg-off-white": theme === "light",
      })}
    >
      invoices-main
    </div>
  );
};

export default InvoiceMain;
