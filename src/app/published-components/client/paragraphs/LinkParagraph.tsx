import { twMerge } from "tailwind-merge";
import { ClassName, HasChildNodes } from "../../shared-interfaces";

interface LinkParagraphProps extends ClassName, HasChildNodes {
  href: string;
}
export default function LinkParagraph({
  className,
  children,
  href,
}: LinkParagraphProps) {
  return (
    <a
      href={href}
      className={twMerge(
        "dark:test-dark-hyperlink-color visited:text-dark:dark-hyperlink-visited-color mb-3 font-medium text-light-hyperlink-color underline visited:text-light-hyperlink-visited-color hover:no-underline",
        className,
      )}
    >
      {children}
    </a>
  );
}
