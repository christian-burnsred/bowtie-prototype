import { ChevronDownIcon, Flex } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";

export const DemSpecificEventPhase = () => {
  return (
    <HStack pt={"26px"} spacing={1}>
      <PrevenativeGrid />
      <MitigativeGrid />
    </HStack>
  );
};

const PrevenativeGrid = () => {
  return (
    <VStack flex={4}>
      <PrevenativeGridHeader />
      <Grid
        w="100%"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={1}
      >
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem colSpan={2} w="100%" h="48px">
          <ControlNodeInGrid />
        </GridItem>
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />

        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />

        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
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

const MitigativeGrid = () => {
  return (
    <VStack flex={2}>
      <MitigativeGridHeader />
      <Grid
        w="100%"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={1}
      >
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />

        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />

        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
        <GridItem borderRadius="6px" w="100%" h="48px" bg="gray.100" />
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

const ControlNodeInGrid = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        bg="white"
        _expanded={{ bg: "orange.500", color: "white" }}
        w="100%"
        h="100%"
        fontWeight="normal"
        textAlign="left"
        boxShadow="base"
        px={3}
      >
        <Flex w="100%" align="center" justify="space-between" gap={2}>
          <Box
            as="span"
            isTruncated
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            Action with a long name
          </Box>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};
