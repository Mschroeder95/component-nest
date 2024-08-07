import { twMerge } from "tailwind-merge";
import { ClassName, HasChildNodes } from "../../shared-interfaces";

export interface ParagraphProps extends ClassName, HasChildNodes {}

export default function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p
      className={twMerge(
        "mb-3 text-light-font-color-2 dark:text-dark-font-color-2",
        className,
      )}
    >
      {children}
    </p>
  );
}
