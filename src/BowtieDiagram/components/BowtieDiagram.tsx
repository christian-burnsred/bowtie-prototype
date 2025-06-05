import { Box, VStack } from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Xwrapper, useXarrow } from "react-xarrows";

import { DemOverview } from "./NodeBlocks/DemOverview.tsx";
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
  const scenarioIds = Array.from({ length: 5 }, (_, i) => `scenario-${i}`);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(
    null,
  );
  const [selectedSupportFactor, setSelectedSupportFactor] = useState<
    string | null
  >(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const updateXarrowFromHook = useXarrow();

  const updateXarrow = useCallback(() => {
    updateXarrowFromHook();
  }, [updateXarrowFromHook]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new MutationObserver(() => {
      updateXarrow();
    });

    observer.observe(containerRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => observer.disconnect();
  }, [updateXarrow]);

  // Initial update after mount
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      updateXarrow();
    });
    return () => cancelAnimationFrame(timer);
  }, [updateXarrow]);

  const handleSelect = (id: string) => {
    setSelectedScenarioId((prev) => (prev === id ? null : id));
  };

  const scenarios = [
    "Vehicle in control contacts person involved in the task",
    "Vehicle in control contacts person not involved in the task",
    "Vehicle not in control/moves unexpectedly contacting person including rollaway",
    "Person in footprint of vehicle including rollaway",
    "Person boarding/alighting vehicle including rollaway",
  ];

  return (
    <Xwrapper>
      <VStack ref={containerRef} spacing={0} h={"100%"} w={"100%"}>
        <Box display={"flex"} h={"100%"} w={"100%"}>
          {/* Scenarios */}
          <Box flex={1} display="flex" flexDirection="column" pr="6" pt={6}>
            <VStack w="100%" spacing={2}>
              {scenarioIds.map((id, i) => (
                <ScenarioNode
                  key={id}
                  id={id}
                  content={scenarios[i]}
                  isSelected={selectedScenarioId === id}
                  onSelect={handleSelect}
                />
              ))}
            </VStack>
          </Box>

          {/* Controls / DEM / Support Factors */}
          <Box flex={2} h="100%" w="100%" alignContent={"center"} p={"6"}>
            <DemOverview
              showEventPhase={showEventPhase}
              selectedScenarioId={selectedScenarioId}
              showControlDesignation={showControlDesignation}
              selectedSupportFactor={selectedSupportFactor}
            />
          </Box>

          {/*  Impact */}
          <Box flex={1} display="flex" flexDirection="column" pt={119} pl="6">
            <ImpactNode id="impact-node" />
          </Box>
        </Box>
        <Box display={"flex"} w={"100%"}>
          <Box flex={1} pr={"6"} />
          {/*  Support Factors */}
          <Box flex={2} p={"6"}>
            <SupportFactorNode
              id="support-factor-node"
              selectedScenario={selectedScenarioId}
              selectedSupportFactor={selectedSupportFactor}
              onSelectSupportFactor={(factor) =>
                setSelectedSupportFactor((prev) =>
                  prev === factor ? null : factor,
                )
              }
            />
          </Box>

          <Box flex={1} pl={"6"} />
        </Box>
        {selectedScenarioId ? (
          <SpecificScenariosEdges
            scenarioId={selectedScenarioId}
            showEventPhase={showEventPhase}
          />
        ) : (
          <AllScenariosEdges scenarioIds={scenarioIds} />
        )}
      </VStack>
    </Xwrapper>
  );
};
