import { TTheme, TThemeBase } from "../../theme/types/Theme";
import { fns } from "./funcs";

export function attachFunctions(themeBase: TThemeBase): TTheme {
  return {
    ...themeBase,
    fn: {
      size: fns.size,
      darken: fns.darken,
      lighten: fns.lighten,
      alpha: fns.alpha,
      isColor: fns.isColor,
      radius: fns.radius(themeBase),
      color: fns.color(themeBase),
      variant: fns.variant(themeBase),
    },
  };
}
