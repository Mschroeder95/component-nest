export function inputBackgroundCss(showError?: string): string {
  return `bg-light-disabled-1 dark:bg-dark-disabled-1  border ${showError ? "border-error" : "border-light-disabled-2 dark:border-dark-2"} text-light-font-color-1 dark:text-dark-font-color-1 text-sm rounded-lg block w-full p-2.5`;
}
