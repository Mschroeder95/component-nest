"use client";

export interface ButtonProps {
  text: string;
  onClick: CallableFunction;
  selected: boolean;
  buttonClassName?: string;
  textClassName?: string;
}

export function Button({
  text,
  onClick,
  selected,
  buttonClassName,
  textClassName,
}: ButtonProps) {
  return (
    <div
      className={`flex transition-all ease-in-out rounded w-fit h-fit py-1 px-2 select-none justify-center shadow-md hover:cursor-pointer hover:opacity-75 active:opacity-50 ${selected ? "ring-2 ring-selected ring-offset-1" : ""} ${buttonClassName}`}
      onClick={() => onClick()}
    >
      <p className={`${textClassName}`}>{text}</p>
    </div>
  );
}
