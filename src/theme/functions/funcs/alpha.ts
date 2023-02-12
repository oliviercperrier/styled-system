import Color from "color";

export const alpha = (color: string, alpha: number) =>
  Color(color).alpha(alpha).rgb().toString();
