import { FC, useEffect, useState } from "react";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";

export const NavbarMobile: FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const toggleTheme = () => {
    switch (resolvedTheme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        setTheme("system");
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Conditional rendering based on whether the component has mounted
  const themeIconSrc = isMounted
    ? resolvedTheme === "light"
      ? "/img/icon/icon-moon.svg"
      : "/img/icon/icon-sun.svg"
    : ""; // Placeholder or default image

  const themeIconAlt = isMounted
    ? resolvedTheme === "dark"
      ? "sun icon"
      : "moon icon"
    : "placeholder icon";

  return (
    <nav className="w-screen h-[72px] bg-[#373B53] flex justify-between items-center">
      <div className="h-full w-[72px]">
        <Image
          src={"/img/logo.svg"}
          alt="imvoice app logo"
          height={72}
          width={72}
          priority
        />
      </div>
      <div className="w-[30%] h-[100%]">
        <div className="w-[50%] h-[100%]">
          <Image
            // src={`${
            //   resolvedTheme === "light"
            //     ? "/img/icon/icon-moon.svg"
            //     : "/img/icon/icon-sun.svg"
            // }`}
            src={themeIconSrc}
            height={20}
            width={20}
            alt={`${resolvedTheme === "dark" ? "sun icon" : "moon icon"}`}
            onClick={toggleTheme}
          />{" "}
        </div>
        <div>
          {" "}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};
