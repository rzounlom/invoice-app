"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import useMountedTheme from "../hooks/use-mounted-themes";

const SideNav: FC = () => {
  const { mounted, theme, setTheme } = useMountedTheme();

  if (!mounted)
    return (
      <div className="h-[103px] w-full xl:w-[103px] xl:h-screen bg-pale-navy"></div>
    );

  return (
    <div className="h-[80px] w-full flex justify-between items-center xl:w-[103px] xl:h-full xl:flex-col bg-pale-navy dark:dark:bg-midnight-navy">
      <Link
        href="/invoices"
        className="h-[80px] w-[80px] xl:h-[103px] xl:w-[103px] relative flex justify-center items-center"
      >
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
      </Link>
      <div className="h-full w-[192px] flex xl:flex-col xl:h-[192px] xl:w-full">
        <div className="h-full w-[50%] flex justify-center items-center border-r-[.5px] xl:border-r-[0px] border-muted-navy xl:w-full xl:h-[50%] xl:border-b-[.5px]">
          <Image
            className="hover:cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            src={theme === "dark" ? "/icon-sun.svg" : "/icon-moon.svg"}
            alt="theme icon"
            height={20}
            width={20}
          />
        </div>
        <div className="h-full w-[50%] flex justify-center items-center xl:w-full xl:h-[50%]">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "40px",
                  height: "40px",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
