import { TDefaultTheme } from "../config/theme/types/base";
import { isFunction } from "./helper";

type ThemeFn = (baseTheme?: TDefaultTheme) => TDefaultTheme;
type ThemeArgument = TDefaultTheme | ThemeFn | undefined;

const mergeTheme = (theme: ThemeArgument, outerTheme?: TDefaultTheme): TDefaultTheme => {
  if (!theme) {
    throw new Error("ConfigProvider: 'theme' props is required\n\n");
  }

  if (isFunction(theme)) {
    const themeFn = theme as ThemeFn;
    const mergedTheme = themeFn(outerTheme);

    if (
      process.env.NODE_ENV !== "production" &&
      (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== "object")
    ) {
      throw new Error("ConfigProvider: return an TDefaultTheme object from your function\n\n");
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== "object") {
    throw new Error("ConfigProvider: Please make your 'theme prop an object.\n\n");
  }

  return outerTheme ? { ...outerTheme, ...theme } : theme;
};

export default mergeTheme;