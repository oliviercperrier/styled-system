import { TTheme } from "./Theme";

interface ThemeComponent {
  defaultProps?: Record<string, any> | ((theme: TTheme) => Record<string, any>);
}
  
export type TComponentsTheme = Record<string, ThemeComponent>;
