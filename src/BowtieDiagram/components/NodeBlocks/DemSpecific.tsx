import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useXarrow } from "react-xarrows";

import { ControlContent } from "./ControlExpandedGridBox.tsx";
import { DemSpecificEventPhase } from "./DemSpecificEventPhase.tsx";
import { accordionSx, demSpecificSx } from "./NodeBlock.styles.ts";
import { DEMNodeConcise } from "../Nodes/Nodes.tsx";

interface DemSpecificProps {
  showEventPhase: boolean;
  showControlDesignation: boolean;
  selectedSupportFactor: string | null;
}

export const DemSpecific = ({
  showEventPhase,
  showControlDesignation,
  selectedSupportFactor,
}: DemSpecificProps) => {
  const accordionRef = useRef(null);
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const updateXarrow = useXarrow();

  useEffect(() => {
    if (!accordionRef.current) return;

    const observer = new MutationObserver(() => {
      updateXarrow();
    });

    observer.observe(accordionRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => observer.disconnect();
  }, [updateXarrow]);

  const designationColours = ["#008981", "#00ab8a", "#2da2d7", "#234483"];
  const controls = [
    "Travel motion lockout",
    "Autonomous emergency braking (aeb) with pedestrian detection (front)",
    "Emergency response route alert",
    "Travel motion lockout",
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
    <Box id={"dem-specific"} sx={demSpecificSx}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <DEMNodeConcise />
      </Box>

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
            // Chakra passes a single number or an array depending on allowMultiple
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
