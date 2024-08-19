import { twMerge } from "tailwind-merge";
import { ClassName, HasChildNodes } from "../../../shared-interfaces";
import Button from "../buttons/Button";
import { CloseIcon } from "../icons/icons";

export interface ModalProps extends ClassName, HasChildNodes {
  onDismiss: CallableFunction;
  center: boolean;
  display?: "absolute" | "block" | "fixed" | "sticky";
}
export default function Modal({
  className,
  children,
  onDismiss,
  center,
  display,
}: ModalProps) {
  let centerCss = center
    ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
    : "";
  display = display === undefined ? "absolute" : display;

  return (
    <div
      className={twMerge(
        `h-fit min-w-[20rem] rounded-lg border border-light-4/50 bg-light-1 p-3 shadow-lg dark:border-dark-4 dark:bg-dark-3 ${centerCss}`,
        className,
        display,
      )}
    >
      <div className="flex h-full w-full flex-col">
        <Button className="self-end" onClick={onDismiss}>
          <CloseIcon></CloseIcon>
        </Button>
        {children}
      </div>
    </div>
  );
}
