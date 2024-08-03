"use client";

import { twMerge } from "tailwind-merge";
import {
  ClassName,
  HasChildren,
  IsMobileOverride,
} from "../../shared-interfaces";
import { useRouter } from "next/navigation";
import useMobileCheck from "../../hooks/useMobileCheck";

interface TopNavbarProps extends ClassName, IsMobileOverride, HasChildren {
  logoPath?: string;
  alt?: string;
}

export default function TopNavbar({
  className,
  logoPath,
  alt,
  children,
  isMobileOverride,
}: TopNavbarProps) {
  const router = useRouter();
  const { isMobile } = useMobileCheck(isMobileOverride);

  return (
    <nav className={twMerge(`flex h-20 w-screen bg-light-1 p-2`, className)}>
      <div className="mx-auto flex h-full w-full max-w-[90rem] flex-row items-center justify-between">
        <img
          className="h-14 cursor-pointer"
          src={logoPath}
          alt={alt}
          onClick={() => router.push("/")}
        />
        {!isMobile && (
          <div className="flex h-fit w-fit flex-row items-center gap-4">
            {children}
          </div>
        )}
      </div>
    </nav>
  );
}
