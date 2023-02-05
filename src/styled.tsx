import React from "react";
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
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

const styledComponent = <T, ComponentType, ComponentProps, ComponentStyleProps>(
  Component: any,
  styleFn: boolean
) => {
  return (
    props: T &
      ComponentProps &
      ComponentStyleProps &
      StyleProp<ComponentStyleProps> &
      TExtendedFlexboxProps & {
        ref?: React.Ref<ComponentType>;
        shouldRender?: boolean;
      }
  ) => {
    const { shouldRender = true } = props;

    if (!shouldRender) return null;

    const baseStyle: any = props as Pick<
      ComponentStyleProps,
      keyof ComponentStyleProps
    >;
    const extendedStyle: any = props as Pick<T, keyof T>;

    const getStyles = (state: any) => {
      let baseStyles = [];

      if (baseStyle.style) {
        if (state && baseStyle.style && typeof baseStyle.style === "function") {
          baseStyles = baseStyle.style(state);
        } else {
          baseStyles = [baseStyle.style];
        }
      }

      return [parseExtendedStyle(extendedStyle), props, ...baseStyles];
    };

    return (
      <Component
        {...(props as any)}
        style={styleFn ? getStyles : getStyles(undefined)}
      />
    );
  };
};

const styled = {
  View: <T,>() => styledComponent<T, View, ViewProps, ViewStyle>(View, false),
  Text: <T,>() => styledComponent<T, Text, TextProps, TextStyle>(Text, false),
  Pressable: <T,>() =>
    styledComponent<T, View, PressableProps, ViewStyle>(Pressable, true),
};

export default styled;
