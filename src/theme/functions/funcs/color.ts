import { TColor, TColorBase, TThemeBase } from "../../types";

export function color(theme: TThemeBase) {
  return (color: TColor): string => {
    if (color in theme.palette) {
      return theme.palette[color as TColorBase].main;
    }

    return color;
  };
}
