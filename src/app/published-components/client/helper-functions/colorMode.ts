import { COLOR_MODE_COOKIE } from "../../constants";
import { ColorModeOptions } from "../../shared-interfaces";
import { getClientSideCookie, setClientSideCookie } from "../cookies/cookies";

export function toggleColorMode() {
  if (typeof window !== "undefined") {
    getColorModeCookie("light") == "light"
      ? setClientSideCookie(COLOR_MODE_COOKIE, "dark")
      : setClientSideCookie(COLOR_MODE_COOKIE, "light");
    let htmlTag = window.document.getElementsByTagName("html")[0];
    htmlTag.className = getColorModeCookie("light");
  }
}

function getColorModeCookie(defaultMode: ColorModeOptions): ColorModeOptions {
  let colorModeCookie = getClientSideCookie(COLOR_MODE_COOKIE);
  if (colorModeCookie === undefined) {
    setClientSideCookie(COLOR_MODE_COOKIE, defaultMode);
  }
  return getClientSideCookie(COLOR_MODE_COOKIE) as ColorModeOptions;
}
