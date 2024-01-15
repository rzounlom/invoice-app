// useToggleTheme.js
import { useTheme } from "next-themes";

const useToggleTheme = () => {
  const { setTheme, resolvedTheme } = useTheme();

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

  return { toggleTheme, resolvedTheme };
};

export default useToggleTheme;
