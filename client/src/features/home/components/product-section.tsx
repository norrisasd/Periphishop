import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./product-card";

const ProductSection = (props: any) => {
  return (
    <Box w="100%" maxWidth="100rem" alignItems="center">
      <VStack spacing="3rem">
        <Text fontSize="5xl" color="product.title1" fontWeight="bold">
          Best Sellers
        </Text>
        <HStack spacing="4rem">
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1634306626082-9aad4bdb6e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
            name="GMMK Pro x Akko"
            price={50}
          />
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1631749352438-7d576312185d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            name="Pwnage Wireless"
            price={30}
          />
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            name="Logitech G102"
            price={23}
          />
        </HStack>
        <Box
          width="100%"
          height="37.5rem"
          bgImage="https://firebasestorage.googleapis.com/v0/b/titas-67eec.appspot.com/o/nikita-kachanovsky-FJFPuE1MAOM-unsplash.jpg?alt=media&token=7e3503c1-98da-4dee-a772-40148ad8c5bc"
          backgroundPosition="center"
          backgroundSize="cover"
          pl="50%"
          py="5rem"
        >
          <Text fontSize="5xl" fontWeight="bold" color="product.title1">
            Maximize Your Performance
          </Text>
          <Text
            pl="35%"
            pt="6rem"
            fontSize="5xl"
            fontWeight="bold"
            color="product.title1"
          >
            Start Upgrading !
          </Text>
          <Button
            variant="outline"
            mt="1rem"
            color="black"
            borderColor="black"
            fontSize="1rem"
            borderRadius="0"
            height="3rem"
            ml="50%"
            width="10rem"
            onClick={() => {
              window.location.assign("/products");
            }}
            _hover={{
              color: "primary",
              bgColor: "whiteAlpha.800",
              borderColor: "#156595",
            }}
          >
            Shop now
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default ProductSection;
