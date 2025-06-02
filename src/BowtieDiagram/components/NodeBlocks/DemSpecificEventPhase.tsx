import { ChevronDownIcon, Flex, MenuButton } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Menu,
  VStack,
} from "@chakra-ui/react";
import { type RefObject, useRef, useState } from "react";

export const DemSpecificEventPhase = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [buttonPosition, setButtonPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const handleControlNodeClick = (
    rowIndex: number,
    buttonRef: RefObject<HTMLButtonElement | null>,
  ) => {
    if (expandedRow === rowIndex) {
      setExpandedRow(null);
    } else {
      setExpandedRow(rowIndex);
      // Get button position for overlay positioning
      if (buttonRef && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const containerRect = buttonRef.current
          .closest("[data-container]")
          ?.getBoundingClientRect() || { left: 0, top: 0 };
        setButtonPosition({
          top: rect.bottom - containerRect.top,
          left: rect.left - containerRect.left,
          width: rect.width,
        });
      }
    }
  };

  return (
    <Box position="relative" pt={"26px"} w="100%" data-container>
      <VStack spacing={1} w="100%">
        <HStack spacing={1} w="100%">
          <PrevenativeGrid
            expandedRow={expandedRow}
            onControlNodeClick={handleControlNodeClick}
          />
          <MitigativeGrid
            expandedRow={expandedRow}
            onControlNodeClick={handleControlNodeClick}
          />
        </HStack>
      </VStack>

      {expandedRow !== null && (
        <Box
          position="absolute"
          top={`${buttonPosition.top + 5}px`}
          w="100%"
          h="300px"
          border="2px solid"
          borderColor="orange.500"
          borderRadius="6px"
          bg="white"
          p={4}
          boxShadow="lg"
          zIndex={1000}
        >
          <Box fontSize="sm" fontWeight="bold" mb={2}>
            Expanded Control Details - Row {expandedRow + 1}
          </Box>
          <Box fontSize="xs" color="gray.600">
            This box appears when a control node is clicked and hovers below the
            button like a dropdown.
          </Box>
        </Box>
      )}
    </Box>
  );
};

interface PrevenativeGridProps {
  expandedRow: number | null;
  onControlNodeClick: (
    rowIndex: number,
    buttonRef: RefObject<HTMLButtonElement | null>,
  ) => void;
}

const PrevenativeGrid = ({
  expandedRow,
  onControlNodeClick,
}: PrevenativeGridProps) => {
  return (
    <VStack flex={4}>
      <PrevenativeGridHeader />
      <Grid
        w="100%"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={1}
      >
        {/* Row 1 */}
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem w="100%" h="48px">
          <ControlNodeInGrid
            rowIndex={1}
            onControlNodeClick={onControlNodeClick}
            isExpanded={expandedRow === 1}
            controlName={"Travel motion lock out"}
          />
        </GridItem>
        <GridItem colSpan={2} w="100%" h="48px">
          <ControlNodeInGrid
            rowIndex={2}
            onControlNodeClick={onControlNodeClick}
            isExpanded={expandedRow === 2}
            controlName={"Autonomous emergency (aeb)"}
          />
        </GridItem>

        {/* Row 2 */}
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem colSpan={1} w="100%" h="48px">
          <ControlNodeInGrid
            rowIndex={3}
            onControlNodeClick={onControlNodeClick}
            isExpanded={expandedRow === 3}
            controlName={"Travel motion lock out"}
          />
        </GridItem>
        <GridItem colSpan={2} w="100%" h="48px">
          <ControlNodeInGrid
            rowIndex={4}
            onControlNodeClick={onControlNodeClick}
            isExpanded={expandedRow === 4}
            controlName={"Autonomous emergency (aeb)"}
          />
        </GridItem>

        {/* Row 3 */}
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem colSpan={2} w="100%" h="48px">
          <ControlNodeInGrid
            rowIndex={5}
            onControlNodeClick={onControlNodeClick}
            isExpanded={expandedRow === 5}
            controlName={"Two-way radios and usage"}
          />
        </GridItem>
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
      </Grid>
    </VStack>
  );
};

const PrevenativeGridHeader = () => {
  return (
    <Grid
      w="100%"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(4, 1fr)"
      columnGap={1}
    >
      <GridItem
        colSpan={4}
        h="48px"
        bg="gray.200"
        alignContent="center"
        textAlign="center"
        fontWeight="bold"
        fontSize={"sm"}
      >
        Preventative controls
      </GridItem>
      <GridItem w="100%" h="2" bg="#a0aec0" />
      <GridItem w="100%" h="2" bg="#f67b2f" />
      <GridItem w="100%" h="2" bg="#d04d97" />
      <GridItem w="100%" h="2" bg="#9f2995" />
    </Grid>
  );
};

const MitigativeGrid = ({
  expandedRow,
  onControlNodeClick,
}: PrevenativeGridProps) => {
  return (
    <VStack flex={2}>
      <MitigativeGridHeader />
      <Grid
        w="100%"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={1}
      >
        {/* Row 1 */}
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem w="100%" h="48px">
          <ControlNodeInGrid
            rowIndex={6}
            onControlNodeClick={onControlNodeClick}
            isExpanded={expandedRow === 6}
            controlName={"Travel motion lock out"}
          />
        </GridItem>

        {/* Row 2 */}
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />

        {/* Row 3 */}
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem w="100%" h="48px">
          <ControlNodeInGrid
            rowIndex={7}
            onControlNodeClick={onControlNodeClick}
            isExpanded={expandedRow === 7}
            controlName={"Travel motion lock out"}
          />
        </GridItem>
      </Grid>
    </VStack>
  );
};

const MitigativeGridHeader = () => {
  return (
    <Grid
      w="100%"
      flex={2}
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(2, 1fr)"
      columnGap={1}
    >
      <GridItem
        colSpan={2}
        h="48px"
        bg="gray.200"
        alignContent="center"
        textAlign="center"
        fontWeight="bold"
        fontSize={"sm"}
      >
        Mitigative controls
      </GridItem>
      <GridItem w="100%" h="2" bg="#742068" />
      <GridItem w="100%" h="2" bg="#708096" />
    </Grid>
  );
};

interface ControlNodeInGridProps {
  rowIndex: number;
  onControlNodeClick: (
    rowIndex: number,
    buttonRef: RefObject<HTMLButtonElement | null>,
  ) => void;
  isExpanded: boolean;
  controlName: string;
}

const ControlNodeInGrid = ({
  rowIndex,
  onControlNodeClick,
  isExpanded,
  controlName,
}: ControlNodeInGridProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    onControlNodeClick(rowIndex, buttonRef);
  };

  return (
    <Menu>
      <MenuButton
        ref={buttonRef}
        as={Button}
        bg={isExpanded ? "orange.500" : "white"}
        color={isExpanded ? "white" : "black"}
        _hover={{ bg: "orange.400", color: "white" }}
        _active={{ bg: "orange.500", color: "white" }}
        w="100%"
        h="100%"
        fontWeight="normal"
        fontSize="xs"
        textAlign="left"
        boxShadow="base"
        px={3}
        onClick={handleButtonClick}
      >
        <Flex w="100%" align="center" justify="space-between" gap={2}>
          <Box
            as="span"
            flex="1"
            isTruncated
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            minWidth="0"
          >
            {controlName}
          </Box>
          <Box flexShrink={0}>
            <ChevronDownIcon
              transform={isExpanded ? "rotate(180deg)" : "rotate(0deg)"}
              transition="transform 0.2s"
            />
          </Box>
        </Flex>
      </MenuButton>
    </Menu>
  );
};
