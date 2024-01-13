"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { store } from "@/state/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ClerkProvider>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </ClerkProvider>
    </Provider>
  );
}
