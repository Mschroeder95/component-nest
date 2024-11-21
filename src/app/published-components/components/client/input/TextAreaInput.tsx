"use client";
import { ClassName, FormInput } from "../../../shared-interfaces";
import InputWrapper from "./InputWrapper";
import { inputBackgroundCss } from "./functions";

interface TextAreaInputProps extends ClassName, FormInput {
  name: string;
  id: string;
  label?: string;
  placeholder?: string;
  required: boolean;
  error?: string;
  hint?: string;
  onChange?: CallableFunction;
}

export default function TextAreaInput({
  name,
  id,
  label,
  className,
  placeholder,
  required,
  error,
  hint,
  onChange,
}: TextAreaInputProps) {
  return (
    <InputWrapper
      id={id}
      label={label}
      className={className}
      error={error}
      hint={hint}
    >
      <textarea
        className={inputBackgroundCss(error)}
        placeholder={placeholder}
        required={required}
        onChange={(event) => {
          (document.getElementById(id) as HTMLInputElement).value =
            event.target.value;
          onChange?.();
        }}
      ></textarea>
      <input
        hidden={true}
        type="text"
        name={name}
        id={id}
        required={required}
      />
    </InputWrapper>
  );
}
