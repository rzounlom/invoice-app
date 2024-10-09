"use client";

import { FC, ReactNode } from "react";

import clsx from "clsx";
import useMountedTheme from "../hooks/use-mounted-themes";

interface InvoiceMainProps {
  children?: ReactNode;
}

const InvoiceMain: FC<InvoiceMainProps> = ({ children }) => {
  const { mounted, theme } = useMountedTheme();

  if (!mounted) return <div className="w-full h-full bg-off-white"></div>;

  return (
    <div
      className={clsx(
        "w-full h-[100vh] overflow-auto  p-[24px] md:p-[48px] flex flex-col items-center",
        {
          "bg-dark-indigo": theme === "dark",
          "bg-off-white": theme === "light",
        }
      )}
    >
      {children}
    </div>
  );
};

export default InvoiceMain;
