export type TColorBase =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "water"
  | "brown"
  | "purple";

export type TColor = TColorBase | (string & {});

export type TColorProps = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
  container: string;
  onContainer: string;
};

export type TColorScheme = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type TColors = Record<TColor, TColorProps>;

export type TThemePalette = Record<TColorBase, TColorProps> & {
  common: {
    black: string;
    white: string;
  };

  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };

  grey: TColorScheme;

  background: {
    default: string;
  };

  surface: {
    disabled: string;
    onDisabled: string;
  };

  border: {
    default: string;
  };

  action: {
    hover: (color: string) => string;
    press: (color: string) => string;
  };
};

export type TColorPaletteTheme = TThemePalette;