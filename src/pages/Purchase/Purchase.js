import {
    Box, Card,
    CardActionArea, CardContent, CardMedia, CircularProgress, Container, Grid, Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CustomButton from "../../StyledComponents/CustomButton";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";

const Purchase = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { user, isLoading } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const newData = {
      ...data,
      productId: id,
      productName: product.name,
      brand: product.brand,
      img: product.img,
      price: product.price,
      status: "Pending",
    };

    fetch("https://classic-watch-server.onrender.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Purchased Successfully");
          reset();
        }
      });
  };

  useEffect(() => {
    fetch(`https://classic-watch-server.onrender.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <Box>
      <Navigation></Navigation>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={2} sx={{ textAlign: "center" }}>
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
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={7}
            sx={{
              my: 10,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#e74c3c",
              }}
            >
              Purchase Form
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Enter Your Name"
                defaultValue={user.displayName}
                type="text"
                required
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("name", { required: true })}
              />

              <input
                placeholder="Enter Your Email"
                defaultValue={user.email}
                type="email"
                readOnly
                required
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("email", { required: true })}
              />

              <input
                placeholder="Enter Your Phone Number"
                defaultValue={user.email}
                type="number"
                required
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("phone", { required: true })}
              />

              <input
                placeholder="Enter Your Address"
                type="text"
                required
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("address", { required: true })}
              />

              <br />

              {isLoading && <CircularProgress />}
              <CustomButton type="submit" sx={{ mt: 2 }}>
                <i className="fas fa-shopping-bag"></i>&nbsp;Confirm Purchase
              </CustomButton>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default Purchase;
