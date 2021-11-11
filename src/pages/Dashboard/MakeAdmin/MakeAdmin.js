import React from "react";
import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../../StyledComponents/CustomButton";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
          color: "#3C6382",
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

        <CustomButton type="submit" sx={{ mt: 2 }}>
          <i className="fas fa-sign-in-alt"></i>&nbsp; Make Admin
        </CustomButton>
      </form>
    </Box>
  );
};

export default MakeAdmin;
