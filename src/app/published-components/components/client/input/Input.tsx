"use client";
import { ClassName, FormInput } from "../../../shared-interfaces";
import InputWrapper from "./InputWrapper";
import { inputBackgroundCss } from "./functions";

interface InputProps extends ClassName, FormInput {
  name: string;
  id: string;
  label?: string;
  placeholder?: string;
  required: boolean;
  error?: string;
  hint?: string;
  type: string;
  onChange?: CallableFunction;
}

export default function Input({
  name,
  id,
  label,
  className,
  placeholder,
  required,
  error,
  hint,
  type,
  onChange,
}: InputProps) {
  return (
    <InputWrapper
      id={id}
      label={label}
      className={className}
      error={error}
      hint={hint}
    >
      <input
        type={type}
        id={id}
        name={name}
        className={inputBackgroundCss(error)}
        placeholder={placeholder}
        required={required}
        onChange={(event) => {
          (document.getElementById(id) as HTMLInputElement).value =
            event.target.value;
          onChange?.();
        }}
      />
    </InputWrapper>
  );
}
