import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function buildOnClick(
  router: AppRouterInstance,
  onClick?: CallableFunction,
  href?: string,
): CallableFunction {
  let returnFunction: CallableFunction = () => {};

  if (onClick === undefined && href !== undefined) {
    returnFunction = () => {
      router.push(href as string);
    };
  } else if (onClick !== undefined) {
    returnFunction = onClick;
  }

  return returnFunction;
}
