import React from "react";
import { Box, Container, Grid } from "@mui/material";
import ScrollText from "react-scroll-text";

const banner = {
  backgroundColor: "#ffffff",
};

const Banner = () => {
  return (
    <Box style={banner}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              width="100%"
              src="https://i0.wp.com/watchesworldbd.com/wp-content/uploads/2021/07/Shop-Now.png?w=673&ssl=1"
              alt=""
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              width="100%"
              height="555px"
              src="https://images.unsplash.com/photo-1562157705-52df57a5883b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ScrollText
              speed={100}
              style={{
                fontSize: "20px",
                marginTop: "0",
                padding: "20px 0",
                fontWeight: "bold",
                color: "black",
                backgroundColor: "#CDCFD2",
              }}
            >
              Classic Watch is a very reputed and popular name for world class
              watches and writing instruments in Bangladesh. There are 49
              showrooms of Classic Watch at the prime locations of the country.
            </ScrollText>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
