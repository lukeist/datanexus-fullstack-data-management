import React from "react";
import { Box } from "@mui/system";
import Header from "components/Header";
import BreakdownChart from "components/BreakdownChart";
import BarChart from "components/BarChart";
import LineChart from "components/LineChart";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sale by Category" />
      <Box mt="40px" height="75vh">
        {/* <BreakdownChart /> */}
        {/* <BarChart /> */}
        <LineChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
