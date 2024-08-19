import { twMerge } from "tailwind-merge";
import { ClassName, HasChildNodes } from "../../../shared-interfaces";

interface FirstLetterParagraphProps extends ClassName, HasChildNodes {}
export default function FirstLetterParagraph({
  className,
  children,
}: FirstLetterParagraphProps) {
  return (
    <p
      className={twMerge(
        "mb-3 text-lg text-gray-500 text-light-font-color-2 first-letter:float-start first-letter:me-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest dark:text-dark-font-color-2",
        className,
      )}
    >
      {children}
    </p>
  );
}
