import React, { PropsWithChildren, useMemo, useContext } from "react";
import mergeTheme from "../utils/mergeTheme";
import { DefaultTheme, TDefaultTheme } from "./theme";

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

const ConfigProvider = ({
  theme = DefaultTheme,
  ...props
}: PropsWithChildren<ConfigProviderProps>): JSX.Element | null => {
  const mergedTheme = useMemo(
    () => mergeTheme(theme, DefaultTheme),
    [theme, DefaultTheme]
  );

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

  return (
    <ConfigContext.Provider value={memoedContext}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
