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
import { type JSX, useEffect, useRef, useState } from "react";
import { useXarrow } from "react-xarrows";

import { ControlExpandedGridBox } from "./ControlExpandedGridBox.tsx";

interface DemSpecificEventPhaseProps {
  showControlDesignation: boolean;
}

export const DemSpecificEventPhase = ({
  showControlDesignation,
}: DemSpecificEventPhaseProps) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const updateXarrow = useXarrow();

  const handleControlNodeClick = (rowIndex: number) => {
    if (expandedRow === rowIndex) {
      setExpandedRow(null);
    } else {
      setExpandedRow(rowIndex);
    }
  };

  // MutationObserver to update Xarrow when grid changes
  useEffect(() => {
    if (!gridContainerRef.current) return;

    const observer = new MutationObserver(() => {
      // Use requestAnimationFrame to avoid infinite loops
      requestAnimationFrame(() => {
        updateXarrow();
      });
    });

    observer.observe(gridContainerRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM has updated
    requestAnimationFrame(() => {
      updateXarrow();
    });
  }, [expandedRow]);

  return (
    <Box
      position="relative"
      pt={"26px"}
      w="100%"
      data-container
      ref={gridContainerRef}
    >
      <VStack spacing={1} w="100%">
        <HStack spacing={1} w="100%" align="start">
          <ScenarioGrid
            expandedRow={expandedRow}
            onControlNodeClick={handleControlNodeClick}
            showControlDesignation={showControlDesignation}
          />
        </HStack>
      </VStack>
    </Box>
  );
};

interface GridProps {
  expandedRow: number | null;
  onControlNodeClick: (rowIndex: number) => void;
  showControlDesignation: boolean;
}

type EmptyItem = { type: "empty" };
export type ControlItem = {
  type: "control";
  rowIndex: number;
  colSpan: number;
  controlName: string;
};

export type GridRow = { rowIndex: number; items: GridItemType[] };

type GridItemType = EmptyItem | ControlItem;

