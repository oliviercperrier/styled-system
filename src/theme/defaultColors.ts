import color from "color";
import { TColors, TColorPaletteTheme } from "./types/Colors";

const ref = {
  black: "#000000",
  white: "#FFFFFF",

  borderDefault: "#e6e6e6",

  surfaceDisabled: "#f3f3f3",
  onSurfaceDisabled: "#959595",

  primary: "#730CB6",
  primaryDark: "#3c267d",
  primaryLight: "#a53aeb",
  primaryDarker: "#501c82",

  secondary: "#ff675b",
  secondaryDark: "#e86156",
  secondaryLight: "#f98d82",

  warning: "#EDB72D",
  warningDark: "#c1921b",
  warningLight: "##ffca41",

  error: "#FF3E6C",
  errorDark: "#C81741",
  errorLight: "#ff517a",

  info: "#4A88D0",
  infoDark: "#326cb0",
  infoLight: "#5ca7ff",

  success: "#00C27C",
  successDark: "#00C27C",
  successLight: "#00C27C",

  water: "#0AC7D3",
  waterDark: "#0AC7D3",
  waterLight: "#0AC7D3",

  brown: "#DD804C",
  brownDark: "#DD804C",
  brownLight: "#DD804C",

  purple: "#730CB6",
  purpleDark: "#730CB6",
  purpleLight: "#730CB6",

  textPrimary: "#000000",
  textSecondary: "#808080",
  textDisabled: "#959595",

  backgroundDefault: "#f8f8f8",

  grey50: "#fafafa",
  grey100: "#f5f5f5",
  grey200: "#eeeeee",
  grey300: "#e0e0e0",
  grey400: "#bdbdbd",
  grey500: "#9e9e9e",
  grey600: "#757575",
  grey700: "#949494",
  grey800: "#616161",
  grey900: "#212121",

  opacity: {
    level0: 0.05,
    level1: 0.1,
    level2: 0.15,
    level3: 0.2,
    level4: 0.4,
  },
};

export const BaseColors: TColors = {
  primary: {
    main: ref.primary,
    light: ref.primaryLight,
    dark: ref.primaryDark,
    contrastText: ref.white,
    container: color(ref.primary).alpha(ref.opacity.level2).rgb().toString(),
    onContainer: ref.primary,
  },

  secondary: {
    main: ref.secondary,
    light: ref.secondaryLight,
    dark: ref.secondaryDark,
    contrastText: ref.white,
    container: color(ref.secondary).alpha(ref.opacity.level2).rgb().toString(),
    onContainer: ref.secondary,
  },

  error: {
    main: ref.error,
    light: ref.errorLight,
    dark: ref.errorDark,
    contrastText: ref.white,
    container: color(ref.error).alpha(ref.opacity.level2).rgb().toString(),
    onContainer: ref.error,
  },

  warning: {
    main: ref.warning,
    light: ref.warningLight,
    dark: ref.warningDark,
    contrastText: ref.white,
    container: color(ref.warning).alpha(ref.opacity.level2).rgb().toString(),
    onContainer: ref.warning,
  },

  info: {
    main: ref.info,
    light: ref.infoLight,
    dark: ref.infoDark,
    contrastText: ref.white,
    container: color(ref.info).alpha(ref.opacity.level2).rgb().toString(),
    onContainer: ref.info,
  },

  success: {
    main: ref.success,
    light: ref.successLight,
    dark: ref.successDark,
    contrastText: ref.white,
    container: color(ref.success).alpha(ref.opacity.level2).rgb().toString(),
    onContainer: ref.success,
  },

  water: {
    main: ref.water,
    light: ref.waterLight,
    dark: ref.waterDark,
    contrastText: ref.white,
    container: color(ref.water).alpha(ref.opacity.level2).rgb().toString(),
    onContainer: ref.water,
  },

  purple: {
    main: ref.purple,
    light: ref.purpleLight,
    dark: ref.purpleDark,
    contrastText: ref.white,
    container: color(ref.purple).alpha(ref.opacity.level2).rgb().toString(),
    onContainer: ref.purple,
  },

  brown: {
    main: ref.brown,
    light: ref.brownLight,
    dark: ref.brownDark,
    contrastText: ref.white,
    container: color(ref.brown).alpha(ref.opacity.level2).rgb().toString(),
    onContainer: ref.brown,
  },
};

export const DefaultColorPalette: TColorPaletteTheme = {
  common: {
    black: ref.black,
    white: ref.white,
  },

  ...BaseColors,

  grey: {
    50: ref.grey50,
    100: ref.grey100,
    200: ref.grey200,
    300: ref.grey300,
    400: ref.grey400,
    500: ref.grey500,
    600: ref.grey600,
    700: ref.grey700,
    800: ref.grey800,
    900: ref.grey900,
  },

  background: {
    default: ref.backgroundDefault,
  },

  surface: {
    disabled: ref.surfaceDisabled,
    onDisabled: ref.onSurfaceDisabled,
  },

  border: {
    default: ref.borderDefault,
  },

  action: {
    hover: (value: string) => color(value).alpha(0.8).rgb().toString(),
    press: (value: string) => color(value).alpha(0.9).rgb().toString(),
  },

  text: {
    primary: ref.textPrimary,
    secondary: ref.textSecondary,
    disabled: ref.textDisabled,
  },
};
