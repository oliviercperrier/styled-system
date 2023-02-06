import { css } from "@emotion/native";
import { useTheme } from "../ConfigProvider";
import { getSystemStyles } from "../system/getSystemStyles";
import { TTheme } from "../theme/types/Theme";
import { Sx } from "../types/DefaultProps";
import { TStyleSystemProps } from "../types/StyleSystem";

const extractSx = (sx: Sx, theme: TTheme) => {
  return typeof sx === "function" ? sx(theme) : sx;
};

export const useSx = (sx: Sx | Sx[], systemProps: TStyleSystemProps) => {
  const theme = useTheme();

  if (Array.isArray(sx)) {
    return {
      ...css(getSystemStyles(systemProps, theme)),
      ...sx.map((partial) => css(extractSx(partial, theme))),
    };
  }

  return {
    ...css(extractSx(sx, theme)),
    ...css(getSystemStyles(systemProps, theme)),
  };
};
