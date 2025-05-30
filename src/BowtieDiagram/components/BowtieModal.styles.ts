import { type SystemStyleObject } from "@chakra-ui/react";

export const modalSx: SystemStyleObject = {
  width: "95vw",
  minHeight: "85vh",
  maxWidth: "1800px",
};

export const modalHeadingSx: SystemStyleObject = {
  fontWeight: "bold",
  mb: 8,
};

export const switchSx: SystemStyleObject = {
  fontSize: "sm",
  mb: 0,
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  "& .chakra-form__label": {
    fontSize: "xs",
    mb: 0,
    mr: 2,
  },
  "& .chakra-switch": {
    mr: 6,
  },
};

export const modalBodySx: SystemStyleObject = {
  bg: "gray.100",
  borderTop: "gray.200",
  borderBottom: "gray.200",
  pt: 10,
};

export const modalFooterSx: SystemStyleObject = {
  borderTop: 0,
  width: "100%",
  alignItems: "flex-end",
};
