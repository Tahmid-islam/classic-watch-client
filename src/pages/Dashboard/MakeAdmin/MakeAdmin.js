import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Box, Typography } from "@mui/material";
import CustomButton from "../../../StyledComponents/CustomButton";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount) {
          setSuccess(true);
        }
      });
    reset();
  };

  return (
    <Box>
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
        Make New Admin
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        <input
          placeholder="Enter Email Address"
          type="email"
          required
          style={{ width: "90%", padding: 10, marginTop: 10 }}
          {...register("email", { required: true })}
        />

        {success && (
          <Alert severity="success" sx={{ my: 2 }}>
            Made Admin Successfully!
          </Alert>
        )}

        <CustomButton type="submit" sx={{ mt: 2 }}>
          <i className="fas fa-user-cog"></i>&nbsp; Make Admin
        </CustomButton>
      </form>
    </Box>
  );
};

export default MakeAdmin;
