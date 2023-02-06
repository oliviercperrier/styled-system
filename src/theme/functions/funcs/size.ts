import { TSize, TSizes } from "theme/types/Sizes";

interface GetSize {
  size: TSize;
  sizes: TSizes;
}

export const size = (props: GetSize) => {
  if (typeof props.size === "number") {
    return props.size;
  }

  const computedSize = props.sizes[props.size];

  return computedSize !== undefined
    ? computedSize
    : props.size || props.sizes.md;
};
