import {
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InputMask from "react-input-mask";

type Props = {};
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  zipCode: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
}

const ShippingInformation = (props: Props) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <VStack spacing="1rem" alignItems="start" maxW="40rem" m="3rem">
      <Heading as="h1" size="md" alignSelf="center" textAlign="center">
        Shipping Information
      </Heading>
      <HStack width="100%">
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormControl>
      </HStack>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Zip Code</FormLabel>
        <Input
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Credit Card Number</FormLabel>
        <Input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
        />
      </FormControl>
      <HStack width="100%">
        <FormControl isRequired>
          <FormLabel>Expiration Date</FormLabel>
          <Input
            as={InputMask}
            mask="99/99"
            maskChar=""
            type="text"
            name="expiration"
            placeholder="MM/YY"
            value={formData.expiration}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Security Code</FormLabel>
          <Input
            type="text"
            name="cvv"
            placeholder="123"
            value={formData.cvv}
            onChange={handleChange}
          />
        </FormControl>
      </HStack>
    </VStack>
  );
};

export default ShippingInformation;
