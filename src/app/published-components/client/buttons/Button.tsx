"use client";

import { useRouter } from "next/navigation";
import { ClassName, Selectable } from "../../shared-interfaces";
import { buildOnClick } from "../../utility";
import { twMerge } from "tailwind-merge";
import { IconElement } from "../icons/icons";

export interface ButtonHrefProps extends ClassName, Selectable {
  iconSrc?: string;
  iconAlt?: string;
  iconPlacement?: "left" | "right";
  onClick?: never;
  href?: string;
  children: string | IconElement;
}

export interface ButtonOnClickProps extends ClassName, Selectable {
  iconSrc?: string;
  iconAlt?: string;
  iconPlacement?: "left" | "right";
  onClick?: CallableFunction;
  href?: never;
  children: string | IconElement | undefined;
}

export default function Button({
  children,
  selected,
  className,
  iconSrc,
  iconAlt,
  iconPlacement,
  onClick,
  href,
}: ButtonHrefProps | ButtonOnClickProps) {
  const router = useRouter();

  const buttonPadding = typeof children === "string" ? "px-4 py-2" : "p-2";
  return (
    <div
      className={twMerge(
        `flex h-fit w-fit select-none justify-center rounded bg-light-4 shadow-md transition-all ease-in-out hover:cursor-pointer hover:bg-light-5 active:opacity-50 dark:bg-dark-4 dark:hover:bg-dark-3 ${buttonPadding} ${selected ? "ring-selected ring-2 ring-offset-1" : ""}`,
        className,
      )}
      onClick={() => buildOnClick(router, onClick, href)()}
    >
      <div
        className={`flex ${iconPlacement == "right" ? "flex-row-reverse" : "flex-row"} min-h-[1.5rem] items-center gap-2`}
      >
        {iconSrc && <img className="h-[1rem]" src={iconSrc} alt={iconAlt} />}
        {typeof children === "string" && (
          <p className="text-light-font-color-1 dark:text-dark-font-color-1">
            {children}
          </p>
        )}
        {typeof children !== "string" && iconSrc === undefined && (
          <p className="text-light-font-color-1 dark:text-dark-font-color-1">
            {children}
          </p>
        )}
      </div>
    </div>
  );
}
