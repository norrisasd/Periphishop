import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "inter, san-serif",
  },
  colors: {
    nav: {
      text: "#156595",
    },
    primary: "#156595",
    secondary: "whiteAlpha.900",
    product: {
      title1: "#153A5B",
      title2: "#6a8196",
    },
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
          color: "Black",
        },
      },
    },
  },
});

export default theme;
