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
import { parseAliasedStyle } from "./utils";

const styledComponent = <T, ComponentProps, ComponentStyleProps>(Component: any) => {
  return (props: T & ComponentProps & ComponentStyleProps & StyleProp<ComponentStyleProps>) => {
    const baseStyle = props as Pick<ComponentStyleProps, keyof ComponentStyleProps>;
    const aliasedStyle = props as Pick<T, keyof T>;

    return <Component style={[props, baseStyle, parseAliasedStyle(aliasedStyle)]} />;
  };
};

const styled = {
  View: <T,>() => styledComponent<T, ViewProps, ViewStyle>(View),
  Text: <T,>() => styledComponent<T, TextProps, TextStyle>(Text),
  Pressable: <T,>() => styledComponent<T, PressableProps, ViewStyle>(Pressable),
};

export default styled