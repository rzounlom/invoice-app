import { FC } from "react";
import NavbarMobile from "@/components/nav/NavbarMobile";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen relative">
      <NavbarMobile />
      <div className="h-[calc(100vh-60px)]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
