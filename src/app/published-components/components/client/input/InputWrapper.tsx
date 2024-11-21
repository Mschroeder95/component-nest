"use client";
import { twMerge } from "tailwind-merge";
import { ClassName, HasChildNodes } from "../../../shared-interfaces";

interface InputWrapperProps extends HasChildNodes, ClassName {
  id: string;
  label?: string;
  error?: string;
  showError?: boolean;
  hint?: string;
}

export default function InputWrapper({
  id,
  children,
  label,
  error,
  hint,
  className,
}: InputWrapperProps) {
  return (
    <div className={twMerge(``, className)}>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-light-font-color-1 dark:text-dark-font-color-1"
        >
          {label}
        </label>
      )}
      {children}
      {error && (
        <>
          <span className="text-sm text-error">{error}</span>
        </>
      )}
      {hint && (
        <>
          {error && <br />}
          <span className="text-sm italic text-light-font-color-1 dark:text-dark-font-color-1">
            {hint}
          </span>
        </>
      )}
    </div>
  );
}
