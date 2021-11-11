import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Pay = () => {
  return (
    <Box>
      <Container sx={{ fontWeight: "bold", textAlign: "center", my: 10 }}>
        <img
          src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-banknote-15.png"
          alt=""
        />
        <Typography variant="h4">
          Payment System Coming Soon............
        </Typography>
      </Container>
    </Box>
  );
};

export default Pay;
