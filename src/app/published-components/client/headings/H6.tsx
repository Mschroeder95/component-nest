"use client";

import { twMerge } from "tailwind-merge";
import { HeadingProps } from "./HeadingProps";

export default function H6({ children, className }: HeadingProps) {
  return (
    <h3
      className={twMerge(
        "text-lg font-bold text-light-6 dark:text-dark-6",
        className,
      )}
    >
      {children}
    </h3>
  );
}
