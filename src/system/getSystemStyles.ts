import { TStyleSystemProps, TStyleSystemSize } from "../types/StyleSystem";
import { TTheme } from "theme/types/Theme";
import { SYSTEM_PROPS } from "system/systemProps";
import { valueGetters } from "system/getter";

export const getSystemStyles = (
  systemStyles: TStyleSystemProps,
  theme: TTheme,
  systemProps = SYSTEM_PROPS
) =>
  (Object.keys(systemProps) as TStyleSystemSize[]).reduce<Record<any, any>>(
    (acc, systemProp) => {
      if (
        systemProp in systemStyles &&
        systemStyles[systemProp] !== undefined
      ) {
        const value = systemStyles[systemProp];
        const parsedValue = valueGetters[systemProps[systemProp].type](
          value,
          theme
        );

        acc.push({ [systemProps[systemProp].property]: parsedValue });
      }

      return acc;
    },
    []
  );