const ScenarioGrid = ({
  expandedRow,
  onControlNodeClick,
  showControlDesignation,
}: GridProps) => {
  // Define the grid structure with row information
  const gridRows: GridRow[] = [
    {
      rowIndex: 1,
      items: [
        { type: "empty" },
        {
          type: "control",
          rowIndex: 1,
          colSpan: 1,
          controlName: "Travel motion lockout",
        },
        {
          type: "control",
          rowIndex: 2,
          colSpan: 2,
          controlName:
            "Autonomous emergency braking (aeb) with pedestrian detection (front)",
        },
        { type: "empty" },
        {
          type: "control",
          rowIndex: 14,
          colSpan: 1,
          controlName: "Emergency response route alert",
        },
      ],
    },
    {
      rowIndex: 2,
      items: [
        { type: "empty" },
        {
          type: "control",
          rowIndex: 3,
          colSpan: 1,
          controlName: "Travel motion lockout",
        },
        {
          type: "control",
          rowIndex: 4,
          colSpan: 2,
          controlName:
            "Autonomous emergency braking (aeb) with pedestrian detection (front)",
        },
        { type: "empty" },
        { type: "empty" },
      ],
    },
    {
      rowIndex: 3,
      items: [
        { type: "empty" },
        {
          type: "control",
          rowIndex: 5,
          colSpan: 2,
          controlName: "Two-way radios and usage",
        },
        { type: "empty" },
        { type: "empty" },
        {
          type: "control",
          rowIndex: 15,
          colSpan: 1,
          controlName: "Two ways radio and usage",
        },
      ],
    },
    {
      rowIndex: 4,
      items: [
        { type: "empty" },
        {
          type: "control",
          rowIndex: 6,
          colSpan: 2,
          controlName: "Pedestrian proximity detection system (pds) alert",
        },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
      ],
    },
    {
      rowIndex: 5,
      items: [
        { type: "empty" },
        {
          type: "control",
          rowIndex: 7,
          colSpan: 2,
          controlName: "Reversing cameras",
        },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
      ],
    },
    {
      rowIndex: 6,
      items: [
        { type: "empty" },
        {
          type: "control",
          rowIndex: 8,
          colSpan: 1,
          controlName: "Reversing cameras",
        },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
      ],
    },
    {
      rowIndex: 7,
      items: [
        { type: "empty" },
        {
          type: "control",
          rowIndex: 9,
          colSpan: 1,
          controlName: "Vehicle articulation lock",
        },
        {
          type: "control",
          rowIndex: 10,
          colSpan: 1,
          controlName: "Operator distraction and alertness system",
        },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
      ],
    },
    {
      rowIndex: 8,
      items: [
        { type: "empty" },
        {
          type: "control",
          rowIndex: 11,
          colSpan: 1,
          controlName: "Pedestrian separation by distance (10m)",
        },
        {
          type: "control",
          rowIndex: 12,
          colSpan: 1,
          controlName: "Moving off information system (mois)",
        },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
      ],
    },
    {
      rowIndex: 9,
      items: [
        { type: "empty" },
        {
          type: "control",
          rowIndex: 13,
          colSpan: 2,
          controlName: "On-vehicle mirrors",
        },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
      ],
    },
    {
      rowIndex: 10,
      items: [
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
      ],
    },
    {
      rowIndex: 11,
      items: [
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
        { type: "empty" },
      ],
    },
  ];

  const renderGridItems = () => {
    const items: JSX.Element[] = [];

    gridRows.forEach((row) => {
      // Render regular row items
      row.items.forEach((item, itemIndex) => {
        if (item.type === "empty") {
          items.push(
            <GridItem
              key={`${row.rowIndex}-${itemIndex}`}
              borderRadius="6px"
              w="100%"
              h="48px"
              bg="gray.100"
            />,
          );
        } else if (item.type === "control") {
          items.push(
            <GridItem
              key={`${row.rowIndex}-${itemIndex}`}
              colSpan={item.colSpan}
              w="100%"
              h="48px"
            >
              <ControlNodeInGrid
                showControlDesignation={showControlDesignation}
                rowIndex={item.rowIndex}
                onControlNodeClick={onControlNodeClick}
                isExpanded={expandedRow === item.rowIndex}
                controlName={item.controlName}
              />
            </GridItem>,
          );
        }
      });

      // Check if any control in this row is expanded
      const expandedControlInRow = row.items.find(
        (item): item is ControlItem =>
          item.type === "control" && expandedRow === item.rowIndex,
      );

      if (expandedControlInRow) {
        items.push(
          <ControlExpandedGridBox
            row={row}
            expandedControlInRow={expandedControlInRow}
            onClose={onControlNodeClick}
          />,
        );
      }
    });

    return items;
  };

  return (
    <VStack flex={4}>
      <GridHeader />
      <Grid w="100%" templateColumns="repeat(6, minmax(0, 1fr))" gap={1}>
        {renderGridItems()}
      </Grid>
    </VStack>
  );
};

const GridHeader = () => {
  return (
    <Grid
      w="100%"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(6, 1fr)"
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
      <GridItem w="100%" h="2" bg="#a0aec0" />
      <GridItem w="100%" h="2" bg="#f67b2f" />
      <GridItem w="100%" h="2" bg="#d04d97" />
      <GridItem w="100%" h="2" bg="#9f2995" />
      <GridItem w="100%" h="2" bg="#742068" />
      <GridItem w="100%" h="2" bg="#708096" />
    </Grid>
  );
};

interface ControlNodeInGridProps {
  rowIndex: number;
  onControlNodeClick: (rowIndex: number) => void;
  isExpanded: boolean;
  controlName: string;
  showControlDesignation: boolean;
}

const ControlNodeInGrid = ({
  rowIndex,
  onControlNodeClick,
  isExpanded,
  controlName,
  showControlDesignation,
}: ControlNodeInGridProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    onControlNodeClick(rowIndex);
  };

  const designationColours = ["#008981", "#00ab8a", "#2da2d7", "#234483"];

  return (
    <Menu>
      <MenuButton
        ref={buttonRef}
        as={Button}
        bg={
          isExpanded
            ? "orange.500"
            : showControlDesignation
              ? designationColours[rowIndex % 4]
              : "white"
        }
        color={
          isExpanded ? "white" : showControlDesignation ? "white" : "black"
        }
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
