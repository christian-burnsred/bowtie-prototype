import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { ControlContent } from "./ControlExpandedGridBox.tsx";
import { DemSpecificEventPhase } from "./DemSpecificEventPhase.tsx";
import { accordionSx, demSpecificSx } from "./NodeBlock.styles.ts";

interface DemSpecificProps {
  showEventPhase: boolean;
  showControlDesignation: boolean;
  selectedSupportFactor: string | null;
  showOverlay: boolean;
  setTargetHeight: (arg0: number) => void;
}

export const DemSpecific = ({
  showEventPhase,
  showControlDesignation,
  selectedSupportFactor,
  showOverlay,
  setTargetHeight,
}: DemSpecificProps) => {
  const accordionRef = useRef(null);
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const designationColours = ["#008981", "#00ab8a", "#2da2d7", "#234483"];
  const controls = [
    "Travel motion lockout",
    "Autonomous emergency braking (aeb) with pedestrian detection (front)",
    "Emergency response route alert",
    "Autonomous emergency braking (aeb) with pedestrian detection (front)",
    "Two-way radios and usage",
    "Pedestrian proximity detection system (pds) alert",
    "Reversing cameras",
    "Vehicle articulation lock",
    "Operator distraction and alertness system",
    "Pedestrian separation by distance (10m)",
    "Moving off information system (mois)",
    "On-vehicle mirrors",
  ];

  const items = controls.map((control, i) => {
    const isSelected =
      selectedSupportFactor && selectedSupportFactor.length % (i + 1) === 3;

    const onClose = () => {
      setExpandedIndices((prev: number[]) =>
        prev.filter((index) => index !== i),
      );
    };

    return (
      <AccordionItem key={i} id={`specific-control-${i}`}>
        <AccordionButton
          color={showControlDesignation || isSelected ? "white" : "black"}
          bg={
            isSelected
              ? "orange.500"
              : showControlDesignation
                ? designationColours[i % 4]
                : "gray.100"
          }
        >
          <Box as="span" flex="1" textAlign="left">
            {control}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Box w="100%">
            <ControlContent controlName={control} onClose={onClose} />
          </Box>
        </AccordionPanel>
      </AccordionItem>
    );
  });

  return (
    <Box
      id={"dem-specific"}
      sx={{
        ...demSpecificSx,
        transition: "all 0.5s ease-in-out",
        transitionDelay: showOverlay && showEventPhase ? "0.3s" : "0s",
        opacity: showOverlay ? 1 : 0,
        visibility: showOverlay ? "visible" : "hidden",
      }}
      ref={(el) => {
        if (el && showOverlay) {
          setTargetHeight(el.offsetHeight);
          el.parentElement!.style.minHeight = el.offsetHeight + "px";
        } else if (el) {
          setTargetHeight(el.offsetHeight);
          el.parentElement!.style.minHeight = "";
        }
      }}
    >
      {showEventPhase ? (
        <DemSpecificEventPhase
          showControlDesignation={showControlDesignation}
          selectedSupportFactor={selectedSupportFactor}
        />
      ) : (
        <Accordion
          ref={accordionRef}
          sx={accordionSx}
          allowMultiple
          index={expandedIndices}
          onChange={(indices) => {
            const normalized = Array.isArray(indices) ? indices : [indices];
            setExpandedIndices(normalized);
          }}
        >
          {items}
        </Accordion>
      )}
      <HStack display="flex" justifyContent="space-between">
        <Box id={"dem-specific-left"} w={"120px"}></Box>
        <Box id={"dem-specific-right"} w={"120px"}></Box>
      </HStack>
    </Box>
  );
};
