"use client";

import { twMerge } from "tailwind-merge";
import { HeadingProps } from "./HeadingProps";

export default function H1({ children, className }: HeadingProps) {
  return (
    <h1
      className={twMerge(
        "mb-4 text-4xl font-extrabold leading-none tracking-tight text-light-font-color-1 md:text-5xl lg:text-6xl dark:text-dark-font-color-1",
        className,
      )}
    >
      {children}
    </h1>
  );
}
