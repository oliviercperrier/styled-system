import { TColor, TColorBase } from "../../theme/types/Colors";
import { TTheme } from "../../theme/types/Theme";

export const getColorValue = (color: TColor, theme: TTheme): string => {
  if (color in theme.palette) {
    return theme.palette[color as TColorBase].main;
  }

  return color;
};
