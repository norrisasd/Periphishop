import { Divider, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductBanner from "./components/product-banner";
import ProductSection from "./components/product-section";

type Props = {};

const ProductContent = (props: Props) => {
  type Product = {
    name: String;
    quantity: Number;
    price: Number;
    type: String;
  };
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
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="1rem"
    >
      {product
        ? product.map((prod) => {
            return <></>; //<Text>{prod.name}</Text>;
          })
        : null}
      <ProductBanner />
      <ProductSection title="Mouse" />
      <Divider maxW="100rem" mt="5rem" />
      <ProductSection title="Keyboard" />
      <Divider maxW="100rem" mt="5rem" />
      {/* <ProductSection title="BUNDLES" /> */}
    </Flex>
  );
};

export default ProductContent;
