export type TExtendedColorProps = {
  tColor?: TColors;
  tBgColor?: TColors;
};

export type TColorProps = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
  container: string;
  onContainer: string;
};

export type TColors =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "water"
  | "brown"
  | "purple";

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

export type TBaseColors = Record<TColors, TColorProps>;

export type TColorTheme = {
  palette: TBaseColors & {
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

    border: {
      default: string;
    };

    action: {
      hover: (color: string) => string;
      press: (color: string) => string;
    };
  };
};
