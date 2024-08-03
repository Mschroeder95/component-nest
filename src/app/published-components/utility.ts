import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Href, OnClick } from "./shared-interfaces";

export function buildOnClick(
  onClickOrHref: OnClick | Href,
  router: AppRouterInstance,
): CallableFunction {
  let onClick: CallableFunction = () => {};
  if (onClickOrHref.onClick === undefined) {
    onClick = () => {
      router.push(onClickOrHref.href as string);
    };
  } else {
    onClick = onClickOrHref.onClick;
  }
  return onClick;
}
