import "./globals.scss";

import type { Metadata } from "next";
import { league_spartan } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Invoice App",
    default: "Invoice App",
  },
  description: "An invoice app using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${league_spartan.className}`}>{children}</body>
    </html>
  );
}
