"use client";
import { twMerge } from "tailwind-merge";
import { ClassName, OnClickOrHref, Selectable } from "../../shared-interfaces";
import { usePathname, useRouter } from "next/navigation";
import { buildOnClick } from "../../utility";

export interface TextLinkProps extends ClassName, Selectable, OnClickOrHref {
  text: string;
}

export default function TextLink({
  text,
  onClickOrHref,
  selected,
  className,
}: TextLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  selected =
    selected === undefined ? pathname === onClickOrHref.href : selected;

  const selectedCss = selected ? "text-light-3" : "text-light-6";

  return (
    <div
      className={twMerge(`group/link cusor-pointer h-fit w-fit`, className)}
      onClick={() => buildOnClick(onClickOrHref, router)()}
    >
      <p
        className={`cursor-pointer select-none transition-all ease-in-out group-hover/link:text-light-3 ${selectedCss}`}
      >
        {text}
      </p>
    </div>
  );
}
