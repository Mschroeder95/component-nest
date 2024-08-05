"use client";
import { twMerge } from "tailwind-merge";
import { ClassName, HasChildText, Selectable } from "../../shared-interfaces";
import { usePathname, useRouter } from "next/navigation";
import { buildOnClick } from "../../utility";

export interface TextLinkOnClickProps
  extends ClassName,
    Selectable,
    HasChildText {
  onClick?: CallableFunction;
  href?: never;
}

export interface TextLinkHrefProps extends ClassName, Selectable, HasChildText {
  onClick?: never;
  href?: string;
}

export default function TextLink({
  selected,
  className,
  href,
  onClick,
  children,
}: TextLinkOnClickProps | TextLinkHrefProps) {
  const router = useRouter();
  const pathname = usePathname();

  selected = selected === undefined ? pathname === href : selected;
  const selectedCss = selected
    ? "text-light-4 dark:text-dark-4"
    : "text-light-6 dark:text-dark-6";

  return (
    <div
      className={twMerge(`group/link cusor-pointer h-fit w-fit`, className)}
      onClick={() => buildOnClick(router, onClick, href)()}
    >
      <p
        className={`cursor-pointer select-none transition-all ease-in-out group-hover/link:text-light-4 dark:group-hover/link:text-dark-4 ${selectedCss}`}
      >
        {children}
      </p>
    </div>
  );
}
