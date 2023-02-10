import { TNumberSize, TThemeBase } from "../../types";

export function radius(theme: TThemeBase) {
  return (size?: TNumberSize): number => {
    if (typeof size === "number") {
      return size;
    }

    const defaultRadius =
      typeof theme.defaultRadius === "number"
        ? theme.defaultRadius
        : theme.radius[theme.defaultRadius];

    if (size === undefined) {
      return defaultRadius;
    }

    return theme.radius[size] || defaultRadius;
  };
}
