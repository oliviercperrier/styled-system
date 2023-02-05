import { FlexStyle, TextStyle, ViewStyle } from "react-native";
import {
  Sizes,
  TExtendedSpacing,
  TExtendedFlexboxProps,
  TSizes,
  TExtendedColorProps,
  BaseColors,
  TColors,
  TExtendedBgColorProps,
} from "../config/theme";

export const parseExtendedFlexStyles = (
  extendedFlexStyle: TExtendedFlexboxProps
): Partial<FlexStyle> => ({
  width: extendedFlexStyle.fullWidth ? "100%" : undefined,
  // Margins
  margin: getSize(extendedFlexStyle.m),
  marginRight: getSize(extendedFlexStyle.mr),
  marginLeft: getSize(extendedFlexStyle.ml),
  marginBottom: getSize(extendedFlexStyle.mb),
  marginTop: getSize(extendedFlexStyle.mt),
  marginHorizontal: getSize(extendedFlexStyle.mx),
  marginVertical: getSize(extendedFlexStyle.my),
  // Paddings
  padding: getSize(extendedFlexStyle.p),
  paddingRight: getSize(extendedFlexStyle.pr),
  paddingLeft: getSize(extendedFlexStyle.pl),
  paddingBottom: getSize(extendedFlexStyle.pb),
  paddingTop: getSize(extendedFlexStyle.pt),
  paddingHorizontal: getSize(extendedFlexStyle.px),
  paddingVertical: getSize(extendedFlexStyle.py),
  // Flex
  flexDirection: extendedFlexStyle.flexDir,
  justifyContent: extendedFlexStyle.justify,
});

const getSize = (styleElement: TExtendedSpacing | undefined) =>
  styleElement
    ? styleElement in Sizes
      ? (Sizes[styleElement as TSizes] as number)
      : styleElement
    : undefined;

export const parseExtendedColor = (
  extendedColorStyle: TExtendedColorProps
): Pick<TextStyle, "color"> => ({
  color: getColor(extendedColorStyle.tColor),
});

export const parseExtendedBgColor = (
  extendedColorStyle: TExtendedBgColorProps
): Pick<ViewStyle, "backgroundColor"> => ({
  backgroundColor: getColor(extendedColorStyle.tBgColor),
});

const getColor = (styleElement: TColors | undefined) =>
  styleElement ? BaseColors[styleElement].main : undefined;

const parseExtendedStyle = (extendedStyle: any) => ({
  ...parseExtendedFlexStyles(extendedStyle),
  ...parseExtendedColor(extendedStyle),
  ...parseExtendedBgColor(extendedStyle),
});

export default parseExtendedStyle;
