import { FC, ReactNode } from "react";

interface InvoiceMainProps {
  children?: ReactNode;
}

const InvoiceMain: FC<InvoiceMainProps> = ({ children }) => {
  return (
    <div className="w-full h-[100vh] overflow-auto p-[24px] md:p-[48px] flex flex-col items-center bg-off-white dark:bg-dark-indigo">
      {children}
    </div>
  );
};

export default InvoiceMain;
