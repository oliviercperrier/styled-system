import { TNumberSize, TSize, TSizes } from "../../../theme/types/Sizes";

export interface GetSize {
  size: string | number;
  sizes: TSizes;
}

export const size = (props: GetSize) => {
  if (typeof props.size === "number") {
    return props.size;
  }

  const computedSize = props.sizes[props.size as TSize];

  return computedSize !== undefined
    ? computedSize
    : props.size || props.sizes.md;
};
