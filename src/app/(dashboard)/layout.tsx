import { FC } from "react";
import NavbarDesktop from "@/components/ui/nav/NavbarDesktop";
import NavbarMobile from "@/components/ui/nav/NavbarMobile";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full relative">
      <NavbarDesktop />
      <div className="flex justify-center">
        <div className="max-w-[1024px] w-full">
          <NavbarMobile />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
