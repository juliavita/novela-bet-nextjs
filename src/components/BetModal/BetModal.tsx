import {
  Avatar,
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BetItemProps } from "../Bet/Bet";

type BetModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  options: BetItemProps[];
};

export function BetModal({ onClose, isOpen, title, options }: BetModalProps) {
  const [selectedOption, setSelectedOption] = useState<BetItemProps>();

  const handleClose = () => {
    setSelectedOption(undefined);
    onClose();
  };

  return (
    <>
      <Modal onClose={handleClose} isOpen={isOpen} isCentered>
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent
          bg="black"
          minH="400px"
          py="10"
          minW="700px"
          borderColor="white"
          borderWidth={3}
        >
          <ModalHeader color="white" fontSize="4xl">
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack spacing={10} direction="row" w="100%" justify="center">
              {options.map((item, index) => (
                <Box
                  key={item.id}
                  onClick={() => setSelectedOption(item)}
                  borderRadius="md"
                  borderWidth={4}
                  borderColor={
                    selectedOption?.id === item.id ? "green" : "transparent"
                  }
                  p="2"
                  _hover={{
                    cursor: "pointer",
                    transform: "scale(1.1)",
                    transition: "all 0.2s",
                    backgroundColor: "whiteAlpha.200",
                  }}
                >
                  <Text
                    color="white"
                    fontWeight="bold"
                    size="lg"
                    textAlign="center"
                  >
                    {item.titulo}
                  </Text>
                  <Avatar
                    size="xl"
                    my="4"
                    name={item.titulo}
                    src={item.image_url}
                  />
                </Box>
              ))}
            </HStack>
          </ModalBody>
          <ModalFooter
            mt="5"
            alignSelf="center"
            alignContent="center"
            alignItems="center"
          >
            <Button
              colorScheme="orange"
              size="lg"
              onClick={handleClose}
              disabled={!selectedOption}
            >
              CONFIRMAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
