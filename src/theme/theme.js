import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = {
  base: "0px", // 0px
  sm: "320px", // Mobile devices (portrait phones)
  md: "768px", // Tablets and small laptops
  lg: "1028px", // Medium laptops
  xl: "1280px", // Large laptops and desktops
  "2xl": "1536px", // ~1536px
};

// 3. extend the theme
const theme = extendTheme({ config, breakpoints });

export default theme;
