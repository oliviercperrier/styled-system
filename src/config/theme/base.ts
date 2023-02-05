import { BaseColorTheme } from "./color";
import { ShapeTheme } from "./shape";
import { SpacingTheme } from "./spacing";
import { TDefaultTheme } from "./types";
import { TypographyTheme } from "./typography";

const DefaultTheme: TDefaultTheme = {
  ...TypographyTheme,
  ...SpacingTheme,
  ...BaseColorTheme,
  ...ShapeTheme,
};

export default DefaultTheme;
