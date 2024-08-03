"use client";

import { useRouter } from "next/navigation";
import { ClassName, OnClickOrHref, Selectable } from "../../shared-interfaces";
import { buildOnClick } from "../../utility";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ClassName, Selectable, OnClickOrHref {
  text: string;
  iconSrc?: string;
  iconAlt?: string;
  iconPlacement?: "left" | "right";
}

export function Button({
  text,
  onClickOrHref,
  selected,
  className,
  iconSrc,
  iconAlt,
  iconPlacement,
}: ButtonProps) {
  const router = useRouter();
  return (
    <div
      className={twMerge(
        `flex h-fit w-fit select-none justify-center rounded bg-light-3 px-2 py-1 shadow-md transition-all ease-in-out hover:cursor-pointer hover:bg-light-2 active:opacity-50 ${selected ? "ring-selected ring-2 ring-offset-1" : ""}`,
        className,
      )}
      onClick={() => buildOnClick(onClickOrHref, router)()}
    >
      <div
        className={`flex ${iconPlacement == "right" ? "flex-row-reverse" : "flex-row"} min-h-[1.5rem] items-center gap-2`}
      >
        <img className="h-[1rem]" src={iconSrc} alt={iconAlt} />
        <p>{text}</p>
      </div>
    </div>
  );
}
