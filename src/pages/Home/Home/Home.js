import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Banner from "../Banner/Banner";
import Watches from "../Watches/Watches";
import Reviews from "../Reviews/Reviews";
import Navigation from "../../Shared/Navigation";
import LatestProducts from "../LatestProducts/LatestProducts";
import Footer from "../../Shared/Footer";
import { Fade, Slide } from "react-reveal";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Navigation></Navigation>
      <Slide bottom>
        <Banner></Banner>
      </Slide>
      <Fade bottom>
        <Watches></Watches>
        <Reviews></Reviews>
        <LatestProducts></LatestProducts>
      </Fade>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
