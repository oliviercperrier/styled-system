import { TSpacingSizes, TSpacingTheme } from "./types";

export const Sizes: TSpacingSizes = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const SpacingTheme: TSpacingTheme = {
  spacing: {
    sizes: Sizes,

    default: {
      px: Sizes.xxl,
      py: Sizes.xxl,
    },

    mobile: {
      px: Sizes.xl,
      py: Sizes.xl,
    },
  },
};
