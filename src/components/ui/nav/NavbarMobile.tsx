"use client";

import { FC, useEffect, useState } from "react";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import useToggleTheme from "@/lib/hooks/useToggleTheme";

const NavbarMobile: FC = () => {
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
    <nav className="w-full h-[72px] md:h-[80px] bg-[#373B53] dark:bg-[#1E2139] flex justify-between items-center xl:hidden">
      <div className="h-[72px] w-[72px]">
        <Image
          src={"/img/logo.svg"}
          alt="invoice app logo"
          height={72}
          width={72}
          priority
        />
      </div>
      <div className="w-[160px] h-[100%] flex">
        <div className="w-[50%] h-[100%] flex justify-center items-center border-r-[1px] border-[#494E6E]">
          <Image
            className="hover:cursor-pointer"
            src={themeIconSrc}
            height={20}
            width={20}
            alt={themeIconAlt}
            onClick={toggleTheme}
          />
        </div>
        <div className="w-[50%] h-[100%] flex justify-center items-center">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
