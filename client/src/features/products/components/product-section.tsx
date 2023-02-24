import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../../home/components/product-card";
import "@fontsource/harmattan";

type Props = {
  title: string;
  // products: Product[];
};

const ProductSection = ({ title }: Props) => {
  return (
    <Flex
      alignItems="start"
      justifyContent="space-between"
      width="100%"
      maxW="100rem"
      mt="4rem"
      color="primary"
      flexDirection="column"
    >
      <Text
        letterSpacing="0.5rem"
        fontSize="2rem"
        fontWeight="bold"
        m="2rem"
        fontFamily="harmattan"
      >
        {title}
      </Text>
      <SimpleGrid columns={4} gap="5rem" m="auto">
        <ProductCard
          imageUrl="https://images.unsplash.com/photo-1634306626082-9aad4bdb6e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
          name="GMMK Pro x Akko"
          price={50}
        />
        <ProductCard
          imageUrl="https://images.unsplash.com/photo-1634306626082-9aad4bdb6e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
          name="GMMK Pro x Akko"
          price={50}
        />
        <ProductCard
          imageUrl="https://images.unsplash.com/photo-1634306626082-9aad4bdb6e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
          name="GMMK Pro x Akko"
          price={50}
        />
        <ProductCard
          imageUrl="https://images.unsplash.com/photo-1634306626082-9aad4bdb6e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
          name="GMMK Pro x Akko"
          price={50}
        />
        <ProductCard
          imageUrl="https://images.unsplash.com/photo-1634306626082-9aad4bdb6e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
          name="GMMK Pro x Akko"
          price={50}
        />
        <ProductCard
          imageUrl="https://images.unsplash.com/photo-1634306626082-9aad4bdb6e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
          name="GMMK Pro x Akko"
          price={50}
        />
      </SimpleGrid>
    </Flex>
  );
};

export default ProductSection;
