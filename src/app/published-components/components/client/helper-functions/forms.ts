export function getFormFields(formId: string): NodeListOf<HTMLInputElement> {
  return document.querySelectorAll(
    `[id^='${formId}'] input`,
  ) as NodeListOf<HTMLInputElement>;
}
