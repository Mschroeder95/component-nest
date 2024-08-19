import { cookies } from "next/headers";
import { COLOR_MODE_COOKIE } from "../../../constants";
import { ColorModeOptions } from "../../../shared-interfaces";

export function getColorMode(defaultMode: ColorModeOptions): ColorModeOptions {
  let colorModeCookie = cookies().get(COLOR_MODE_COOKIE)?.value;
  let colorMode = colorModeCookie == undefined ? defaultMode : colorModeCookie;
  return colorMode as ColorModeOptions;
}
