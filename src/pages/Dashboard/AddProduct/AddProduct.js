import React, { useEffect } from "react";
import {
  CircularProgress,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import CustomButton from "../../../StyledComponents/CustomButton";

const AddProduct = () => {
  const { isLoading } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://agile-plains-53305.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Product Added Successfully");
          reset();
        }
      });
  };

  return (
    <Box>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ textAlign: "center", height: "100vh", mt: 5 }}
        >
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              variant="h4"
              sx={{
                py: 1,
                my: 3,
                width: "100%",
                textAlign: "center",
                fontWeight: "bold",
                color: "#e74c3c",
              }}
            >
              Add Product
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Enter Product Name"
                type="text"
                required
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("name", { required: true })}
              />
              <input
                placeholder="Enter Image URL"
                type="text"
                required
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("img", { required: true })}
              />
              <input
                placeholder="Enter Price"
                type="number"
                required
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("price", { required: true })}
              />
              <input
                placeholder="Enter Band Name"
                type="text"
                required
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("brand", { required: true })}
              />
              <input
                placeholder="Enter Material Description"
                type="text"
                required
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("material", { required: true })}
              />
              <input
                placeholder="Enter Warranty Description"
                type="text"
                required
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("warranty", { required: true })}
              />

              {isLoading && <CircularProgress />}

              <CustomButton type="submit" sx={{ mt: 2 }}>
                <i className="fas fa-cart-plus"></i>&nbsp;Add Products
              </CustomButton>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              width="80%"
              src="https://booster.io/wp-content/uploads/product-add-to-cart-e1438362099361.png"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AddProduct;
