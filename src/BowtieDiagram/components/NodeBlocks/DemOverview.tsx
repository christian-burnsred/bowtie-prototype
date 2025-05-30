import { Box } from "@chakra-ui/react";

import { ControlNode, DEMNode } from "../Nodes/Nodes.tsx";

export const DemOverview = () => {
  return (
    <Box
      display={"flex"}
      flex={1}
      h={"100%"}
      w={"100%"}
      justifyContent="space-between"
      alignItems="stretch"
    >
      <ControlNode
        id="preventative-control"
        title="Preventative controls"
        controlCount={24}
      />
      <DEMNode
        id="dem-node"
        DEMs={[
          "Vehicle to Person",
          "Vehicle to Vehicle",
          "Vehicle to Environment",
        ]}
        controlCount={26}
      />
      <ControlNode
        id={"mitigative-control"}
        title="Mitigative controls"
        controlCount={2}
      />
    </Box>
  );
};
