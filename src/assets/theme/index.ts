import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: {
      200: "#C8DEEF",
      400: "#2E7BA2",
    },
    secondary: {
      200: "#FBF0DD",
      300: "#FACF9D",
      400: "#DF9010",
    },
  },
  text: {
    400: '#444444',
  }
};

const breakpoints = {
  sm: "22,5rem", //360px
  md: "48rem", //768px
  lg: "90rem" //1440px
};

const fonts = {
  heading: `'Calistoga', sans-serif`,
  body: `'Raleway', sans-serif`
};

const  textStyles = {
  heading: {
    md: {
      fontSize:   '32px',
      fontFamily: `'Raleway', sans-serif`,
      lineHeight: '37.57px',
      fontWeight:  700,
    },
    lg: {
      fontSize:   '40px',
      fontFamily: `'Raleway', sans-serif`,
      lineHeight: '46.96px',
      fontWeight:  700,
    },
    xl: {
      fontSize:   { base: '32px', md: '64px'},
      fontFamily: `'Calistoga', sans-serif`,
      lineHeight: {base: '41.6px' , md: '83.2px'},
      fontWeight:  400,
    }
  },
  text: {
    fontSize: '20px',
    fontFamily: `'Raleway', sans-serif`,
    lineHeight: '50px',
    color: colors.text[400]
  }
};

export const theme = extendTheme({ colors, breakpoints, fonts,  textStyles });
