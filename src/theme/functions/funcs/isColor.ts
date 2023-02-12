import Color from "color";
import { TColor } from "../../types";

export function isColor(schema: "dark" | "light", color: TColor): boolean {
  return schema === "dark" ? Color(color).isDark() : Color(color).isLight();
}
