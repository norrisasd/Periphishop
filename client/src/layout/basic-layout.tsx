import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./footer";
import Navigation from "./navigation";

type Props = React.PropsWithChildren;

const BasicLayout = ({ children }: Props) => {
  return (
    <Box bg="white" w="100%" h="100%" color="white" margin="0" paddingX="0">
      <Navigation />
      {children}
      <Footer />
    </Box>
  );
};

export default BasicLayout;
