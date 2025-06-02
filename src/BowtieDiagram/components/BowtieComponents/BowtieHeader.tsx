import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Switch,
  Text,
} from "@chakra-ui/react";

import { switchSx } from "./BowtieHeader.styles.ts";

interface BowtieHeaderProps {
  showEventPhase: boolean;
  showControlDesignation: boolean;
  onShowEventPhaseChange: (checked: boolean) => void;
  onShowControlDesignationChange: (checked: boolean) => void;
}

export const BowtieHeader = ({
  showEventPhase,
  showControlDesignation,
  onShowEventPhaseChange,
  onShowControlDesignationChange,
}: BowtieHeaderProps) => {
  return (
    <HStack display="flex" justifyContent="space-between">
      <FormControl sx={switchSx}>
        <FormLabel>Show event phase</FormLabel>
        <Switch
          colorScheme={"green"}
          size={"lg"}
          id="show-event-phase"
          isChecked={showEventPhase}
          onChange={(e) => onShowEventPhaseChange(e.target.checked)}
        />
        <FormLabel>Show control designation</FormLabel>
        <Switch
          colorScheme={"green"}
          size={"lg"}
          id="show-control-designation"
          isChecked={showControlDesignation}
          onChange={(e) => onShowControlDesignationChange(e.target.checked)}
        />
      </FormControl>
      <HStack display="flex">
        {showControlDesignation && <BowtieHeaderLegend />}
      </HStack>
    </HStack>
  );
};

const BowtieHeaderLegend = () => {
  return (
    <HStack spacing={5}>
      <BowtieHeaderItem designation={"Interrupt"} color={"#008981"} />
      <BowtieHeaderItem designation={"Assisted Interrupt"} color={"#00ab8a"} />
      <BowtieHeaderItem
        designation={"Human Action Interrupt"}
        color={"#2da2d7"}
      />
      <BowtieHeaderItem designation={"Damage Reduction"} color={"#234483"} />
    </HStack>
  );
};

interface BowtieHeaderItemProps {
  designation: string;
  color: string;
}

const BowtieHeaderItem = ({ designation, color }: BowtieHeaderItemProps) => {
  return (
    <HStack>
      <Box w={"14px"} h={"14px"} borderRadius={"2px"} bg={color} />
      <Text fontSize={"xs"} fontWeight="medium">
        {designation}
      </Text>
    </HStack>
  );
};
