export type TSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TNumberSize = TSize | number;
export type TSizes = Record<TSize, number>;

export type TContainerSizePaddingProps = {
  px: number;
  py: number;
};
