"use client";

import { twMerge } from "tailwind-merge";
import { HeadingProps } from "./HeadingProps";

export default function H1({ children, className }: HeadingProps) {
  return (
    <h1
      className={twMerge(
        "mb-4 text-4xl font-extrabold leading-none tracking-tight text-light-6 md:text-5xl lg:text-6xl dark:text-dark-6",
        className,
      )}
    >
      {children}
    </h1>
  );
}
