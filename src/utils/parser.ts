import { FlexStyle } from "react-native";
import { Sizes } from "../config/theme/spacing";
import {
  TAliasedSpacing,
  TAliasedFlexboxProps,
  TSizes,
} from "../config/theme/types";

export const parseAliasedFlexStyles = (
  aliasedFlexStyle: TAliasedFlexboxProps
): Partial<FlexStyle> => ({
  // Margins
  margin: getSize(aliasedFlexStyle.m),
  marginRight: getSize(aliasedFlexStyle.mr),
  marginLeft: getSize(aliasedFlexStyle.ml),
  marginBottom: getSize(aliasedFlexStyle.mb),
  marginTop: getSize(aliasedFlexStyle.mt),
  marginHorizontal: getSize(aliasedFlexStyle.mx),
  marginVertical: getSize(aliasedFlexStyle.my),
  // Paddings
  padding: getSize(aliasedFlexStyle.p),
  paddingRight: getSize(aliasedFlexStyle.pr),
  paddingLeft: getSize(aliasedFlexStyle.pl),
  paddingBottom: getSize(aliasedFlexStyle.pb),
  paddingTop: getSize(aliasedFlexStyle.pt),
  paddingHorizontal: getSize(aliasedFlexStyle.px),
  paddingVertical: getSize(aliasedFlexStyle.py),
  // Flex
  flexDirection: aliasedFlexStyle.flexDir,
  justifyContent: aliasedFlexStyle.justify,
});

const getSize = (styleElement: TAliasedSpacing | undefined) =>
  styleElement
    ? styleElement in Sizes
      ? (Sizes[styleElement as TSizes] as number)
      : styleElement
    : undefined;

const parseAliasedStyle = (aliasedStyle: any) => ({
  ...parseAliasedFlexStyles(aliasedStyle),
});

export default parseAliasedStyle;
