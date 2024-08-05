import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { getColorMode } from "./published-components/server/theme/color-mode";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Component Nest",
  description: "A component library for Next.js using Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const colorMode = getColorMode("light");
  return (
    <html lang="en" className={`${colorMode}`}>
      <body className={inter.className}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
