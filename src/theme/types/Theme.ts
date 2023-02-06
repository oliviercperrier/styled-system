import { TColorPaletteTheme } from "./Colors";
import { TSizes } from "./Sizes";
import { TTypographyTheme } from "./Typography";

export interface TThemeFunctions {
  size(props: { size: string | number; sizes: Record<string, any> }): any;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
}

export type TTheme = {
  loader: any;

  dateFormat: string;
  dateLocale: string;

  fontSizes: TSizes;
  radius: TSizes;
  spacing: TSizes;
  breakpoints: TSizes;

  typography: TTypographyTheme;

  palette: TColorPaletteTheme;

  fn: TThemeFunctions;
};

export type TThemeBase = Omit<TTheme, "fn">;
