import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

import { accordionSx, demSpecificSx } from "./NodeBlock.styles.ts";
import { DEMNodeConcise } from "../Nodes/Nodes.tsx";

export const DemSpecific = () => {
  const itemCount = 5;

  const items = Array.from({ length: itemCount }, (_, i) => (
    <AccordionItem key={i}>
      <AccordionButton id={`specific-control-${i}`}>
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
      <Accordion sx={accordionSx} allowMultiple>
        {items}
      </Accordion>
    </Box>
  );
};
