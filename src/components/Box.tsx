import { useSx } from "hooks/useSx";
import React, { forwardRef } from "react";
import { View, ViewStyle } from "react-native";
import { extractSystemStyles } from "system/extractSystemStyles";
import { DefaultProps } from "types/DefaultProps";

export type TBoxProps = DefaultProps<ViewStyle> & {
  children?: React.ReactNode;
}

export const Box = forwardRef<View, TBoxProps>(
  ({ style, sx, ...others }, ref) => {
    const { systemStyles, rest } = extractSystemStyles(others);

    return (
      <View
        ref={ref}
        style={[useSx(sx || [], systemStyles), style]}
        {...rest}
      />
    );
  }
);

export default Box;
