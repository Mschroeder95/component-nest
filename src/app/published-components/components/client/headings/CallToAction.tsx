import { twMerge } from "tailwind-merge";
import { ClassName, HasChildNodes } from "../../../shared-interfaces";
import H1 from "./H1";
import Paragraph from "../paragraphs/Paragraph";

interface CallToActionProps extends ClassName, HasChildNodes {
  title: string;
  subtitle: string;
}
export default function CallToAction({
  title,
  subtitle,
  children,
  className,
}: CallToActionProps) {
  return (
    <div
      className={twMerge(
        "mx-auto flex select-none flex-col items-center py-4 text-center",
        className,
      )}
    >
      <H1>{title}</H1>
      <Paragraph>{subtitle}</Paragraph>
      {children}
    </div>
  );
}
