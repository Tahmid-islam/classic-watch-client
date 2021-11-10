import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

const Purchase = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Card sx={{ maxWidth: 450 }}>
              <CardActionArea>
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#3c6382",
                  }}
                  component="div"
                >
                  {product.name}
                </Typography>
                <CardMedia
                  width="100%"
                  component="img"
                  image={product.img}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="subtitle1">
                    <span style={{ fontWeight: "bold" }}> Brand Name: </span>
                    {product.brand}
                  </Typography>
                  <hr />
                  <Typography variant="subtitle1">
                    <span style={{ fontWeight: "bold" }}> Price: </span>৳
                    {product.price}
                  </Typography>
                  <hr />
                  <Typography variant="subtitle1">
                    <span style={{ fontWeight: "bold" }}> Material: </span>
                    {product.material}
                  </Typography>
                  <hr />
                  <Typography variant="subtitle1">
                    <span style={{ fontWeight: "bold" }}> Warranty: </span>
                    {product.warranty}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#3c6382",
              }}
            >
              Purchase Form
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Purchase;
