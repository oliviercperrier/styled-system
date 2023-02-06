import { TStyleSystemSize } from "../types/StyleSystem";
import { SystemValueType } from "./getter";

export interface SystemPropData {
  type: SystemValueType;
  property: string;
}

export const SYSTEM_PROPS: Record<TStyleSystemSize, SystemPropData> = {
  f: { type: "default", property: "flex" },
  fgrow: { type: "default", property: "flexGrow" },
  fshrink: { type: "default", property: "flexShrink" },
  fwrap: { type: "default", property: "flexWrap" },
  fdirection: { type: "default", property: "flexDirection" },
  fbasis: { type: "default", property: "flexBasis" },
  justifyContent: { type: "default", property: "justifyContent" },
  alignContent: { type: "default", property: "alignContent" },
  alignItems: { type: "default", property: "alignItems" },
  alignSelf: { type: "default", property: "alignSelf" },

  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  mx: { type: "spacing", property: "marginHorizontal" },
  my: { type: "spacing", property: "marginVertical" },

  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  px: { type: "spacing", property: "paddingHorizontal" },
  py: { type: "spacing", property: "paddingVertical" },

  bg: { type: "color", property: "backgroundColor" },
  c: { type: "color", property: "color" },
  opacity: { type: "default", property: "opacity" },

  ff: { type: "default", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "default", property: "fontWeight" },
  lts: { type: "default", property: "letterSpacing" },
  ta: { type: "default", property: "textAlign" },
  lh: { type: "default", property: "lineHeight" },
  fs: { type: "default", property: "fontStyle" },
  tt: { type: "default", property: "textTransform" },

  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },

  pos: { type: "default", property: "position" },
  top: { type: "default", property: "top" },
  left: { type: "default", property: "left" },
  bottom: { type: "default", property: "bottom" },
  right: { type: "default", property: "right" },

  display: { type: "default", property: "display" },
};
