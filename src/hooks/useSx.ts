import { css } from "@emotion/native";
import { useTheme } from "../ConfigProvider";
import {
  getSystemStyles,
  getTextSystemStyles,
} from "../system/getSystemStyles";
import { TTheme } from "../theme/types/Theme";
import { Sx } from "../types/DefaultProps";
import {
  TStyleSystemProps,
  TTypographyStyleSystemProps,
} from "../types/StyleSystem";

const extractSx = (sx: Sx, theme: TTheme) => {
  return typeof sx === "function" ? sx(theme) : sx;
};

export const useSx = (sx: Sx | Sx[], systemProps: TStyleSystemProps) => {
  const theme = useTheme();

  if (Array.isArray(sx)) {
    return [
      css(getSystemStyles(systemProps, theme)),
      ...sx.map((partial) => css(extractSx(partial, theme))),
    ];
  }

  return [css(getSystemStyles(systemProps, theme)), css(extractSx(sx, theme))];
};

export const useTextSx = (
  sx: Sx | Sx[],
  systemProps: TTypographyStyleSystemProps
) => {
  const theme = useTheme();

  if (Array.isArray(sx)) {
    return [
      css(getTextSystemStyles(systemProps, theme)),
      ...sx.map((partial) => css(extractSx(partial, theme))),
    ];
  }

  return [
    css(getTextSystemStyles(systemProps, theme)),
    css(extractSx(sx, theme)),
  ];
};
