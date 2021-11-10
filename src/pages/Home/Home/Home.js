import React from "react";
import { Box } from "@mui/material";
import Banner from "../Banner/Banner";
import Watches from "../Watches/Watches";
import Review from "../Review/Review";

const Home = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Banner></Banner>
      <Watches></Watches>
      <Review></Review>
    </Box>
  );
};

export default Home;
