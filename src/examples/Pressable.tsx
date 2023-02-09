import { useSx } from "../hooks";
import React, { forwardRef } from "react";
import {
  Pressable as RNPressable,
  PressableProps as BasePressableProps,
  View,
  ViewStyle,
} from "react-native";
import { extractSystemStyles } from "../system/extractSystemStyles";
import { DefaultProps } from "../types/DefaultProps";

export type TPressableProps = DefaultProps<ViewStyle> &
  BasePressableProps & {
    children?: React.ReactNode;
  };

export const Pressable = forwardRef<View, TPressableProps>(
  ({ style, sx, ...others }, ref) => {
    const { systemStyles, rest } = extractSystemStyles(others);

    return (
      <RNPressable
        ref={ref}
        style={[useSx(sx || [], systemStyles), style]}
        {...rest}
      />
    );
  }
);

export default Pressable;
