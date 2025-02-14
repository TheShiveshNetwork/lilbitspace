import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Provider } from "@/components/ui/provider";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lilbitspace",
  description: "Lilbitspace - Effortless Image Editing Online | Add Text Behind Images Instantly",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
