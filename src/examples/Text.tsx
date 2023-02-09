import React, { PropsWithChildren } from "react";
import {
  Text as RNText,
  TextProps as BaseTextProps,
  TextStyle,
} from "react-native";
import { useTheme } from "../ConfigProvider";
import { useTextSx } from "../hooks";
import { extractSystemStyles, extractTextSystemStyles } from "../system";
import { TTypographyVariant } from "../theme";
import { DefaultProps, DefaultTextProps } from "../types";

export type TTextProps = PropsWithChildren<
  DefaultTextProps<TextStyle> &
    BaseTextProps & {
      variant: TTypographyVariant;
    }
>;

const Text = ({ style, sx, variant, ...other }: TTextProps) => {
  const theme = useTheme();
  const { systemStyles, rest } = extractTextSystemStyles(other);
  const variantStyles = theme.typography.variants[variant];

  return (
    <RNText
      style={[variantStyles, ...useTextSx(sx || [], systemStyles), style]}
      {...rest}
    />
  );
};

export default Text;
