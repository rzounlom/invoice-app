"use client";

import { FC } from "react";
import clsx from "clsx";
import useMountedTheme from "../ui/hooks/use-mounted-themes";

const Home: FC = () => {
  const { mounted, theme, setTheme } = useMountedTheme();

  if (!mounted) {
    // Don't render anything until the component has mounted
    return null;
  }

  console.log({ theme });
  return (
    <div
      className={clsx("h-screen w-screen", {
        "bg-dark-indigo": theme === "dark",
        "bg-off-white": theme === "light",
      })}
    >
      Theme: {theme} <br />
      <button onClick={() => setTheme("light")}>light</button> <br />
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default Home;
