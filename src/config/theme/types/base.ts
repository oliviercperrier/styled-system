import { TColorTheme } from "./color";
import { TSizes, TSpacingTheme } from "./spacing";
import { TTypographyTheme } from "./typography";

export type TDefaultTheme = TTypographyTheme & TColorTheme &
  TSpacingTheme & {
    [key: string]: any;
  };
