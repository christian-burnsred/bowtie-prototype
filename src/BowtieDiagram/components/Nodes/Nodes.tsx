import { Box, Grid, GridItem, Icon, Select, Text } from "@chakra-ui/react";
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
}

export const SupportFactorNode = ({ id }: SupportFactorNodeProps) => {
  return (
    <Box id={id} sx={SupportFactorNodeSx}>
      <Text className="support-factor-heading">Support factors</Text>
    </Box>
  );
};
