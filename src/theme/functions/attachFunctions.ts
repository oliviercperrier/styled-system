import { TTheme, TThemeBase } from "../../theme/types/Theme";
import { fns } from "./funcs";

export function attachFunctions(themeBase: TThemeBase): TTheme {
  return {
    ...themeBase,
    fn: {
      size: fns.size,
      darken: fns.darken,
      lighten: fns.lighten,
      radius: fns.radius(themeBase),
      color: fns.color(themeBase),
    },
  };
}
