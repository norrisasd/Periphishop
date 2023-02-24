import React from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

const LandingImage = (props: any) => {
  const url =
    "url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1265&q=80')";
  return (
    <Box
      width="100%"
      height="45rem"
      maxH="45rem"
      bgImage={url}
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box
        height="100%"
        background="rgba(0,0,0,0.6)"
        color="whiteAlpha.900"
        py="14rem"
        px="5rem"
      >
        <VStack spacing="1rem">
          <Text fontSize="5xl">Upgrade Your Setup, Enhance Your Game</Text>
          <Text fontSize="3xl">Welcome to our Peripheral Paradise!</Text>
          <Button
            color="whiteAlpha.900"
            variant="outline"
            fontSize="1rem"
            borderRadius="0"
            height="3rem"
            width="10rem"
            mt={[0, "2.5rem !important"]}
            _hover={{
              color: "primary",
              bgColor: "whiteAlpha.800",
              borderColor: "#156595",
            }}
          >
            Shop now
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default LandingImage;
