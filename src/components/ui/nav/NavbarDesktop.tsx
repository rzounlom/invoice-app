"use client";

import { FC, useEffect, useState } from "react";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import useToggleTheme from "@/lib/hooks/useToggleTheme";

interface NavbarDesktopProps {}

const NavbarDesktop: FC<NavbarDesktopProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { toggleTheme, resolvedTheme } = useToggleTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Conditional rendering based on whether the component has mounted
  const themeIconSrc = isMounted
    ? resolvedTheme === "light"
      ? "/img/icon/icon-moon.svg"
      : "/img/icon/icon-sun.svg"
    : "/img/icon/icon-sun.svg"; // Placeholder or default image

  const themeIconAlt = isMounted
    ? resolvedTheme === "dark"
      ? "sun icon"
      : "moon icon"
    : "sun icon";

  return (
    <div className="hidden xl:block absolute h-[100vh] w-[103px] dark:bg-[#1E2139] bg-[#373B53] rounded-br-3xl">
      <div className="h-full flex flex-col justify-between">
        <div className="h-[103px] w-[103px]">
          <Image
            src={"/img/logo.svg"}
            alt="invoice app logo"
            height={103}
            width={103}
            priority
          />
        </div>
        <div className="h-[180px] flex flex-col justify-between">
          <div className="h-[50%] flex justify-center items-center">
            {isMounted && (
              <Image
                className="hover:cursor-pointer"
                src={themeIconSrc}
                height={20}
                width={20}
                alt={themeIconAlt}
                onClick={toggleTheme}
              />
            )}
          </div>
          <div className="h-[50%] flex justify-center items-center border-t-[.1px] border-[#494E6E]">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
