import { Flex, ListItem, UnorderedList } from "@chakra-ui/icons";
import { Box, Button, GridItem, HStack, Icon } from "@chakra-ui/react";
import { MdOutlineDirectionsCar } from "react-icons/md";

import type { ControlItem, GridRow } from "./DemSpecificEventPhase.tsx";
import { controlExpandedGridBoxSx } from "./NodeBlock.styles.ts";

interface ControlExpandedGridBoxProps {
  row: GridRow;
  expandedControlInRow: ControlItem;
  onClose: any;
}

export const ControlExpandedGridBox = ({
  row,
  expandedControlInRow,
  onClose,
}: ControlExpandedGridBoxProps) => {
  return (
    <>
      <GridItem
        key={`expanded-${row.rowIndex}`}
        sx={controlExpandedGridBoxSx}
        colSpan={6}
      >
        <Flex className="control-expanded-header">
          <Icon as={MdOutlineDirectionsCar} boxSize={8} mr={2} color="black" />
          {expandedControlInRow.controlName}
        </Flex>
        <HStack spacing={6} align="start">
          <Box className="control-expanded-column-container">
            <span className="control-expanded-subheader">Purpose</span>
            <span className="control-expanded-text">
              To prevent vehicle moving forward or backwards when personnel are
              on the ground next to or within the footprint of a vehicle.
            </span>

            <span className="control-expanded-subheader">
              Control designation
            </span>
            <span className="control-expanded-text">Assisted Interrupt</span>

            <span className="control-expanded-subheader">Control type</span>
            <span
              className="control-expanded-text"
              style={{ textDecoration: "underline dotted" }}
            >
              Vehicle To Person
            </span>

            <span className="control-expanded-subheader">Scope - Included</span>
            <span className="control-expanded-text">
              Where persons need to be on ground in the vicinity of a running,
              but stationary vehicle.
            </span>
          </Box>
          <Box className="control-expanded-column-container">
            <span className="control-expanded-subheader">
              Implementation requirements
            </span>
            <span className="control-expanded-text">
              Implement as part of lifecycle replacement and where available
              from Original Equipment Manufacturer. Alternatively retrofit
              options exist for some vehicle types or Original Equipment
              Manufacturers as part of ground level isolation control station.
            </span>

            <span className="control-expanded-subheader">Support factors</span>
            <UnorderedList className="control-expanded-text">
              <ListItem>Maintenance system</ListItem>
              <ListItem>Training</ListItem>
              <ListItem>Equipment compliance system</ListItem>
            </UnorderedList>
          </Box>
        </HStack>
        <Flex mt={4} justify="flex-end" align="center" gap={2}>
          <Button variant="outline" size="sm" onClick={onClose}>
            Close
          </Button>
          <Button size="sm" colorScheme="orange">
            Go to control
          </Button>
        </Flex>
      </GridItem>
    </>
  );
};
