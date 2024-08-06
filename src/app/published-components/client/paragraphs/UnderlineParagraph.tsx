import { twMerge } from "tailwind-merge";
import { ClassName, HasChildNodes } from "../../shared-interfaces";

export interface UnderlineParagraphProps extends ClassName, HasChildNodes {}

export default function UnderlineParagraph({
  className,
  children,
}: UnderlineParagraphProps) {
  return (
    <u
      className={twMerge(
        "mb-3 text-light-font-color-2 underline dark:text-dark-font-color-2",
        className,
      )}
    >
      {children}
    </u>
  );
}
