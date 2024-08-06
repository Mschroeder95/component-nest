import { twMerge } from "tailwind-merge";
import { ClassName, HasChildNodes } from "../../shared-interfaces";

export interface ItalicParagraphProps extends ClassName, HasChildNodes {}

export default function UnderlineParagraph({
  className,
  children,
}: ItalicParagraphProps) {
  return (
    <em
      className={twMerge(
        "font-italic mb-3 text-light-font-color-2 dark:text-dark-font-color-2",
        className,
      )}
    >
      {children}
    </em>
  );
}
