import "./globals.scss";

import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Invoice App",
  description:
    "A full-stack Invoice App built with NextJs, Prisma, Tailwind and MongoDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" bg-#F8F8FB dark:bg-[#141625]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
