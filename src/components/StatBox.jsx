import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, value, increase, icon, description, progress }) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 3"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Box>
          {icon}
          <Typography
            variant="h3"
            fontWeight="600"
            sx={{ color: theme.palette.secondary[200] }}
          >
            {value}
          </Typography>
        </Box>
        <ProgressCircle progress={progress} />
      </FlexBetween>
      <FlexBetween gap="1rem"></FlexBetween>
      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.greenAccent[500] }}
        >
          {increase}
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.greenAccent[500] }}>
          {title}
        </Typography>
        {/* <Typography>{description}</Typography> */}
      </FlexBetween>
    </Box>
  );
};

export default StatBox;
