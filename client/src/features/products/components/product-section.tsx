import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "../../home/components/product-card";
import "@fontsource/harmattan";
import axios from "axios";
type Product = {
  name: string;
  quantity: Number;
  price: number;
  imgUrl: string;
  type: string;
};

type Props = {
  title: string;
};

const ProductSection = ({ title }: Props) => {
  const [product, setProduct] = useState<Product[] | null>();
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const { data } = await axios.get("/product");
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };
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
        {title.toUpperCase()}
      </Text>
      <SimpleGrid columns={4} gap="5rem" m="auto">
        {product ? (
          product
            .filter((prod) => prod.type === title)
            .map((prod) => {
              return (
                <ProductCard
                  imageUrl={prod.imgUrl}
                  name={prod.name}
                  price={prod.price}
                />
              );
            })
        ) : (
          <Text color="primary">NO PRODUCTS AVAILABLE</Text>
        )}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductSection;
