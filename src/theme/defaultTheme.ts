import { DefaultColorPalette } from "./defaultColors";
import { DefaultTypographyTheme } from "./defaultTypography";
import { attachFunctions } from "./functions/attachFunctions";
import { TThemeBase } from "./types/Theme";

const _DEFAULT_THEME: TThemeBase = {
  loader: "",

  dateFormatISO: "yyyy-MM-dd",
  dateFormat: "MM/dd/yyyy",
  dateLocale: "en-US",

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  
  defaultRadius: "md",
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },

  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1600,
  },

  typography: DefaultTypographyTheme,

  palette: DefaultColorPalette,

  components: {}
};

const DEFAULT_THEME = attachFunctions(_DEFAULT_THEME);

export default DEFAULT_THEME;
