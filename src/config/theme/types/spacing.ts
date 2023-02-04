import { FlexStyle } from "react-native/types";

export type TSizes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type TAliasedSpacing = number | TSizes;

export type TAliasedFlexboxProps = {
  // Margins
  m?: TAliasedSpacing;
  mx?: TAliasedSpacing;
  my?: TAliasedSpacing;
  mr?: TAliasedSpacing;
  ml?: TAliasedSpacing;
  mt?: TAliasedSpacing;
  mb?: TAliasedSpacing;
  // Paddings
  p?: TAliasedSpacing;
  px?: TAliasedSpacing;
  py?: TAliasedSpacing;
  pr?: TAliasedSpacing;
  pl?: TAliasedSpacing;
  pt?: TAliasedSpacing;
  pb?: TAliasedSpacing;
  // Flex
  flexDir?: FlexStyle["flexDirection"];
  justify?: FlexStyle["justifyContent"];
};

export type TSpacingSizes = Record<TSizes, number>;

export type TSpacingContainerPaddingProps = {
  px: number;
  py: number;
};

export type TSpacingTheme = {
  spacing: {
    sizes: TSpacingSizes;
    default: TSpacingContainerPaddingProps;
    mobile: TSpacingContainerPaddingProps;
  };
};
