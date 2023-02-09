import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Header from "components/Header";
import BreakdownChart from "components/BreakdownChart";
import BarChart from "components/BarChart";
import LineChart from "components/LineChart";
import { Button, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

const Breakdown = () => {
  const theme = useTheme();
  const [chart, setChart] = useState();
  const location = useLocation();

  useEffect(() => {
    setChart("Pie");
  }, [location]);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sale by Category" />
      <Box m="5px 0 0 -5px">
        <Button
          onClick={() => setChart("Pie")}
          sx={{
            margin: "5px",
            backgroundColor:
              chart === "Pie"
                ? theme.palette.redAccent[500]
                : theme.palette.greenAccent[500],
            color: theme.palette.background.default,
            ":hover": {
              backgroundColor:
                chart === "Pie"
                  ? theme.palette.redAccent[300]
                  : theme.palette.greenAccent[300],
            },
          }}
        >
          Pie Chart
        </Button>
        <Button
          onClick={() => setChart("Bar")}
          sx={{
            margin: "5px",
            backgroundColor:
              chart === "Bar"
                ? theme.palette.redAccent[500]
                : theme.palette.greenAccent[500],
            color: theme.palette.background.default,
            ":hover": {
              backgroundColor:
                chart === "Bar"
                  ? theme.palette.redAccent[300]
                  : theme.palette.greenAccent[300],
            },
          }}
        >
          Bar Chart
        </Button>
        <Button
          onClick={() => setChart("Line")}
          sx={{
            margin: "5px",
            backgroundColor:
              chart === "Line"
                ? theme.palette.redAccent[500]
                : theme.palette.greenAccent[500],
            color: theme.palette.background.default,
            ":hover": {
              backgroundColor:
                chart === "Line"
                  ? theme.palette.redAccent[300]
                  : theme.palette.greenAccent[300],
            },
          }}
        >
          Line Chart
        </Button>
      </Box>
      <Box height="75vh">
        {chart === "Pie" ? (
          <BreakdownChart />
        ) : chart === "Bar" ? (
          <BarChart />
        ) : (
          <LineChart />
        )}
      </Box>
    </Box>
  );
};

export default Breakdown;
