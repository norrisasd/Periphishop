import { Button, Text, Heading, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../../app/hooks";
import OrderItem from "./order-item";

const CartInformation = (props: any) => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalCartItems = useAppSelector((state) => state.cart.numOfItems);
  const check = totalCartItems === 0 ? true : false;
  let shipping = 0;
  let subtotal = 0;
  return (
    <VStack
      backgroundColor="#FCFDFE"
      spacing="1rem"
      alignItems="start"
      height="40.5rem"
      maxW="40rem"
      m="3rem"
    >
      <Heading as="h1" size="md" alignSelf="center" textAlign="center">
        Order Summary
      </Heading>
      <VStack width="100%" height="100%" maxH="21rem" overflowY="auto">
        {check
          ? "NO ITEMS FOUND."
          : cartItems.map((product) => {
              subtotal += product.price * product.quantity;
              return (
                <OrderItem
                  key={product.name}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  quantity={product.quantity}
                />
              );
            })}
      </VStack>
      <VStack width="100%" alignItems="start" spacing="0.2rem" p="1rem">
        <HStack width="100%" justifyContent="space-between">
          <Text as="h1" fontWeight="semibold" fontSize="sm" textAlign="center">
            Subtotal
          </Text>
          <Text as="h1" fontWeight="semibold" fontSize="sm" textAlign="center">
            $ {subtotal} USD
          </Text>
        </HStack>
        <HStack width="100%" justifyContent="space-between">
          <Text fontWeight="semibold" fontSize="sm" textAlign="center">
            Shipping
          </Text>
          <Text fontWeight="semibold" fontSize="sm" textAlign="center">
            + $ {shipping} USD
          </Text>
        </HStack>
        <HStack width="100%" justifyContent="space-between">
          <Text fontWeight="bold" fontSize="md" textAlign="center">
            Order Total
          </Text>
          <Text fontWeight="bold" fontSize="md" textAlign="center">
            $ {subtotal + shipping} USD
          </Text>
        </HStack>
      </VStack>

      <Button
        variant="outline"
        alignSelf="center"
        width="100%"
        type="submit"
        mt="1rem"
        colorScheme="blue"
        color="black"
      >
        PLACE ORDER
      </Button>
    </VStack>
  );
};

export default CartInformation;
