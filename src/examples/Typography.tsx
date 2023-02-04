import React from "react";
import { StyleSheet, TextProps as BaseTextProps, TextStyle } from "react-native";
import { styled, TTypographyVariantKey } from "..";
import { useTheme } from "../config/ConfigProvider";

const StyledTypography = styled.Text();

type TextProps = BaseTextProps &
  TextStyle & {
    variant?: TTypographyVariantKey;
    secondary?: boolean;
    underline?: boolean;
  };

export const Text = ({ variant, secondary, underline, ...base }: TextProps) => {
  const { typography } = useTheme();

  const variantStyle = variant ? typography.variants[variant] : {};
  const secondaryStyle = secondary ? {} : {};

  return (
    <StyledTypography {...base} style={[base.style, variantStyle, secondaryStyle, underline && styles.underline]} />
  );
};

const styles = StyleSheet.create({
  underline: {
    textDecorationLine: "underline",
  },
});
