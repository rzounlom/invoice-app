"use client";

import { FC } from "react";
import Image from "next/image";
import clsx from "clsx";
import useMountedTheme from "../hooks/use-mounted-themes";

const SideNav: FC = () => {
  const { mounted, theme, setTheme } = useMountedTheme();

  if (!mounted)
    return (
      <div className="h-[103px] w-full xl:w-[103px] xl:h-screen bg-pale-navy"></div>
    );

  return (
    <div
      className={clsx(
        "h-[80px] w-full flex justify-between items-center xl:w-[103px] xl:h-full xl:flex-col",
        {
          "dark:bg-midnight-navy": theme === "dark",
          "bg-pale-navy": theme === "light",
        }
      )}
    >
      <div className="h-[80px] w-[80px] xl:h-[103px] xl:w-[103px] relative flex justify-center items-center">
        <Image
          className="xl:hidden"
          src="/logo-outer.svg"
          alt="logo"
          height={80}
          width={80}
        />
        <Image
          className="xl:hidden absolute z-10"
          src="/logo-inner.svg"
          alt="logo"
          height={25}
          width={25}
        />
        <Image
          className="hidden xl:block"
          src="/logo-outer.svg"
          alt="logo"
          height={103}
          width={103}
        />
        <Image
          className="hidden xl:block absolute z-10"
          src="/logo-inner.svg"
          alt="logo"
          height={38}
          width={40}
        />
      </div>
      <div className="h-full w-[192px] flex xl:flex-col xl:h-[192px] xl:w-full">
        <div className="h-full w-[50%] flex justify-center items-center border-r-[.5px] border-muted-navy xl:w-full xl:h-[50%] xl:border-b-[.5px]">
          <Image
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            src={theme === "dark" ? "/icon-sun.svg" : "/icon-moon.svg"}
            alt="theme icon"
            height={20}
            width={20}
          />
        </div>
        <div className="h-full w-[50%] flex justify-center items-center xl:w-full xl:h-[50%]">
          <Image
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            src="/image-avatar.jpg"
            alt="theme icon"
            height={32}
            width={32}
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
