import { ReactNativeStyle } from "@emotion/native";
import { StyleProp } from "react-native";
import { TTheme } from "../theme/types/Theme";
import { TStyleSystemProps } from "./StyleSystem";

export type Sx<StyleType extends ReactNativeStyle = ReactNativeStyle> =
  | StyleType
  | ((theme: TTheme) => StyleType);

export interface DefaultProps<T> extends TStyleSystemProps {
  style?: StyleProp<T>;
  sx?: Sx | Sx[];
}
