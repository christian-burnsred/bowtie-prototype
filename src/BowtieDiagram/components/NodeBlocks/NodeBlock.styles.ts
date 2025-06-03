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

export const controlExpandedGridBoxSx: SystemStyleObject = {
  w: "100%",
  // h: "300px",
  border: "2px solid",
  borderColor: "orange.500",
  borderRadius: "6px",
  bg: "white",
  p: 4,
  boxShadow: "lg",

  "& .control-expanded-column-container": {
    height: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },

  "& .control-expanded-header": {
    fontWeight: "bold",
    mb: 4,
    alignItems: "center",
    color: "gray.500",
  },

  "& .control-expanded-subheader": {
    fontWeight: "bold",
    fontSize: "xs",
    lineHeight: "normal",
    mb: 2,
  },

  "& .control-expanded-text": {
    fontSize: "xs",
    lineHeight: "normal",
    mb: 4,
  },
};
