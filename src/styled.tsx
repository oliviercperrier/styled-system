import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { TExtendedFlexboxProps } from "./config";
import { parseExtendedStyle } from "./utils";

const styledComponent = <T, ComponentProps, ComponentStyleProps>(
  Component: any
) => {
  return (
    props: T &
      ComponentProps &
      ComponentStyleProps &
      StyleProp<ComponentStyleProps> &
      TExtendedFlexboxProps
  ) => {
    const baseStyle = props as Pick<
      ComponentStyleProps,
      keyof ComponentStyleProps
    >;
    const extendedStyle = props as Pick<T, keyof T>;

    return (
      <Component
        {...(props as any)}
        style={[props, baseStyle, parseExtendedStyle(extendedStyle)]}
      />
    );
  };
};

const styled = {
  View: <T,>() => styledComponent<T, ViewProps, ViewStyle>(View),
  Text: <T,>() => styledComponent<T, TextProps, TextStyle>(Text),
  Pressable: <T,>() => styledComponent<T, PressableProps, ViewStyle>(Pressable),
};

export default styled;
