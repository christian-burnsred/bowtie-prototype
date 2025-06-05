import { type SystemStyleObject } from "@chakra-ui/react";

export const scenarioNodeSx: SystemStyleObject = {
  width: "100%",
  maxWidth: "250px",
  p: "8px",
  borderRadius: "5px",
  bg: "white",
  lineHeight: "normal",
  boxShadow: "0 8px 16px 0 rgba(160, 174, 192, 0.32)",
  fontSize: "sm",
  cursor: "pointer",

  display: "flex",
  alignItems: "center",
};

export const controlNodeSx: SystemStyleObject = {
  width: "120px",
  minHeight: "238px",
  // height: "100%",
  borderRadius: "5px",
  bg: "white",
  boxShadow: "0 8px 16px 0 rgba(160, 174, 192, 0.32)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",

  "& .control-title": {
    p: "8px",
    w: "100%",
    textAlign: "center",
    lineHeight: "normal",
    fontWeight: "bold",
    fontSize: "sm",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "& .control-number-container": {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  "& .control-number": {
    fontSize: "sm",
    textAlign: "center",
  },
};

export const DEMNodeSx: SystemStyleObject = {
  borderRadius: "full",
  border: "1px solid white",
  bg: "#01ab8b",
  boxShadow: "lg",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "flex-start",
  position: "absolute",
  transition: "all 1s ease-in-out",
};

export const DEMNodeDetailedSx: SystemStyleObject = {
  height: "100%",
  width: "100%",
  py: "4",
  px: "6",
  borderRadius: "full",
  border: "1px solid white",
  bg: "#01ab8b",
  boxShadow: "lg",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "flex-start",
  position: "absolute",
  transition: "all 1s ease-in-out",
  overflow: "hidden",

  "& .DEM-content-wrapper": {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    textAlign: "center",
    mt: "14.5px",
    gap: "8px",
  },

  "& .DEM-node-icon": {
    color: "white",
    opacity: "0.48",
  },

  "& .DEM-title-text": {
    textAlign: "center",
    lineHeight: "normal",
    color: "#e2f29a",
    fontSize: "xs",
    fontWeight: "bold",
  },

  "& .DEM-selector": {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
  },
  "& .DEM-control-text": {
    textAlign: "center",
    fontSize: "sm",
    lineHeight: "normal",
    color: "white",
  },
};

export const DEMNodeConciseSx: SystemStyleObject = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",

  "& .DEM-title-text": {
    textAlign: "center",
    color: "#e2f29a",
    fontSize: "xs",
    fontWeight: "bold",
  },

  "& .DEM-text": {
    textAlign: "center",
    fontSize: "xs",
    fontWeight: "semibold",
    lineHeight: "normal",
    color: "white",
  },
};

export const ImpactNodeSx: SystemStyleObject = {
  width: "100%",
  maxWidth: "250px",
  height: "48px",
  p: "8px",
  borderRadius: "5px",
  bg: "linear-gradient(to bottom, #db4742 0%, #b83834 100%)",
  lineHeight: "normal",
  boxShadow: "0 8px 16px 0 rgba(160, 174, 192, 0.32)",
  fontSize: "sm",
  color: "white",
  alignContent: "center",
  justifyItems: "center",

  "& .impact-heading": {
    fontWeight: "bold",
  },
};

export const SupportFactorNodeSx: SystemStyleObject = {
  width: "100%",
  bg: "white",
  p: "26px",
  borderRadius: "5px",
  boxShadow: "0 8px 16px 0 rgba(160, 174, 192, 0.32)",
  fontSize: "sm",
  justifyItems: "center",

  "& .support-factor-heading": {
    fontWeight: "bold",
  },

  "& .support-factor-list-items": {
    mt: 4,
  },
};
