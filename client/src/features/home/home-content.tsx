import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import LandingImage from "./components/landing-image";
import ProductSection from "./components/product-section";
import ReviewSection from "./components/review-section";

const HomeContent = (props: any) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <LandingImage />
      <ReviewSection />
      <Divider mt="5rem" mb="5rem" maxW="100rem" />
      <ProductSection />
    </Flex>
  );
};

export default HomeContent;
