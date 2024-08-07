import { toggleColorMode } from "../helper-functions/colorMode";
import { MoonIcon, SunIcon } from "../icons/icons";
import Button from "./Button";

export default function ColorModeToggle() {
  return (
    <Button
      onClick={() => {
        toggleColorMode();
      }}
    >
      <>
        <MoonIcon className="hidden dark:flex"></MoonIcon>
        <SunIcon className="block dark:hidden"></SunIcon>
      </>
    </Button>
  );
}
