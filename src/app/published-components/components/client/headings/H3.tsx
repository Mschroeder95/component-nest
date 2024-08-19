"use client";

import { twMerge } from "tailwind-merge";
import { HeadingProps } from "./HeadingProps";

export default function H3({ children, className }: HeadingProps) {
  return (
    <h3
      className={twMerge(
        "text-3xl font-bold text-light-font-color-1 dark:text-dark-font-color-1",
        className,
      )}
    >
      {children}
    </h3>
  );
}