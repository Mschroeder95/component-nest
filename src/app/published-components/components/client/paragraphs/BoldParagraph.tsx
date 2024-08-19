import { twMerge } from "tailwind-merge";
import { ClassName, HasChildNodes } from "../../../shared-interfaces";

export interface BoldParagraphProps extends ClassName, HasChildNodes {}

export default function BoldParagraph({
  className,
  children,
}: BoldParagraphProps) {
  return (
    <strong
      className={twMerge(
        "mb-3 font-semibold text-light-font-color-1 dark:text-dark-font-color-1",
        className,
      )}
    >
      {children}
    </strong>
  );
}
