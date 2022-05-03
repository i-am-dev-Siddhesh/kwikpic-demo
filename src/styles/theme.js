// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    primary: "#EDF6FA",
    textPrimary: "#3A3A3A",
    textSecondary: "#3E6588",
    dashColor: "#FFCC00",
};

const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
};

export const theme = extendTheme({ colors, breakpoints });
