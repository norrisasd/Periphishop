import {
  Flex,
  VStack,
  Image,
  Text,
  Center,
  useControllableState,
  Button,
  Link,
} from "@chakra-ui/react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

import React from "react";
import "@fontsource/harmattan";

type Props = {
  image?: string;
  name?: string;
  price?: string;
  quantity?: number;
};

const CartItem = ({ image, name, price, quantity }: Props) => {
  const [value, setValue] = useControllableState({ defaultValue: 1 });
  return (
    <VStack spacing="5rem" alignItems="start">
      <Flex
        width="100%"
        maxW="28rem"
        p="1rem"
        alignItems="center"
        justifyContent="space-between"
        fontFamily="harmattan"
        fontSize="1rem"
        letterSpacing="0.20rem"
      >
        <Flex>
          <Image
            src="https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="QWe"
            width="3.75rem"
            height="5.625rem"
            objectFit="cover"
          />
          <VStack spacing="0.10rem" pl="1rem" pt="0.5rem" alignItems="start">
            <Text fontWeight="bold">Title</Text>
            <Text>$ 49.99 USD</Text>
            <Text color="red.500" fontWeight="300">
              REMOVE
            </Text>
          </VStack>
        </Flex>
        <Center
          border="1px"
          color="black"
          borderColor="black"
          fontSize="1rem"
          borderRadius="0"
          height="3rem"
          width="5rem"
          justifyContent="space-between"
          p="1rem"
        >
          <Text>{value}</Text>
          <Flex flexDirection="column">
            <Button size="1rem">
              <FiArrowUp onClick={() => setValue(value + 1)} />
            </Button>
            <Button size="1rem">
              <FiArrowDown onClick={() => setValue(value - 1)} />
            </Button>
          </Flex>
        </Center>
      </Flex>
    </VStack>
  );
};

export default CartItem;
