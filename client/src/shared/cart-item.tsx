import {
  Flex,
  VStack,
  Image,
  Text,
  Center,
  Button,
  Link,
  Popover,
  useDisclosure,
  PopoverTrigger,
} from "@chakra-ui/react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

import React from "react";
import "@fontsource/harmattan";
import { useAppDispatch } from "../app/hooks";
import {
  decreaseQuantity,
  incrementQuantity,
  removeFromCart,
} from "./cartSlice";
import RemoveConfirmation from "./components/remove-confirmation";

type Props = {
  image: string;
  name: string;
  price: number;
  quantity?: number;
};

const CartItem = ({ image, name, price, quantity }: Props) => {
  const dispatch = useAppDispatch();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const remove = () => dispatch(removeFromCart(name));
  return (
    <VStack spacing="5rem" alignItems="start">
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        closeOnBlur={false}
      >
        <PopoverTrigger>
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
                src={image}
                alt={name}
                width="3.75rem"
                height="5.625rem"
                objectFit="cover"
              />
              <VStack
                spacing="0.10rem"
                pl="1rem"
                pt="0.5rem"
                alignItems="start"
              >
                <Text fontWeight="bold">{name}</Text>
                <Text>$ {price} USD</Text>
                <Link
                  onClick={onToggle}
                  _hover={{
                    color: "red.900",
                  }}
                  color="red.500"
                  fontWeight="300"
                >
                  REMOVE
                </Link>
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
              <Text>{quantity}</Text>
              <Flex flexDirection="column">
                <Button size="1rem">
                  <FiArrowUp
                    onClick={() => dispatch(incrementQuantity(name))}
                  />
                </Button>
                <Button
                  onClick={() =>
                    dispatch(
                      quantity === 1
                        ? removeFromCart(name)
                        : decreaseQuantity(name)
                    )
                  }
                  size="1rem"
                  isDisabled={quantity === 1 ? true : false}
                >
                  <FiArrowDown />
                </Button>
              </Flex>
            </Center>
          </Flex>
        </PopoverTrigger>
        <RemoveConfirmation remove={remove} onClose={onClose} />
      </Popover>
    </VStack>
  );
};

export default CartItem;
