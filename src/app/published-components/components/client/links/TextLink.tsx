"use client";
import { twMerge } from "tailwind-merge";
import {
  ClassName,
  HasChildText,
  Selectable,
} from "../../../shared-interfaces";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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
    : "text-light-font-color-1 dark:text-dark-font-color-1";

  return (
    <div
      className={twMerge(
        `group/link cusor-pointer h-fit w-fit group-hover/link:text-light-4 dark:group-hover/link:text-dark-4 ${selectedCss}`,
        className,
      )}
      onClick={() => buildOnClick(router, onClick, href)()}
    >
      <p className={`cursor-pointer select-none transition-all ease-in-out`}>
        {children}
      </p>
    </div>
  );
}

function buildOnClick(
  router: AppRouterInstance,
  onClick?: CallableFunction,
  href?: string,
): CallableFunction {
  let returnFunction: CallableFunction = () => {};

  if (onClick === undefined && href !== undefined) {
    returnFunction = () => {
      router.push(href as string);
    };
  } else if (onClick !== undefined) {
    returnFunction = onClick;
  }

  return returnFunction;
}
