import React from "react";
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

const Review = () => {
  const { isLoading, user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const newData = {
      ...data,
      email: user.email,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Review Posted Successfully");
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
          sx={{ textAlign: "center", height: "100vh", mt: 10 }}
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
              Review About Our Service
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Enter Your Name"
                type="text"
                required
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("name", { required: true })}
              />
              <input
                placeholder="Enter Rating 1 To 5"
                type="number"
                required
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("rating", { required: true, min: 1, max: 5 })}
              />
              <textarea
                placeholder="Write Your Review.....(Max 250 Letters)"
                type="text"
                required
                maxLength="250"
                style={{ width: "90%", padding: 10, marginTop: 10 }}
                {...register("message", { required: true })}
              />

              {isLoading && <CircularProgress />}

              <CustomButton type="submit" sx={{ mt: 2 }}>
                <i className="fas fa-mail-bulk"></i>&nbsp;Post Review
              </CustomButton>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              width="100%"
              src="https://img.freepik.com/free-photo/time-review-text-notebook-gray-background-pencils-paper-clips-concept_284815-2776.jpg?size=626&ext=jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Review;
