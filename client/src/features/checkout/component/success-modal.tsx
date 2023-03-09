import {
  Link,
  Modal,
  ModalContent,
  ModalFooter,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  overlay: JSX.Element;
};

const SuccessModal = ({ onClose, isOpen, overlay }: Props) => {
  return (
    <Modal
      isCentered
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      {overlay}
      <ModalContent>
        <VStack alignItems="center">
          <Text letterSpacing="0.2rem" fontSize="3xl">
            SUCCESS
          </Text>
          <CheckIcon fontSize="10rem" color="green.400" />
        </VStack>
        <ModalFooter>
          <Link href="/">Back to Home Page</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
