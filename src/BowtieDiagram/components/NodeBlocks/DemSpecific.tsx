import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useXarrow } from "react-xarrows";

import { accordionSx, demSpecificSx } from "./NodeBlock.styles.ts";
import { DEMNodeConcise } from "../Nodes/Nodes.tsx";

export const DemSpecific = () => {
  const itemCount = 5;
  const accordionRef = useRef(null);

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

  const items = Array.from({ length: itemCount }, (_, i) => (
    <AccordionItem key={i} id={`specific-control-${i}`}>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          Accordion Item #{i + 1}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>Content for item #{i + 1}</AccordionPanel>
    </AccordionItem>
  ));

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
      <Accordion ref={accordionRef} sx={accordionSx} allowMultiple>
        {items}
      </Accordion>
      <HStack display="flex" justifyContent="space-between">
        <Box id={"dem-specific-left"} w={"120px"}></Box>
        <Box id={"dem-specific-right"} w={"120px"}></Box>
      </HStack>
    </Box>
  );
};
