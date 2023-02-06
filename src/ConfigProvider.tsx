import React, { PropsWithChildren, useMemo, useContext } from "react";
import DEFAULT_THEME from "theme/defaultTheme";
import { TTheme } from "theme/types/Theme";
import mergeTheme from "utils/mergeTheme";

export interface ConfigContextProps {
  theme: TTheme;
}

export interface ConfigProviderProps {
  theme?: TTheme;
}

export const Config: ConfigContextProps = {
  theme: DEFAULT_THEME,
};

export const ConfigContext = React.createContext<ConfigContextProps>(Config);

export const ConfigConsumer = ConfigContext.Consumer;

export const useConfig = () => useContext(ConfigContext);

export const useTheme = () => useConfig().theme;

const ConfigProvider = ({
  theme = DEFAULT_THEME,
  ...props
}: PropsWithChildren<ConfigProviderProps>): JSX.Element | null => {
  const mergedTheme = useMemo(
    () => mergeTheme(theme, DEFAULT_THEME),
    [theme, DEFAULT_THEME]
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
