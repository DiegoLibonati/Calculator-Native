import { palette } from "@/styles/colors";

const lightColors = {
  primary: palette.sand,
  secondary: palette.linen,

  text: {
    primary: palette.gray900,
    secondary: palette.gray500,
    disabled: palette.gray400,
    inverse: palette.white,
    link: palette.blue600,
  },

  background: {
    screen: palette.white,
    card: palette.gray50,
    input: palette.gray100,
  },

  border: {
    default: palette.gray200,
  },

  status: {
    success: palette.green500,
    error: palette.red500,
    warning: palette.amber500,
  },
};

const darkColors = {
  primary: palette.plum,
  secondary: palette.violet,

  text: {
    primary: palette.violet,
    secondary: palette.plum,
    disabled: palette.gray500,
    inverse: palette.gray900,
    link: palette.blue400,
  },

  background: {
    screen: palette.gray950,
    card: palette.gray800,
    input: palette.gray700,
  },

  border: {
    default: palette.gray700,
  },

  status: {
    success: palette.green500,
    error: palette.red500,
    warning: palette.amber500,
  },
};

export const theme = {
  colors: {
    light: lightColors,
    dark: darkColors,
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
