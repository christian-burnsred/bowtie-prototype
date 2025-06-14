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
import { useState } from "react";
import { MdOutlineDirectionsCar } from "react-icons/md";

import {
  DEMNodeConciseSx,
  DEMNodeDetailedSx,
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
  isMorphed: boolean;
  showOverlay: boolean;
  setShowOverlay: (value: boolean) => void;
  targetHeight: number;
  width: string;
}

export const ControlNode = ({
  id,
  title,
  controlCount,
  showEventPhase = false,
  timeZoneType,
  isMorphed,
  showOverlay,
  setShowOverlay,
  targetHeight,
  width,
}: ControlNodeProps) => {
  return (
    <Box
      id={id}
      sx={{
        ...controlNodeSx,
        transition: showOverlay ? "none" : "all 0.3s ease-in-out",
        height: isMorphed ? `${targetHeight}px` : "238px",
        width: isMorphed ? (showEventPhase ? width : "100%") : "20%",
      }}
      onTransitionEnd={() => {
        if (isMorphed) setShowOverlay(true);
      }}
    >
      <Text
        className="control-title"
        sx={{
          transition: "all 0.3s ease-in-out",
          mt: isMorphed && showEventPhase ? "26px" : "0px",
          h: "48px",
          bg: isMorphed && showEventPhase ? "gray.200" : "",
        }}
        opacity={isMorphed && !showEventPhase ? 0 : 1}
      >
        {title}
      </Text>
      {showEventPhase ? (
        timeZoneType == "preventative" ? (
          <PreventitiveTimezone isMorphed={isMorphed} />
        ) : (
          <MitigativeTimezone isMorphed={isMorphed} />
        )
      ) : (
        ""
      )}
      <Box className="control-number-container">
        <Text
          transition="opacity 0.5s"
          opacity={isMorphed ? 0 : 1}
          className="control-number"
        >
          {controlCount} controls
        </Text>
      </Box>
    </Box>
  );
};

interface TimeZoneProps {
  isMorphed: boolean;
}
const PreventitiveTimezone = ({ isMorphed }: TimeZoneProps) => {
  return (
    <Grid w={"100%"} templateColumns="repeat(4, 1fr)" gap={isMorphed ? 1 : 0}>
      <GridItem w="100%" h="2" bg="#a0aec0" />
      <GridItem w="100%" h="2" bg="#f67b2f" />
      <GridItem w="100%" h="2" bg="#d04d97" />
      <GridItem w="100%" h="2" bg="#9f2995" />
    </Grid>
  );
};

const MitigativeTimezone = ({ isMorphed }: TimeZoneProps) => {
  return (
    <Grid w={"100%"} templateColumns="repeat(2, 1fr)" gap={isMorphed ? 1 : 0}>
      <GridItem w="100%" h="2" bg="#742068" />
      <GridItem w="100%" h="2" bg="#708096" />
    </Grid>
  );
};

interface DEMNodeProps {
  id: string;
  DEMs: string[];
  controlCount: number;
  showEventPhase: boolean;
  isMorphed: boolean;
  setShowOverlay: (value: boolean) => void;
}

export const DEMNode = ({
  id,
  DEMs,
  controlCount,
  showEventPhase,
  isMorphed,
  setShowOverlay,
}: DEMNodeProps) => {
  const [selectedDEM, setSelectedDEM] = useState(DEMs[0] || "");

  return (
    <Box
      id={id}
      sx={{
        ...DEMNodeSx,
        width: isMorphed ? "100px" : "238px",
        height: isMorphed ? "100px" : "238px",
        top: isMorphed ? "0" : "119px",
        left: isMorphed && showEventPhase ? "66.6667%" : "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        transitionProperty: "all",
        transitionDuration: "0.3s",
      }}
      onTransitionEnd={() => {
        if (isMorphed) setShowOverlay(true);
      }}
    >
      {isMorphed ? (
        <DEMNodeConcise selectedDEM={selectedDEM} />
      ) : (
        <DEMNodeDetailed
          DEMs={DEMs}
          controlCount={controlCount}
          onDEMChange={setSelectedDEM}
          selectedDEM={selectedDEM}
        />
      )}
    </Box>
  );
};

interface DEMNodeConciseProps {
  selectedDEM: string;
}

const DEMNodeConcise = ({ selectedDEM }: DEMNodeConciseProps) => {
  return (
    <Box sx={DEMNodeConciseSx}>
      <Box className="DEM-content-wrapper">
        <Text className="DEM-title-text">DEM</Text>
        <Text className="DEM-text">{selectedDEM}</Text>
      </Box>
    </Box>
  );
};

interface DEMNodeDetailedProps {
  DEMs: string[];
  controlCount: number;
  selectedDEM: string;
  onDEMChange: (value: string) => void;
}

const DEMNodeDetailed = ({
  DEMs,
  controlCount,
  selectedDEM,
  onDEMChange,
}: DEMNodeDetailedProps) => {
  return (
    <Box sx={DEMNodeDetailedSx}>
      <Icon
        className="DEM-node-icon"
        as={MdOutlineDirectionsCar}
        boxSize="50px"
      />
      <Box className="DEM-content-wrapper">
        <Text className="DEM-title-text">DEM</Text>
        <Select
          className="DEM-selector"
          size="xs"
          value={selectedDEM}
          onChange={(e) => onDEMChange(e.target.value)}
        >
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
