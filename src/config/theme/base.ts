import {
  TDefaultTheme,
  BaseColorTheme,
  ShapeTheme,
  SpacingTheme,
  TypographyTheme,
} from "../theme";

const DefaultTheme: TDefaultTheme = {
  ...TypographyTheme,
  ...SpacingTheme,
  ...BaseColorTheme,
  ...ShapeTheme,
};

export default DefaultTheme;
