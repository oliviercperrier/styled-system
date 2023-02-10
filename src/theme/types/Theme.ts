import { TColor, TColorPaletteTheme } from "./Colors";
import { TComponentsTheme } from "./Components";
import { TNumberSize, TSize, TSizes } from "./Sizes";
import { TTypographyTheme } from "./Typography";

export interface TThemeFunctions {
  size(props: { size: string | number; sizes: Record<string, any> }): any;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
  radius(size?: TNumberSize): number;
  color(color: TColor): string;
}

export type TTheme = {
  loader: any;

  dateFormatISO: string;
  dateFormat: string;
  dateLocale: string;

  fontSizes: TSizes;
  defaultRadius: TSize;
  radius: TSizes;
  spacing: TSizes;
  breakpoints: TSizes;

  typography: TTypographyTheme;

  palette: TColorPaletteTheme;

  components: TComponentsTheme;

  fn: TThemeFunctions;
};

export type TThemeBase = Omit<TTheme, "fn">;
