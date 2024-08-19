import { twMerge } from "tailwind-merge";
import { ClassName, HasChildNodes } from "../../../shared-interfaces";

interface LeadingParagraphProps extends ClassName, HasChildNodes {}
export default function LeadingParagraph({
  className,
  children,
}: LeadingParagraphProps) {
  return (
    <p
      className={twMerge(
        "mb-3 text-lg text-light-font-color-2 dark:text-dark-font-color-2",
        className,
      )}
    >
      {children}
    </p>
  );
}
