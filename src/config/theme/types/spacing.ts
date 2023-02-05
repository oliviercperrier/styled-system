import { FlexStyle } from "react-native/types";

export type TSizes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type TExtendedSpacing = number | TSizes;

export type TExtendedFlexboxProps = {
  // Margins
  m?: TExtendedSpacing;
  mx?: TExtendedSpacing;
  my?: TExtendedSpacing;
  mr?: TExtendedSpacing;
  ml?: TExtendedSpacing;
  mt?: TExtendedSpacing;
  mb?: TExtendedSpacing;
  // Paddings
  p?: TExtendedSpacing;
  px?: TExtendedSpacing;
  py?: TExtendedSpacing;
  pr?: TExtendedSpacing;
  pl?: TExtendedSpacing;
  pt?: TExtendedSpacing;
  pb?: TExtendedSpacing;
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
