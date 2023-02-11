import Color from "color";
import { TColor, TColorBase, TColorProps, TThemeBase } from "../../types";
import { darken } from "./darken";

export function color(theme: TThemeBase) {
  return (color: TColor): TColorProps => {
    let colorPayload: TColorProps | undefined = undefined;

    if (color in theme.palette) {
      colorPayload = theme.palette[color as TColorBase];
    }

    const mainColor = colorPayload?.main || color;
    const textColor = Color(mainColor).isDark()
      ? theme.palette.common.white
      : theme.palette.text.primary;

    return {
      main: mainColor,
      container: colorPayload?.container || mainColor,
      light: colorPayload?.light || mainColor,
      dark: colorPayload?.dark || darken(mainColor, 0.25),
      onContainer: colorPayload?.onContainer || textColor,
      contrastText: colorPayload?.contrastText || textColor,
    };
  };
}
