import {
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { updateShippingInfo } from "../../../shared/orderSlice";

type Props = {};
interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  zip: string;
  cardNumber: string;
  exDate: string;
  cvv: string;
}

const ShippingInformation = (props: Props) => {
  const dispatch = useAppDispatch();
  const shippingInfo = useAppSelector(
    (state) => state.order.shippingInformation
  );
  const [formData, setFormData] = useState<FormData>(shippingInfo);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  useEffect(() => {
    dispatch(updateShippingInfo(formData));
  }, [formData]);
  return (
    <VStack
      spacing="1rem"
      alignItems="start"
      width="100%"
      maxW="40rem"
      m="3rem"
    >
      <Heading as="h1" size="md" alignSelf="center" textAlign="center">
        Shipping Information
      </Heading>
      <HStack width="100%">
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
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
          name="zip"
          placeholder="Zip Code"
          value={formData.zip}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Credit Card Number</FormLabel>
        <Input
          as={InputMask}
          mask="9999 9999 9999 9999"
          maskChar=""
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
            name="exDate"
            placeholder="MM/YY"
            value={formData.exDate}
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
