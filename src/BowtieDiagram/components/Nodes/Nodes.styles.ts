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
  maxHeight: "238px",
  borderRadius: "5px",
  bg: "white",
  boxShadow: "0 8px 16px 0 rgba(160, 174, 192, 0.32)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",

  "& .control-title": {
    p: "8px",
    textAlign: "center",
    lineHeight: "normal",
    fontWeight: "bold",
    fontSize: "sm",
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
  width: "238px",
  height: "238px",
  py: "4",
  px: "6",
  borderRadius: "full",
  border: "1px solid white",
  bg: "#01ab8b",
  boxShadow: "0 8px 16px 0 rgba(160, 174, 192, 0.32)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "flex-start",

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
  width: "100px",
  height: "100px",
  borderRadius: "full",
  border: "1px solid white",
  bg: "#01ab8b",
  boxShadow: "0 8px 16px 0 rgba(160, 174, 192, 0.32)",
  display: "flex",

  "& .DEM-content-wrapper": {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

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
  height: "80px",
  bg: "white",
  p: "8px",
  borderRadius: "5px",
  boxShadow: "0 8px 16px 0 rgba(160, 174, 192, 0.32)",
  fontSize: "sm",
  alignContent: "center",
  justifyItems: "center",

  "& .support-factor-heading": {
    fontWeight: "bold",
  },
};
