"use client";

import { twMerge } from "tailwind-merge";
import { HeadingProps } from "./HeadingProps";

export default function H6({ children, className }: HeadingProps) {
  return (
    <h3
      className={twMerge(
        "text-lg font-bold text-light-font-color-1 dark:text-dark-font-color-1",
        className,
      )}
    >
      {children}
    </h3>
  );
}
