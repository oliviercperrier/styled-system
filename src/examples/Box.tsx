import { useSx } from "../hooks";
import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { extractSystemStyles } from "../system/extractSystemStyles";
import { DefaultProps } from "../types/DefaultProps";

export type TBoxProps = DefaultProps<ViewStyle> &
  ViewProps & {
    children?: React.ReactNode;
    shouldRender?: boolean;
  };

export const Box = ({
  style,
  sx,
  shouldRender = true,
  ...others
}: TBoxProps) => {
  if (!shouldRender) return null;

  const { systemStyles, rest } = extractSystemStyles(others);

  return <View style={[useSx(sx || [], systemStyles), style]} {...rest} />;
};

export default Box;
