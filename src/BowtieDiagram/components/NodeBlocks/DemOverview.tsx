import { Flex } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";

import { DemSpecific } from "./DemSpecific.tsx";
import { ControlNode, DEMNode } from "../Nodes/Nodes.tsx";

interface DemOverviewmProps {
  showEventPhase: boolean;
  selectedScenarioId: string | null;
  showControlDesignation: boolean;
  selectedSupportFactor: string | null;
}

export const DemOverview = ({
  showEventPhase,
  selectedScenarioId,
  showControlDesignation,
  selectedSupportFactor,
}: DemOverviewmProps) => {
  const [isMorphed, setIsMorphed] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const prevScenarioId = useRef<string | null>(null);

  const handleMorph = () => {
    setIsMorphed((prev) => {
      if (prev) setShowOverlay(false);
      return !prev;
    });
  };

  useEffect(() => {
    const wasNull = prevScenarioId.current == null;
    const isNowNull = selectedScenarioId == null;

    if (wasNull !== isNowNull) {
      handleMorph();
    }

    prevScenarioId.current = selectedScenarioId;
  }, [selectedScenarioId]);

  const [targetHeight, setTargetHeight] = useState(0);

  return (
    <Flex
      h={"auto"}
      w={"100%"}
      justifyContent="space-between"
      position="relative"
    >
      <ControlNode
        id="preventative-control"
        title="Preventative controls"
        controlCount={24}
        showEventPhase={showEventPhase}
        timeZoneType="preventative"
        isMorphed={isMorphed}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
        targetHeight={targetHeight}
        width={"calc(66.667% - 0.125rem)"}
      />
      <DEMNode
        id="dem-node"
        DEMs={[
          "Vehicle to Person",
          "Vehicle to Vehicle",
          "Vehicle to Environment",
        ]}
        controlCount={26}
        showEventPhase={showEventPhase}
        isMorphed={isMorphed}
        setShowOverlay={setShowOverlay}
      />
      <ControlNode
        id={"mitigative-control"}
        title="Mitigative controls"
        controlCount={2}
        showEventPhase={showEventPhase}
        timeZoneType="mitigative"
        isMorphed={isMorphed}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
        targetHeight={targetHeight}
        width={"calc(33.333% - 0.125rem)"}
      />

      <DemSpecific
        showEventPhase={showEventPhase}
        showControlDesignation={showControlDesignation}
        selectedSupportFactor={selectedSupportFactor}
        showOverlay={showOverlay}
        setTargetHeight={setTargetHeight}
      />
    </Flex>
  );
};
