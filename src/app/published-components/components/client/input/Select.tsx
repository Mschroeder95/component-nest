"use client";
import { ClassName, FormInput } from "../../../shared-interfaces";
import InputWrapper from "./InputWrapper";
import { inputBackgroundCss } from "./functions";

interface TextAreaInputProps extends ClassName, FormInput {
  name: string;
  id: string;
  label?: string;
  required: boolean;
  error?: string;
  hint?: string;
  options: Option[];
  onChange?: CallableFunction;
}

interface Option {
  displayName: string;
  value: string;
}

export default function Select({
  name,
  id,
  label,
  className,
  required,
  error,
  hint,
  options,
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
      <select
        className={inputBackgroundCss(error)}
        onChange={(event) => {
          (document.getElementById(id) as HTMLInputElement).value =
            event.target.value;
          onChange?.();
        }}
      >
        {options.map((option) => {
          return <option value={option.value}>{option.displayName}</option>;
        })}
      </select>
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
