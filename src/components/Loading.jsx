import { Box, Typography } from "@mui/material";

const Loading = ({ isDashboard }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography variant={isDashboard ? "h4" : "h2"}>Loading...</Typography>
      <Typography
        m={isDashboard ? undefined : "10px 0"}
        variant={isDashboard ? "h6" : "h4"}
        sx={{ textAlign: "center" }}
      >
        Please allow for potential delays as I host this demo on a free server.
        <br />
        Thank you for your patience. 😊
      </Typography>
      <img
        src="https://media0.giphy.com/media/L4ZI0w4waQ2vSkMgU9/giphy.gif?cid=790b761141e25cc9fc2e0a8e01c217013ea801b1c7a45939&rid=giphy.gif"
        alt="Loading..."
        style={{
          height: isDashboard ? "6rem" : "8rem",
          width: isDashboard ? "6rem" : "8rem",
        }}
      />
    </Box>
  );
};

export default Loading;
