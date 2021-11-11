import React from "react";
import { Box } from "@mui/material";
import Banner from "../Banner/Banner";
import Watches from "../Watches/Watches";
import Reviews from "../Reviews/Reviews";
import Navigation from "../../Shared/Navigation";
import Footer from "../../Shared/Footer";

const Home = () => {
  return (
    <Box>
      <Navigation></Navigation>
      <Banner></Banner>
      <Watches></Watches>
      <Reviews></Reviews>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
