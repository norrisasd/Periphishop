import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import "@fontsource/harmattan";

const ProductBanner = (props: any) => {
  return (
    <Box
      maxW="100rem"
      width="100%"
      bgImage="https://images.pexels.com/photos/14130157/pexels-photo-14130157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      backgroundPosition="center"
      backgroundSize="auto"
      height="27rem"
    >
      <Flex
        height="100%"
        background="rgba(0,0,0,0.6)"
        alignItems="center"
        justifyContent="center"
        color="whiteAlpha.900"
      >
        <Text fontSize="6xl" fontFamily="harmattan">
          Experience the Power of Precision with our peripherals!
        </Text>
      </Flex>
    </Box>
  );
};

export default ProductBanner;
