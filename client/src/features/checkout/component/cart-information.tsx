import {
  Button,
  Text,
  Heading,
  VStack,
  HStack,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { clearCart } from "../../../shared/cartSlice";
import { clearShippingInfo } from "../../../shared/orderSlice";
import OrderItem from "./order-item";
import SuccessModal from "./success-modal";

const CartInformation = (props: any) => {
  const dispatch = useDispatch();
  const shippingInfo = useAppSelector(
    (state) => state.order.shippingInformation
  );
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalCartItems = useAppSelector((state) => state.cart.numOfItems);
  const check = totalCartItems === 0 ? true : false;
  let shipping = 0;
  let subtotal = 0;
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await axios.post("/order/new", {
        shippingInformation: shippingInfo,
        totalPrice: subtotal + shipping,
        totalQuantity: totalCartItems,
        orderItems: cartItems,
      });
      dispatch(clearShippingInfo());
      dispatch(clearCart());
    } catch (err) {
      console.log(err);
    }
    setOverlay(<OverlayOne />);
    onOpen();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <VStack
      backgroundColor="#FCFDFE"
      spacing="1rem"
      alignItems="start"
      width="100%"
      maxW="23rem"
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
        onClick={handleSubmit}
        variant="outline"
        alignSelf="center"
        width="100%"
        type="submit"
        mt="1rem"
        colorScheme="blue"
        color="black"
        isDisabled={check ? true : false}
      >
        PLACE ORDER
      </Button>
      <SuccessModal isOpen={isOpen} onClose={onClose} overlay={overlay} />
    </VStack>
  );
};

export default CartInformation;
