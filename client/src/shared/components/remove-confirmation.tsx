import {
  Button,
  ButtonGroup,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  remove: any;
  onClose: () => void;
};

const RemoveConfirmation = ({ remove, onClose }: Props) => {
  return (
    <PopoverContent>
      <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
      <PopoverArrow />
      <PopoverCloseButton onClick={onClose} />
      <PopoverBody>Are you sure you want to remove this item?</PopoverBody>
      <PopoverFooter display="flex" justifyContent="flex-end">
        <ButtonGroup size="sm">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={remove} colorScheme="red">
            Yes
          </Button>
        </ButtonGroup>
      </PopoverFooter>
    </PopoverContent>
  );
};

export default RemoveConfirmation;
