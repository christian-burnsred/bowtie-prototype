import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import { BowtieHeader } from "./BowtieComponents/BowtieHeader.tsx";
import { BowtieDiagram } from "./BowtieDiagram.tsx";
import {
  modalBodySx,
  modalFooterSx,
  modalHeadingSx,
  modalSx,
} from "./BowtieModal.styles.ts";

export const BowtieModal = () => {
  const [showEventPhase, setShowEventPhase] = useState(false);
  const [showControlDesignation, setShowControlDesignation] = useState(false);

  const handleShowEventPhaseChange = (checked: boolean) => {
    setShowEventPhase(checked);
    console.log("Show event phase:", checked);
  };

  const handleShowControlDesignationChange = (checked: boolean) => {
    setShowControlDesignation(checked);
    console.log("Show control designation:", checked);
  };

  return (
    <Modal isOpen={true} onClose={() => console.log("close")}>
      <ModalOverlay />

      <ModalContent sx={modalSx}>
        <ModalHeader>
          <Text sx={modalHeadingSx}>Bowtie Diagram</Text>
          <BowtieHeader
            showEventPhase={showEventPhase}
            showControlDesignation={showControlDesignation}
            onShowEventPhaseChange={handleShowEventPhaseChange}
            onShowControlDesignationChange={handleShowControlDesignationChange}
          />
        </ModalHeader>

        <ModalBody sx={modalBodySx}>
          <BowtieDiagram
            showEventPhase={showEventPhase}
            showControlDesignation={showControlDesignation}
          />
        </ModalBody>

        <ModalFooter sx={modalFooterSx}>
          <Button variant="outline">Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
