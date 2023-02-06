import { FlexStyle, TextStyle, ViewStyle } from "react-native";
import { TColor } from "theme/types/Colors";
import { TNumberSize, TSize } from "theme/types/Sizes";

export type SystemProp<Value> =
  | Value
  | Partial<Record<TSize | (string & {}), Value>>;

export type SpacingValue = TNumberSize | (string & {});

export interface TStyleSystemProps {
  f?: SystemProp<FlexStyle["flex"]>;
  fgrow?: SystemProp<FlexStyle["flexGrow"]>;
  fshrink?: SystemProp<FlexStyle["flexShrink"]>;
  fwrap?: SystemProp<FlexStyle["flexWrap"]>;
  fdirection?: SystemProp<FlexStyle["flexDirection"]>;
  fbasis?: SystemProp<FlexStyle["flexBasis"]>;
  justifyContent?: FlexStyle["justifyContent"];
  alignContent?:  FlexStyle["alignContent"];
  alignItems?: FlexStyle["alignItems"];
  alignSelf?: FlexStyle["alignSelf"];
  
  m?: SystemProp<SpacingValue>;
  my?: SystemProp<SpacingValue>;
  mx?: SystemProp<SpacingValue>;
  mt?: SystemProp<SpacingValue>;
  mb?: SystemProp<SpacingValue>;
  ml?: SystemProp<SpacingValue>;
  mr?: SystemProp<SpacingValue>;

  p?: SystemProp<SpacingValue>;
  py?: SystemProp<SpacingValue>;
  px?: SystemProp<SpacingValue>;
  pt?: SystemProp<SpacingValue>;
  pb?: SystemProp<SpacingValue>;
  pl?: SystemProp<SpacingValue>;
  pr?: SystemProp<SpacingValue>;

  bg?: SystemProp<TColor>;
  c?: SystemProp<TColor>;
  opacity?: SystemProp<ViewStyle["opacity"]>;

  ff?: SystemProp<TextStyle["fontFamily"]>;
  fz?: SystemProp<SpacingValue>;
  fw?: SystemProp<TextStyle["fontWeight"]>;
  lts?: SystemProp<TextStyle["letterSpacing"]>;
  ta?: SystemProp<TextStyle["textAlign"]>;
  lh?: SystemProp<TextStyle["lineHeight"]>;
  fs?: SystemProp<TextStyle["fontStyle"]>;
  tt?: SystemProp<TextStyle["textTransform"]>;

  w?: SystemProp<ViewStyle["width"]>;
  miw?: SystemProp<ViewStyle["minWidth"]>;
  maw?: SystemProp<ViewStyle["maxWidth"]>;
  h?: SystemProp<ViewStyle["height"]>;
  mih?: SystemProp<ViewStyle["minHeight"]>;
  mah?: SystemProp<ViewStyle["maxHeight"]>;

  pos?: SystemProp<ViewStyle["position"]>;
  top?: SystemProp<ViewStyle["top"]>;
  left?: SystemProp<ViewStyle["left"]>;
  bottom?: SystemProp<ViewStyle["bottom"]>;
  right?: SystemProp<ViewStyle["right"]>;

  display?: SystemProp<ViewStyle["display"]>;
}

export type TStyleSystemSize = keyof TStyleSystemProps;
