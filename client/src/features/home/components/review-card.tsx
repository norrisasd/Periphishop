import { Card, CardBody, Text, Image, Flex, HStack } from "@chakra-ui/react";
import React from "react";

type Props = {
  fullname: string;
  imageUrl: string;
  children: React.ReactNode;
};
const ReviewCard = ({ fullname, imageUrl, children }: Props) => {
  return (
    <Card
      variant="elevated"
      height="14rem"
      width="100%"
      maxH="15rem"
      fontSize="1rem"
    >
      <CardBody display="flex" justifyContent="center">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>{children}</Text>
          <HStack justifyContent="center">
            <Image
              borderRadius="full"
              boxSize="3rem"
              src={imageUrl}
              alt={fullname}
              fit="cover"
            />
            <Text>{fullname}</Text>
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ReviewCard;
