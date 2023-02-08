import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import GeographyChart from "components/GeographyChart";

const Geography = () => {
  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="GEOGRAPHY" subtitle="Location of All Users" />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[500]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
