import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import ProductBanner from "./components/product-banner";
import ProductSection from "./components/product-section";

type Props = {};

const ProductContent = (props: Props) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="1rem"
    >
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
