import { TDefaultTheme } from "./types/base";
import { BaseColorTheme } from "../theme/color";
import { ShapeTheme } from "../theme/shape";
import { SpacingTheme } from "../theme/spacing";
import { TypographyTheme } from "../theme/typography";

const DefaultTheme: TDefaultTheme = {
    ...TypographyTheme,
    ...SpacingTheme,
    ...BaseColorTheme,
    ...ShapeTheme
}

export default DefaultTheme;