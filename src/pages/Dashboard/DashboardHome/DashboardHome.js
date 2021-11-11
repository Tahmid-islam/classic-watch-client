import React from "react";
import { Box, Container, Typography } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <Box
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <Container sx={{ fontWeight: "bold", textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "center", color: "#FD7272" }}
        >
          Your Profile
        </Typography>
        <hr />
        <img
          src={user?.photoURL}
          alt=""
          width="20%"
          style={{ borderRadius: "50%" }}
        />
        <Typography variant="h4" sx={{ mt: 2 }}>
          Welcome,{" "}
          <span style={{ color: "#FD7272", fontWeight: "bold" }}>
            {user?.displayName}
          </span>
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Email: {user?.email}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Thanks for using our web app.
        </Typography>
      </Container>
    </Box>
  );
};

export default DashboardHome;
