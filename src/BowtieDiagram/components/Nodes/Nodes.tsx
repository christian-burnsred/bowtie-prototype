import {
  Box,
  Grid,
  GridItem,
  Icon,
  ListItem,
  Select,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { MdOutlineDirectionsCar } from "react-icons/md";

import {
  DEMNodeConciseSx,
  DEMNodeSx,
  ImpactNodeSx,
  SupportFactorNodeSx,
  controlNodeSx,
  scenarioNodeSx,
} from "./Nodes.styles.ts";

interface ScenarioNodeProps {
  id: string;
  content: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const ScenarioNode = ({
  id,
  content,
  isSelected,
  onSelect,
}: ScenarioNodeProps) => {
  return (
    <Box
      id={id}
      onClick={() => onSelect(id)}
      sx={{
        ...scenarioNodeSx,
        bg: isSelected ? "orange.500" : "white",
        color: isSelected ? "white" : "black",
      }}
    >
      <Text>{content}</Text>
    </Box>
  );
};

interface ControlNodeProps {
  id: string;
  title: string;
  controlCount: number;
  showEventPhase?: boolean;
  timeZoneType: "preventative" | "mitigative";
}

export const ControlNode = ({
  id,
  title,
  controlCount,
  showEventPhase = false,
  timeZoneType,
}: ControlNodeProps) => {
  return (
    <Box id={id} sx={controlNodeSx}>
      <Text className="control-title">{title}</Text>
      {showEventPhase ? (
        timeZoneType == "preventative" ? (
          <PreventitiveTimezone />
        ) : (
          <MitigativeTimezone />
        )
      ) : (
        ""
      )}
      <Box className="control-number-container">
        <Text className="control-number">{controlCount} controls</Text>
      </Box>
    </Box>
  );
};

const PreventitiveTimezone = () => {
  return (
    <Grid w={"100%"} templateColumns="repeat(4, 1fr)" gap={0}>
      <GridItem w="100%" h="2" bg="#a0aec0" />
      <GridItem w="100%" h="2" bg="#f67b2f" />
      <GridItem w="100%" h="2" bg="#d04d97" />
      <GridItem w="100%" h="2" bg="#9f2995" />
    </Grid>
  );
};

const MitigativeTimezone = () => {
  return (
    <Grid w={"100%"} templateColumns="repeat(2, 1fr)" gap={0}>
      <GridItem w="100%" h="2" bg="#742068" />
      <GridItem w="100%" h="2" bg="#708096" />
    </Grid>
  );
};

interface DEMNodeProps {
  id: string;
  DEMs: string[];
  controlCount: number;
}

export const DEMNode = ({ id, DEMs, controlCount }: DEMNodeProps) => {
  return (
    <Box id={id} sx={DEMNodeSx}>
      <Icon
        className="DEM-node-icon"
        as={MdOutlineDirectionsCar}
        boxSize="50px"
      />
      <Box className="DEM-content-wrapper">
        <Text className="DEM-title-text">DEM</Text>
        <Select className="DEM-selector" size="xs">
          {DEMs.map((dem, index) => (
            <option key={index} value={dem}>
              {dem}
            </option>
          ))}
        </Select>
        <Text className="DEM-control-text">
          {controlCount} controls are used to prevent and mitigate
        </Text>
      </Box>
    </Box>
  );
};

export const DEMNodeConcise = () => {
  return (
    <Box sx={DEMNodeConciseSx}>
      <Box className="DEM-content-wrapper">
        <Text className="DEM-title-text">DEM</Text>
        <Text className="DEM-text">Vehicle to Person</Text>
      </Box>
    </Box>
  );
};

interface ImpactNodeProps {
  id: string;
}

export const ImpactNode = ({ id }: ImpactNodeProps) => {
  return (
    <Box id={id} sx={ImpactNodeSx}>
      <Text className="impact-heading">Impact</Text>
      <Text className="impact-text">1 or more fatalities</Text>
    </Box>
  );
};

interface SupportFactorNodeProps {
  id: string;
  selectedScenario: string | null;
  selectedSupportFactor: string | null;
  onSelectSupportFactor: (value: string) => void;
}

const supportFactors = [
  "Maintenance system",
  "Training",
  "Equipment compliance system",
  "Operation monitoring process",
  "Emergency response plan",
  "Fatigue management plan",
  "Communication system",
  "Operating procedure - vehicles near open edges",
  "Training - edge detection",
  "Training - heavy vehicle visibility",
  "Health screening",
  "Traffic management plan",
];

export const SupportFactorNode = ({
  id,
  selectedScenario,
  selectedSupportFactor,
  onSelectSupportFactor,
}: SupportFactorNodeProps) => {
  return (
    <Box id={id} sx={SupportFactorNodeSx}>
      <Text className="support-factor-heading">
        Support factors {selectedScenario && "(12)"}
      </Text>

      {selectedScenario && (
        <>
          <Text color={"gray.500"}>
            Select a support factor to see the linked controls highlight
          </Text>
          <SimpleGrid
            className="support-factor-list-items"
            spacing={4}
            columns={2}
          >
            {Array.from({ length: 2 }, (_, col) => (
              <UnorderedList key={col}>
                {supportFactors
                  .filter((_, i) => i % 2 === col)
                  .map((factor) => (
                    <SelectableListItem
                      key={factor}
                      text={factor}
                      isSelected={selectedSupportFactor === factor}
                      onSelect={() => onSelectSupportFactor(factor)}
                    />
                  ))}
              </UnorderedList>
            ))}
          </SimpleGrid>
        </>
      )}
    </Box>
  );
};

interface SelectableListItemProps {
  text: string;
  isSelected: boolean;
  onSelect: () => void;
}

const SelectableListItem = ({
  text,
  isSelected,
  onSelect,
}: SelectableListItemProps) => (
  <ListItem
    onClick={onSelect}
    cursor="pointer"
    px={2}
    py={1}
    borderRadius="md"
    color={isSelected ? "orange.500" : "black"}
    _hover={{
      color: "orange.300",
    }}
  >
    {text}
  </ListItem>
);
