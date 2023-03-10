import { extendBaseTheme, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: {
      200: '#C8DEEF',
      400: '#2E7BA2',
    },
    secondary: {
      200: '#FBF0DD',
      300: '#FACF9D',
      400: '#DF9010',
    }
  },
};

export const theme = extendTheme({ colors });

