import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import Nav from "./components/Nav";

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
  const theme = cookies().get("theme")?.value;
  return (
    <html lang="en" className={`${theme}`}>
      <body className={inter.className}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
