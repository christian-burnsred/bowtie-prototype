import { type SystemStyleObject } from "@chakra-ui/react";

export const demSpecificSx: SystemStyleObject = {
  width: "100%",
  // maxWidth: "250px",
  borderRadius: "5px",
  bg: "white",
  boxShadow: "0 8px 16px 0 rgba(160, 174, 192, 0.32)",
  position: "relative",
};

export const accordionSx: SystemStyleObject = {
  px: "12px",
  py: "26px",

  "& .chakra-accordion__item": {
    mb: 1,
    border: "none",
  },

  "& .chakra-accordion__button": {
    // bg: "gray.100",
    mb: 1,
    borderRadius: "5px",
    fontSize: "sm",
    outline: "none",

    _hover: {
      bg: "orange.200",
      color: "black",
    },

    "&[aria-expanded='true']": {
      bg: "orange.400",
      color: "white",
    },
  },

  "& .chakra-accordion__panel": {
    border: "2px solid orange",
    fontSize: "sm",
  },
};
