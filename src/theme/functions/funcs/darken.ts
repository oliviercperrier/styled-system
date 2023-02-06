import Color from "color";

export const darken = (color: string, alpha: number) =>
  Color(color)
    .alpha(1 - alpha)
    .rgb()
    .toString();
