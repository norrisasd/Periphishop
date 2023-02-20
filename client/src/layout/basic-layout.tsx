import { Box } from "@chakra-ui/react";
import React from "react";
import Navigation from "./navigation";

type Props = React.PropsWithChildren;

const BasicLayout = ({ children }: Props) => {
  return (
    <Box
      bg="white"
      w="100%"
      h="100%"
      p={4}
      color="white"
      margin="0"
      paddingX="0"
    >
      <Navigation />
      {children}
    </Box>
  );
};

export default BasicLayout;
