import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoMdClose } from "react-icons/io";
import CartItem from "./cart-item";
type Props = {
  onClose: () => void;
  isOpen: boolean;
};
const cart = ({ onClose, isOpen }: Props) => {
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
        <DrawerBody>
          <CartItem />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default cart;
