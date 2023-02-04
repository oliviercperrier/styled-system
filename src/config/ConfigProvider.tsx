import React, { PropsWithChildren, useMemo, useContext } from "react";
import mergeTheme from "../utils/mergeTheme";
import { DefaultTheme } from "./theme";
import { TDefaultTheme } from "./theme/types/base";

export interface ConfigContextProps {
  theme: TDefaultTheme;
}

export interface ConfigProviderProps {
  theme?: TDefaultTheme;
}

export const Config: ConfigContextProps = {
  theme: DefaultTheme,
};

export const ConfigContext = React.createContext<ConfigContextProps>(Config);

export const ConfigConsumer = ConfigContext.Consumer;

export const useConfig = () => useContext(ConfigContext);

export const useTheme = () => useConfig().theme;

const ConfigProvider = ({ theme, ...props }: PropsWithChildren<ConfigProviderProps>): JSX.Element | null => {
  const outerTheme = useTheme();
  const mergedTheme = useMemo(() => mergeTheme(theme, outerTheme), [theme, outerTheme]);

  const memoedContext = useMemo<ConfigContextProps>(
    () => ({
      theme: mergedTheme,
      ...props,
    }),
    [mergedTheme, props]
  );

  if (!props.children) {
    return null;
  }

  return <ConfigContext.Provider value={memoedContext}>{props.children}</ConfigContext.Provider>;
};

export default ConfigProvider;
