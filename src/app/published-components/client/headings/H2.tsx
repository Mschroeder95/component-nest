"use client";

import { twMerge } from "tailwind-merge";
import { HeadingProps } from "./HeadingProps";

export default function H2({ children, className }: HeadingProps) {
  return (
    <h2
      className={twMerge(
        "text-4xl font-extrabold text-light-6 dark:text-dark-6",
        className,
      )}
    >
      {children}
    </h2>
  );
}
