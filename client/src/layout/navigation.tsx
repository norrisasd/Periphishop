import { Box, Flex, HStack, Link, Text, useDisclosure } from "@chakra-ui/react";
import { IoMdCart } from "react-icons/io";
import React from "react";
import Cart from "../shared/cart";
import { useAppSelector } from "../app/hooks";

// type NavItem = {
//   title: string;
//   redirectTo?: string;
//   index: number;
// };

// const navs: NavItem = [
//   {
//     title: "Home",
//     redirectTo: "/",
//     index: 0,
//   },
// ];

type Props = {};

const Navigation = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartCount = useAppSelector((state) => state.cart.numOfItems);
  return (
    <Box display="flex" justifyContent="center">
      <Flex
        w="100%"
        maxWidth="100rem"
        justifyContent="space-between"
        color="nav.text"
      >
        <Flex>
          <Text fontSize="22px">Periphishop</Text>
        </Flex>
        <Flex>
          <HStack spacing="1.5rem" fontSize="20px" fontWeight="400">
            <Link>Home</Link>
            <Link>Products</Link>
            <Link>
              <HStack onClick={onOpen}>
                <IoMdCart />
                <Cart isOpen={isOpen} onClose={onClose} />
                <Text>{cartCount}</Text>
              </HStack>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
