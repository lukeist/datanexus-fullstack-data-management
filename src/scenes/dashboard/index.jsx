import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  DownloadOutlined,
  PersonAdd,
  Traffic,
  CurrencyExchange,
  CalendarMonth,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import BreakdownChart from "components/BreakdownChart";
import OverviewChart from "components/OverviewChart";
import { DataGrid } from "@mui/x-data-grid";
import { mockTransactions } from "state/mockData";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import BarChart from "components/BarChart";
import LineChart from "components/LineChart";
import ProgressCircle from "components/ProgressCircle";
import GeographyChart from "components/GeographyChart";

const Dashboard = () => {
  console.log(mockTransactions[0].user);
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();
  // FOR VERSION 7
  // const columns = [
  //   {
  //     field: "_id",
  //     headerName: "ID",
  //     flex: 1, // how each column to grow/shrink
  //   },
  //   {
  //     field: "userId",
  //     headerName: "User ID",
  //     flex: 1,
  //   },
  //   {
  //     field: "createdAt",
  //     headerName: "Created At",
  //     flex: 1,
  //   },
  //   {
  //     field: "products",
  //     headerName: "# of Produts",
  //     flex: 0.5,
  //     renderCell: (params) => params.value.length,
  //   },
  //   {
  //     field: "cost",
  //     headerName: "Cost",
  //     renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
  //   },
  // ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://people.sc.fsu.edu/~jburkardt/data/csv/hw_25000.csv";
    link.download = "Cheems";
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // VERSION 4H
  return (
    <Box m="1.5rem 2rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome back, Shelly!" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={handleDownload}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="120px"
        gap="15px"
      >
        {/* ROW 1 */}
        <StatBox
          title="Customers"
          value={data && data.totalCustomers}
          progress="0.75"
          increase={data && "+14%"} // should be more dynamic - but atm no info in the backend to grap the info
          description="Since last month"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.greenAccent[500], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Sales Today"
          value={data && data.todayStats.totalSales}
          progress="0.5"
          increase={data && "+21%"} // should be more dynamic - but atm no info in the backend to grap the info
          description="Since last month"
          icon={
            <CurrencyExchange
              sx={{ color: theme.palette.greenAccent[500], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Monthly Sales"
          value={data && data.thisMonthStats.totalSales}
          progress="0.30"
          increase={data && "+5%"} // should be more dynamic - but atm no info in the backend to grap the info
          description="Since last month"
          icon={
            <CalendarMonth
              sx={{ color: theme.palette.greenAccent[500], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Yearly Sales"
          value={data && data.yearlySalesTotal}
          progress="0.80"
          increase={data && "+43%"} // should be more dynamic - but atm no info in the backend to grap the info
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.greenAccent[500], fontSize: "26px" }}
            />
          }
        />

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
        >
          <FlexBetween mt="25px" p="0 30px">
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={theme.palette.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="500"
                color={theme.palette.greenAccent[500]}
              >
                $14,535,178
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{
                    fontSize: "26px",
                    color: theme.palette.greenAccent[500],
                  }}
                />
              </IconButton>
            </Box>
          </FlexBetween>
          <Box height="230px" mt="-20px">
            <LineChart isDashboard="true" />
          </Box>
        </Box>

        {/* TRANSACTIONS */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          overflow="auto"
        >
          <FlexBetween
            borderBottom={`1.5px solid ${theme.palette.primary.main}`}
            color={theme.palette.grey[100]}
            p="15px"
          >
            <Typography
              color={theme.palette.grey[100]}
              variant="h5"
              fontWeight="600"
            >
              Recent Transactions
            </Typography>
          </FlexBetween>
          {mockTransactions.map((transaction, i) => (
            <FlexBetween
              key={`${transaction.txId}-${i}`}
              borderBottom={`1.5px solid ${theme.palette.primary.main}`}
              color={theme.palette.grey[100]}
              p="15px"
            >
              <Box>
                <Typography
                  color={theme.palette.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={theme.palette.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={theme.palette.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={theme.palette.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </FlexBetween>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={theme.palette.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $51,384 Revenue Generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px" mt="20px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
        {/*  */}
      </Box>
    </Box>
  );
  // VERSION 7H
  // return (
  //   <Box m="1.5rem 2.5rem">
  //     <FlexBetween>
  //       <Header title="DASHBOARD" subtitle="Welcome back, Shelly!" />
  //       <Box>
  //         <Button
  //           sx={{
  //             backgroundColor: theme.palette.secondary.light,
  //             color: theme.palette.background.alt,
  //             fontSize: "14px",
  //             fontWeight: "bold",
  //             padding: "18px 20px",
  //           }}
  //           onClick={handleDownload}
  //         >
  //           <DownloadOutlined sx={{ mr: "10px" }} />
  //           Download Reports
  //         </Button>
  //       </Box>
  //     </FlexBetween>

  //     <Box
  //       mt="20px"
  //       display="grid"
  //       gridTemplateColumns="repeat(12,1fr)"
  //       gridAutoRows="160px"
  //       gap="20px"
  //       sx={{
  //         "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
  //       }}
  //     >
  //       {/* ROW 1 */}
  //       <StatBox
  //         title="Total Customers"
  //         value={data && data.totalCustomers}
  //         increase="+14%" // should be more dynamic - but atm no info in the backend to grap the info
  //         description="Since last month"
  //         icon={
  //           <PointOfSale
  //             sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
  //           />
  //         }
  //       />
  //       <StatBox
  //         title="Sales Today"
  //         value={data && data.todayStats.totalSales}
  //         increase="+21%" // should be more dynamic - but atm no info in the backend to grap the info
  //         description="Since last month"
  //         icon={
  //           <PersonAdd
  //             sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
  //           />
  //         }
  //       />

  //       <Box
  //         gridColumn="span 8"
  //         gridRow="span 2"
  //         backgroundColor={theme.palette.background.alt}
  //         p="1rem"
  //         borderRadius="0.55rem"
  //       >
  //         <OverviewChart view="sales" isDashboard={true} />
  //       </Box>
  //       <StatBox
  //         title="Monthly Sales"
  //         value={data && data.thisMonthStats.totalSales}
  //         increase="+5%" // should be more dynamic - but atm no info in the backend to grap the info
  //         description="Since last month"
  //         icon={
  //           <PersonAdd
  //             sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
  //           />
  //         }
  //       />
  //       <StatBox
  //         title="Yearly Sales"
  //         value={data && data.yearlySalesTotal}
  //         increase="+43%" // should be more dynamic - but atm no info in the backend to grap the info
  //         description="Since last month"
  //         icon={
  //           <Traffic
  //             sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
  //           />
  //         }
  //       />

  //       {/* ROW 2 */}
  //       <Box
  //         gridColumn="span 8"
  //         gridRow="span 3"
  //         sx={{
  //           // modify a specific class inside this box: '& .className'
  //           "& .MuiDataGrid-root": {
  //             border: "none",
  //             borderRadius: "5rem",
  //           },
  //           "& .MuiDataGrid-cell": {
  //             border: "none",
  //           },
  //           "& .MuiDataGrid-columnHeaders": {
  //             backgroundColor: theme.palette.background.alt,
  //             color: theme.palette.secondary[100],
  //             borderBottom: "none",
  //           },
  //           "& .MuiDataGrid-virtualScroller": {
  //             backgroundColor: theme.palette.background.alt,
  //           },
  //           "& .MuiDataGrid-footerContainer": {
  //             backgroundColor: theme.palette.background.alt,
  //             color: theme.palette.secondary[100],
  //             borderTop: "none",
  //           },
  //           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
  //             color: `${theme.palette.secondary[200]} !important`,
  //           },
  //         }}
  //       >
  //         <DataGrid
  //           loading={isLoading || !data}
  //           getRowId={(row) => row._id}
  //           rows={(data && data.transactions) || []}
  //           columns={columns}
  //         />
  //       </Box>
  //       <Box
  //         gridColumn="span 4"
  //         gridRow="span 3"
  //         backgroundColor={theme.palette.background.alt}
  //         p="1.5rem"
  //         borderRadius="0.55rem"
  //       >
  //         <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
  //           Sales By Category
  //         </Typography>
  //         <BreakdownChart isDashboard={true} />
  //         <Typography
  //           p="0 0.6rem"
  //           fontSize="0.8rem"
  //           sx={{ color: theme.palette.secondary[200] }}
  //         >
  //           Breakdown of real states and information via category for revenue
  //           made for this year and total sales.
  //         </Typography>
  //       </Box>
  //     </Box>
  //   </Box>
  // );
};

export default Dashboard;
