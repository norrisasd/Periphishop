import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { CartInformation, ShippingInformation } from "./component";
import "@fontsource/harmattan";

const CheckoutContent = (props: any) => {
  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     console.log(formData); // You can submit the form data to the server here
  //   };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="black"
      p="1rem"
    >
      <Flex
        flexDirection="column"
        p="1rem"
        border="1px"
        borderRadius="1%"
        borderColor="gray.300"
      >
        <Heading
          alignSelf="center"
          size="2xl"
          letterSpacing="0.4rem"
          fontFamily="harmattan"
        >
          CHECKOUT
        </Heading>
        <Flex
          flexDirection="row"
          width="100%"
          maxW="100rem"
          justifyContent="space-evenly"
        >
          <ShippingInformation />
          <CartInformation />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CheckoutContent;
