import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
} from "@chakra-ui/react";

import { BowtieDiagram } from "./BowtieDiagram.tsx";
import {
  modalBodySx,
  modalFooterSx,
  modalHeadingSx,
  modalSx,
  switchSx,
} from "./BowtieModal.styles.ts";

export const BowtieModal = () => {
  return (
    <Modal isOpen={true} onClose={() => console.log("close")}>
      <ModalOverlay />

      <ModalContent sx={modalSx}>
        <ModalHeader>
          <Text sx={modalHeadingSx}>Bowtie Diagram</Text>
          <FormControl sx={switchSx}>
            <FormLabel>Show event phase</FormLabel>
            <Switch colorScheme={"green"} size={"lg"} id="show-event-phase" />
            <FormLabel>Show control designation</FormLabel>
            <Switch
              colorScheme={"green"}
              size={"lg"}
              id="show-control-designation"
            />
          </FormControl>
        </ModalHeader>

        <ModalBody sx={modalBodySx}>
          <BowtieDiagram />
        </ModalBody>

        <ModalFooter sx={modalFooterSx}>
          <Button variant="outline">Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
