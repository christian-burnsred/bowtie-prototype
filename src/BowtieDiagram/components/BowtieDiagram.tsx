import { Box, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Xwrapper } from "react-xarrows";

import { DemOverview } from "./NodeBlocks/DemOverview.tsx";
import { DemSpecific } from "./NodeBlocks/DemSpecific.tsx";
import { AllScenariosEdges, SpecificScenariosEdges } from "./Nodes/Edges.tsx";
import { ImpactNode, ScenarioNode, SupportFactorNode } from "./Nodes/Nodes.tsx";

interface BowtieDiagramProps {
  showEventPhase: boolean;
  showControlDesignation: boolean;
}

export const BowtieDiagram = ({
  showEventPhase,
  showControlDesignation,
}: BowtieDiagramProps) => {
  const scenarioIds = Array.from({ length: 6 }, (_, i) => `scenario-${i}`);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(
    null,
  );

  // TODO - introduce logic
  console.log(showEventPhase);
  console.log(showControlDesignation);

  const handleSelect = (id: string) => {
    setSelectedScenarioId((prev) => (prev === id ? null : id));
  };

  return (
    <Xwrapper>
      <VStack spacing={0} h={"100%"} w={"100%"}>
        <Box display={"flex"} h={"100%"} w={"100%"}>
          {/* Scenarios */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            pr="6"
          >
            <VStack w="100%" spacing={2}>
              {scenarioIds.map((id) => (
                <ScenarioNode
                  key={id}
                  id={id}
                  content={`Scenario ${id}`}
                  isSelected={selectedScenarioId === id}
                  onSelect={handleSelect}
                />
              ))}
            </VStack>
          </Box>

          {/* Controls / DEM / Support Factors */}
          <Box flex={2} h="100%" w="100%" alignContent={"center"} p={"6"}>
            <HStack
              h="100%"
              w="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              {selectedScenarioId ? (
                <DemSpecific showControlDesignation={showControlDesignation} />
              ) : (
                <DemOverview showEventPhase={showEventPhase} />
              )}
            </HStack>
          </Box>

          {/*  Impact */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            pl="6"
          >
            <ImpactNode id="impact-node" />
          </Box>
        </Box>
        <Box display={"flex"} w={"100%"}>
          <Box flex={1} pr={"6"} />
          {/*  Support Factors */}
          <Box flex={2} p={"6"}>
            <SupportFactorNode id={"support-factor-node"} />
          </Box>

          <Box flex={1} pl={"6"} />
        </Box>
        {/*{selectedScenarioId ? (*/}
        {/*  <SpecificScenariosEdges scenarioId={selectedScenarioId} />*/}
        {/*) : (*/}
        {/*  <AllScenariosEdges scenarioIds={scenarioIds} />*/}
        {/*)}*/}
      </VStack>
    </Xwrapper>
  );
};
