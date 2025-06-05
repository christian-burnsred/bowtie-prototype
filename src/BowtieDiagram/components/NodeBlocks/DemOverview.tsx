import { Flex } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

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

  const handleMorph = () => {
    setIsMorphed((prev) => {
      if (prev) setShowOverlay(false);
      return !prev;
    });
  };

  // FIXME - hacky, clean up logic
  useEffect(() => {
    handleMorph();
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
        setShowOverlay={setShowOverlay}
        targetHeight={targetHeight}
      />
      <DEMNode
        id="dem-node"
        DEMs={[
          "Vehicle to Person",
          "Vehicle to Vehicle",
          "Vehicle to Environment",
        ]}
        controlCount={26}
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
        setShowOverlay={setShowOverlay}
        targetHeight={targetHeight}
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
