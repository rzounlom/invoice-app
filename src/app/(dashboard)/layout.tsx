import { FC } from "react";
import NavbarMobile from "@/components/ui/nav/NavbarMobile";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full relative">
      <NavbarMobile />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
