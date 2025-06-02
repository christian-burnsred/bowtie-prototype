import type { SystemStyleObject } from "@chakra-ui/react";

export const switchSx: SystemStyleObject = {
  fontSize: "sm",
  mb: 0,
  display: "flex",
  alignItems: "center",
  width: "fit-content",

  "& .chakra-form__label": {
    fontSize: "xs",
    mb: 0,
    mr: 2,
  },

  "& .chakra-switch": {
    mr: 6,
  },
};
