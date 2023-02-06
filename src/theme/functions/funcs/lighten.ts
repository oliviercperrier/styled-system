import Color from "color";

export const lighten = (color: string, alpha: number) =>
  Color(color).alpha(alpha).rgb().toString();
