import React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import ReviewCard from "./review-card";

const ReviewSection = (props: any) => {
  return (
    <Flex px="2rem" justifyContent="center" mt="1rem" justifyItems="center">
      <HStack spacing="1rem">
        <ReviewCard
          fullname="Toa Hefbita"
          imageUrl="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        >
          Fast shipping and top-quality products, this peripheral ecommerce shop
          is a dream come true for gamers.
        </ReviewCard>
        <ReviewCard
          fullname="Ivana Cajina"
          imageUrl="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        >
          "Happy with the customer service and selection of products at this
          fantastic peripheral ecommerce shop."
        </ReviewCard>
        <ReviewCard
          fullname="Gian Cescon"
          imageUrl="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        >
          "This ecommerce shop has got you covered with a vast selection of
          high-quality products."
        </ReviewCard>
        <ReviewCard
          fullname="Vince Fleming"
          imageUrl="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        >
          "With their user-friendly website and excellent product descriptions,
          shopping for peripherals has never been easier."
        </ReviewCard>
        <ReviewCard
          fullname="Stephanie Liverani"
          imageUrl="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        >
          "This peripheral ecommerce shop is my go-to for all my gaming needs."
        </ReviewCard>
      </HStack>
    </Flex>
  );
};

export default ReviewSection;
