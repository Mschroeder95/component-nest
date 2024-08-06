"use client";

import { twMerge } from "tailwind-merge";
import { ClassName, HasChildNodes } from "../../shared-interfaces";
import { useRouter } from "next/navigation";
import { ThreeBarsIcon } from "../icons/icons";
import { Button } from "../buttons/Button";
import { useState } from "react";
import Modal from "../modals/Modal";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={twMerge(
        `sticky top-0 h-20 w-screen border-y border-light-5/50 bg-light-1 p-2 dark:border-dark-4/50 dark:bg-dark-1`,
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
        <Button
          className="flex md:hidden lg:hidden"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          <ThreeBarsIcon></ThreeBarsIcon>
        </Button>
        <Modal
          center={false}
          className={`${isMobileMenuOpen ? "block" : "hidden"} right-2 top-2 md:hidden lg:hidden`}
          onDismiss={() => setIsMobileMenuOpen(false)}
        >
          <div className="space-between flex flex-col items-start space-y-4">
            {children}
          </div>
        </Modal>
      </div>
    </nav>
  );
}
