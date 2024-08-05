"use client";

import { twMerge } from "tailwind-merge";
import { ClassName, HasChildNodes } from "../../shared-interfaces";
import { useRouter } from "next/navigation";
import useMobileCheck from "../../hooks/useMobileCheck";

interface TopNavbarProps extends ClassName, HasChildNodes {
  logoPathLightMode?: string;
  logoPathDarkMode?: string;
  alt?: string;
}

export default function TopNavbar({
  className,
  logoPathDarkMode,
  logoPathLightMode,
  alt,
  children,
}: TopNavbarProps) {
  const router = useRouter();

  return (
    <nav
      className={twMerge(
        `flex h-20 w-screen bg-light-1 p-2 dark:bg-dark-1`,
        className,
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-[90rem] flex-row items-center justify-between">
        <img
          className="block h-14 cursor-pointer dark:hidden"
          src={logoPathLightMode}
          alt={alt}
          onClick={() => router.push("/")}
        />
        <img
          className="hidden h-14 cursor-pointer dark:block"
          src={logoPathDarkMode}
          alt={alt}
          onClick={() => router.push("/")}
        />
        <div className="hidden h-fit w-fit flex-row items-center gap-4 md:flex lg:flex">
          {children}
        </div>
      </div>
    </nav>
  );
}
