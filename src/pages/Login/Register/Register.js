import React, { useEffect } from "react";
import {
  Alert,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useLocation, useHistory, Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import CustomButton from "../../../StyledComponents/CustomButton";

const Register = () => {
  const { user, registerUser, isLoading, error, signInWithGoogle, setError } =
    useAuth();

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    registerUser(data.email, data.password, data.name, location, history);
    reset();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{ textAlign: "center", height: "100vh", mt: 10 }}
      >
        <Grid item xs={12} md={6}>
          <img
            width="100%"
            src="https://i.ibb.co/wY39tmS/undraw-authentication-fsn5.png"
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
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
            Register
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
              placeholder="Enter Your Email"
              type="email"
              required
              style={{ width: "90%", padding: 10, marginTop: 10 }}
              {...register("email", { required: true })}
            />

            <input
              type="password"
              placeholder="Enter Your Password"
              autoComplete="password"
              minLength="6"
              required
              style={{ width: "90%", padding: 10, marginTop: 10 }}
              {...register("password", { required: true })}
            />
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success" sx={{ my: 1 }}>
                Register Successfully!
              </Alert>
            )}
            {error && (
              <Alert severity="error" sx={{ my: 1 }}>
                {error}
              </Alert>
            )}
            <CustomButton type="submit" sx={{ mt: 2 }}>
              <i className="fas fa-sign-in-alt"></i>&nbsp;Register
            </CustomButton>
          </form>
          <Link
            style={{ textDecoration: "none" }}
            to="/login"
            onClick={() => setError("")}
          >
            <Typography variant="body2" sx={{ fontWeight: "bold", pt: 2 }}>
              Already have an account? Please Login
            </Typography>
          </Link>
          <hr />
          <CustomButton onClick={handleGoogleSignIn} variant="contained">
            <i className="fab fa-google"></i>&nbsp;Google Sign In
          </CustomButton>
          <br />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
