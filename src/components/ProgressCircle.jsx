import { Box, useTheme } from "@mui/system";
import React from "react";

const ProgressCircle = ({ progress = "0.75", size = "50" }) => {
  const theme = useTheme();
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${theme.palette.background.alt} 55%, transparent 56%), conic-gradient(transparent 0deg ${angle}deg, ${theme.palette.blueAccent[500]} ${angle}deg 360deg), ${theme.palette.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
