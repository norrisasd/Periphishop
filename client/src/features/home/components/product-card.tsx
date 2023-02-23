import {
  Box,
  Button,
  Card,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import Cart from "../../../shared/cart";
import { addToCart } from "../../../shared/cartSlice";
type Props = {
  name: string;
  imageUrl: string;
  price: number;
};
const ProductCard = ({ name, imageUrl, price }: Props) => {
  const [showButton, setShowButton] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    onOpen();
    dispatch(
      addToCart({
        name: name,
        price: price,
        image: imageUrl,
        quantity: 0,
      })
    );
  };
  return (
    <Card variant="unstyled" height="21rem" width="21rem">
      <VStack width="100%" height="100%">
        <Box
          display="flex"
          width="100%"
          height="100%"
          bgImage={imageUrl}
          backgroundPosition="center"
          backgroundSize="cover"
          onMouseEnter={() => setShowButton(true)}
          onMouseLeave={() => setShowButton(false)}
        >
          <Box
            height="100%"
            width="100%"
            alignItems="center"
            display={showButton ? "flex" : "none"}
            justifyContent="center"
            background="rgba(0,0,0,0.6)"
            opacity="0%"
            transition="ease-out 0.3s"
            _hover={{
              opacity: "100%",
            }}
          >
            <Button
              variant="outline"
              color="whiteAlpha.900"
              onClick={handleAddToCart}
              position="absolute"
              zIndex="1"
              _hover={{
                color: "primary",
                bgColor: "whiteAlpha.800",
                borderColor: "#156595",
              }}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
        <Text fontSize="xl">{name}</Text>
      </VStack>
      <Cart isOpen={isOpen} onClose={onClose} />
    </Card>
  );
};

export default ProductCard;
