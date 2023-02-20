import { Box, Card, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
type Props = {
  name: string;
  imageUrl: string;
};
const ProductCard = ({ name, imageUrl }: Props) => {
  return (
    <Card variant="unstyled" height="21rem" width="21rem">
      <VStack width="100%" height="100%">
        <Box width="100%" height="100%" bgColor="nav.text">
          <Image
            height="100%"
            width="100%"
            objectFit="cover"
            src={imageUrl}
            alt="Dan Abramov"
            transition="ease-out 0.3s"
            _hover={{
              opacity: "50%",
            }}
          />
        </Box>
        <Text fontSize="xl">{name}</Text>
      </VStack>
    </Card>
  );
};

export default ProductCard;
