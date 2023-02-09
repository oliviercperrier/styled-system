import { filterProps } from "../utils/filterProps";
import {
  TStyleSystemProps,
  TTypographyStyleSystemProps,
} from "../types/StyleSystem";

export function extractSystemStyles<T extends Record<string, any>>(
  others: TStyleSystemProps & T
): { systemStyles: TStyleSystemProps; rest: T } {
  const {
    f,
    fbasis,
    fdirection,
    fgrow,
    fshrink,
    fwrap,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,

    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,

    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,

    bg,
    opacity,

    w,
    miw,
    maw,
    h,
    mih,
    mah,

    pos,
    top,
    left,
    bottom,
    right,

    display,
    ...rest
  } = others;
  const systemStyles = filterProps({
    f,
    fbasis,
    fdirection,
    fgrow,
    fshrink,
    fwrap,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,

    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,

    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,

    bg,
    opacity,

    w,
    miw,
    maw,
    h,
    mih,
    mah,

    pos,
    top,
    left,
    bottom,
    right,

    display,
  });

  return { systemStyles, rest: rest as unknown as T };
}

export function extractTextSystemStyles<T extends Record<string, any>>(
  others: TTypographyStyleSystemProps & T
): { systemStyles: TTypographyStyleSystemProps; rest: T } {
  const { systemStyles: baseSystemStyles } = extractSystemStyles(others);

  const {
    color,

    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    ...rest
  } = others;

  const systemStyles = filterProps({
    color,

    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
  });

  return {
    systemStyles: {
      ...baseSystemStyles,
      ...systemStyles,
    },
    rest: rest as unknown as T,
  };
}
