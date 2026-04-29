import { palette } from "@/styles/colors";

export const theme = {
  colors: {
    light: palette.light,
    dark: palette.dark,
    white: palette.white,
    black: palette.black,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  typography: {
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
      xxl: 28,
      xxxl: 32,
    },
    weights: {
      regular: "400" as const,
      medium: "500" as const,
      semibold: "600" as const,
      bold: "700" as const,
    },
  },

  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    full: 9999,
  },
};
