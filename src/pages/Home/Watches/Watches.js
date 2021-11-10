import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const watches = [
  {
    name: "https://i0.wp.com/watchesworldbd.com/wp-content/uploads/2021/09/AMW-S820L-2AVDF.jpg?resize=300%2C300&ssl=1",
    price: "11,400.00",
    brand: "Casio, Enticer Men",
    material: "Genuine Leather",
    warranty:
      "1 Year (For detail, please see warratny information page under help center)",
  },
  {
    name: "https://i2.wp.com/watchesworldbd.com/wp-content/uploads/2021/07/AD-1003IVSVBN.jpg?resize=300%2C300&ssl=1",
    price: "8,400.00",
    brand: "ARMITRON",
    material: "Genuine Leather",
    warranty:
      "1 Year (For detail, please see warratny information page under help center)",
  },
  {
    name: "https://i0.wp.com/watchesworldbd.com/wp-content/uploads/2021/07/20-5295WTTT.jpg?resize=300%2C300&ssl=1",
    price: "9,100.00",
    brand: "ARMITRON",
    material: "Genuine Leather",
    warranty:
      "1 Year (For detail, please see warratny information page under help center)",
  },
  {
    name: "https://i0.wp.com/watchesworldbd.com/wp-content/uploads/2021/07/20-5295WTTT.jpg?resize=300%2C300&ssl=1",
    price: "9,100.00",
    brand: "ARMITRON",
    material: "Genuine Leather",
    warranty:
      "1 Year (For detail, please see warratny information page under help center)",
  },
  {
    name: "https://i2.wp.com/watchesworldbd.com/wp-content/uploads/2021/07/SKW6373.jpg?resize=300%2C300&ssl=1",
    price: "5,100.00",
    brand: "SKAGEN",
    material: "Genuine Leather",
    warranty:
      "1 Year (For detail, please see warratny information page under help center)",
  },
  {
    name: "https://i1.wp.com/watchesworldbd.com/wp-content/uploads/2021/09/SHE-3058SPG-4AUDR.jpg?resize=300%2C300&ssl=1",
    price: "17,410.00",
    brand: "Casio, Sheen",
    material: "Stainless-steel",
    warranty:
      "1 Year (For detail, please see warratny information page under help center)",
  },
  {
    name: "https://i1.wp.com/watchesworldbd.com/wp-content/uploads/2021/09/SHN-3011PG-9ADR.jpg?resize=300%2C300&ssl=1",
    price: "18,660.00",
    brand: "Casio, Sheen",
    material: "Stainless-steel",
    warranty:
      "1 Year (For detail, please see warratny information page under help center)",
  },
];

const Watches = () => {
  const [products, setProducts] = useState([]);
  return (
    <Box>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{ py: 3, fontWeight: "bold", color: "#3C6382" }}
        >
          Our New Watches
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Watches;
