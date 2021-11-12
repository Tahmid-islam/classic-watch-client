import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import CustomButton from "../../../StyledComponents/CustomButton";
import { useHistory } from "react-router-dom";

const Watches = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/products?size=6`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const handleBuyNow = (id) => {
    history.push(`/purchase/${id}`);
  };

  return (
    <Box>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          {!products.length && <CircularProgress />}
        </Box>

        <Typography
          variant="h4"
          align="center"
          sx={{ py: 3, fontWeight: "bold", color: "#3C6382" }}
        >
          Our Featured Watches
        </Typography>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={product._id}>
              <Paper elevation={3} sx={{ textAlign: "center", py: 3 }}>
                <img src={product.img} alt={product.name} />
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {product.brand}
                </Typography>
                <Typography variant="h6" sx={{ py: 2 }}>
                  {product.name}
                </Typography>
                <Typography variant="body1" sx={{ py: 2, fontWeight: "bold" }}>
                  ৳{product.price}
                </Typography>
                <CustomButton onClick={() => handleBuyNow(product._id)}>
                  <i className="fas fa-shopping-cart"></i> &nbsp; Buy Now
                </CustomButton>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Watches;
