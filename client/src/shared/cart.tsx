import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useAppSelector } from "../app/hooks";
import CartItem from "./cart-item";
import "@fontsource/harmattan";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};
const Cart = ({ onClose, isOpen }: Props) => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalCartItems = useAppSelector((state) => state.cart.numOfItems);
  const check = totalCartItems === 0 ? true : false;
  let subtotal = 0;
  // useEffect(() => {
  //   cartItems.map

  // });
  const bodyStle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Drawer
      variant="secondary"
      placement="right"
      size="md"
      onClose={onClose}
      isOpen={isOpen}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <Flex justifyContent="space-between" color="nav.text">
            <Text>Your Cart</Text>
            <Link onClick={onClose}>
              <IoMdClose size="1.75rem" />
            </Link>
          </Flex>
        </DrawerHeader>
        <DrawerBody color="primary" style={check ? bodyStle : {}}>
          {check
            ? "NO ITEMS FOUND."
            : cartItems.map((product) => {
                subtotal += product.price * product.quantity;
                return (
                  <CartItem
                    key={product.name}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    quantity={product.quantity}
                  />
                );
              })}
        </DrawerBody>
        <DrawerFooter
          color="primary"
          borderTopWidth="1px"
          justifyContent="space-between"
        >
          <VStack width="100%">
            <Flex
              width="100%"
              justifyContent="space-between"
              alignContent="space-between"
            >
              <Text fontSize="1rem" fontFamily="harmattan">
                Subtotal
              </Text>
              <Text fontWeight="bold" fontSize="1rem" fontFamily="harmattan">
                $ {subtotal} USD
              </Text>
            </Flex>
            <Button
              border="1px"
              borderRadius="0"
              letterSpacing="0.3rem"
              variant="outline"
              width="100%"
              fontSize="1rem"
              fontFamily="harmattan"
            >
              CHECKOUT
            </Button>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
