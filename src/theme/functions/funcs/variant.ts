import Color from "color";
import { ColorValue, TextStyle, ViewStyle } from "react-native";
import type { TColor, TThemeBase } from "../../types";
import { color } from "./color";
import { primaryShade } from "./primaryShade";

export interface VariantInput {
  variant:
    | "filled"
    | "light"
    | "outline"
    | "default"
    | "white"
    | "subtle"
    | "transparent";
  color?: TColor;
  primaryFallback?: boolean;
}

export interface VariantOutput {
  border: string;
  background: string;
  color: string;
}

interface ColorInfo {
  isSplittedColor: boolean;
  key?: string;
  shade?: number;
}

function getColorIndexInfo(color: string, theme: TThemeBase): ColorInfo {
  if (typeof color === "string" && color.includes(".")) {
    const [splittedColor, _splittedShade] = color.split(".");
    const splittedShade = parseInt(_splittedShade, 10);

    if (
      splittedColor in theme.palette.colors &&
      splittedShade >= 0 &&
      splittedShade < 10
    ) {
      return {
        isSplittedColor: true,
        key: splittedColor,
        shade: splittedShade,
      };
    }
  }

  return { isSplittedColor: false };
}

const rgba = (color: string, alpha: number) =>
  Color(color).alpha(alpha).rgb().toString();

export function variant(theme: TThemeBase) {
  const getThemeColor = color(theme);
  const getPrimaryShade = primaryShade(theme);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  return ({ variant, color, primaryFallback }: VariantInput): VariantOutput => {
    const currentColor = color || "";
    const colorInfo = getColorIndexInfo(currentColor, theme);

    switch (variant) {
      case "light": {
        return {
          border: "transparent",
          background: rgba(
            getThemeColor(
              currentColor,
              theme.colorScheme === "dark" ? 8 : 0,
              primaryFallback,
              false
            ),
            theme.colorScheme === "dark" ? 0.2 : 1
          ),
          color:
            color === "dark"
              ? theme.colorScheme === "dark"
                ? theme.palette.colors.dark[0]
                : theme.palette.colors.dark[9]
              : getThemeColor(
                  currentColor,
                  theme.colorScheme === "dark" ? 2 : getPrimaryShade("light")
                ),
        };
      }

      case "subtle": {
        return {
          border: "transparent",
          background: "transparent",
          color:
            color === "dark"
              ? theme.colorScheme === "dark"
                ? theme.palette.colors.dark[0]
                : theme.palette.colors.dark[9]
              : getThemeColor(
                  currentColor,
                  theme.colorScheme === "dark" ? 2 : getPrimaryShade("light")
                ),
        };
      }

      case "outline": {
        return {
          border: getThemeColor(
            currentColor,
            theme.colorScheme === "dark" ? 5 : getPrimaryShade("light")
          ),
          background: "transparent",
          color: getThemeColor(
            currentColor,
            theme.colorScheme === "dark" ? 5 : getPrimaryShade("light")
          ),
        };
      }

      case "default": {
        return {
          border:
            theme.colorScheme === "dark"
              ? theme.palette.colors.dark[4]
              : theme.palette.colors.gray[4],
          background:
            theme.colorScheme === "dark"
              ? theme.palette.colors.dark[6]
              : theme.white,
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        };
      }

      case "white": {
        return {
          border: "transparent",
          background: theme.white,
          color: getThemeColor(currentColor, getPrimaryShade()),
        };
      }

      case "transparent": {
        return {
          border: "transparent",
          color:
            color === "dark"
              ? theme.colorScheme === "dark"
                ? theme.palette.colors.dark[0]
                : theme.palette.colors.dark[9]
              : getThemeColor(
                  currentColor,
                  theme.colorScheme === "dark" ? 2 : getPrimaryShade("light")
                ),
          background: "transparent",
        };
      }

      default: {
        const _primaryShade = getPrimaryShade();
        const _shade = colorInfo.isSplittedColor
          ? colorInfo.shade
          : _primaryShade;
        const _color =
          (colorInfo.isSplittedColor ? colorInfo.key : currentColor) || "";

        return {
          border: "transparent",
          background: getThemeColor(_color, _shade, primaryFallback),
          color: theme.white,
        };
      }
    }
  };
}
