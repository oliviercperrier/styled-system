import type { TThemeBase } from "../../types";
import { primaryShade } from "./primaryShade";

export function color(theme: TThemeBase) {
  const getPrimaryShade = primaryShade(theme);

  return (
    color: string,
    shade?: number,
    primaryFallback: boolean = true,
    useSplittedShade: boolean = true
  ) => {
    if (typeof color === "string" && color.includes(".")) {
      const [splitterColor, _splittedShade] = color.split(".");
      const splittedShade = parseInt(_splittedShade, 10);

      if (
        splitterColor in theme.palette.colors &&
        splittedShade >= 0 &&
        splittedShade < 10
      ) {
        return theme.palette.colors[splitterColor][
          typeof shade === "number" && !useSplittedShade ? shade : splittedShade
        ];
      }
    }

    const _shade = typeof shade === "number" ? shade : getPrimaryShade();

    return color in theme.palette.colors
      ? theme.palette.colors[color][_shade]
      : primaryFallback
      ? theme.palette.colors[theme.palette.primaryColor][_shade]
      : color;
  };
}
