import { VariantInput, VariantOutput } from "../functions/funcs/variant";
import { TColor, TColorPaletteTheme } from "./Colors";
import { TComponentsTheme } from "./Components";
import { TNumberSize, TSize, TSizes } from "./Sizes";
import { TTypographyTheme } from "./Typography";

export type ColorScheme = "light" | "dark";

export interface TThemeFunctions {
  size(props: { size: string | number; sizes: Record<string, any> }): any;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
  radius(size?: TNumberSize): number;
  color(
    color: string,
    shade?: number,
    primaryFallback?: boolean,
    useSplittedShade?: boolean
  ): string;
  alpha(color: string, alpha: number): string;
  variant(payload: VariantInput): VariantOutput;
  isColor(scheme: "dark" | "light", color: TColor): boolean;
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

  white: string;
  black: string;
  colorScheme: ColorScheme;
  palette: TColorPaletteTheme;

  components: TComponentsTheme;

  fn: TThemeFunctions;
};

export type TThemeBase = Omit<TTheme, "fn">;
