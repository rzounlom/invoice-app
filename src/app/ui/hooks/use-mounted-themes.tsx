import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

// Custom hook to handle the theme and mounted state
const useMountedTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Set the mounted state to true once the component is mounted
    setMounted(true);
  }, []);

  return { mounted, theme, setTheme };
};

export default useMountedTheme;
