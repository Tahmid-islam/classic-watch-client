import {
  Container,
  Grid,
  List,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  footerStyle: {
    width: "100%",
    backgroundColor: "#3867d6",
    marginTop: "10px",
    paddingTop: "10px",
  },
  icons: {
    display: "flex",
    marginTop: "10px",
  },

  icon: {
    color: "#fff",
    paddingRight: "10px",
    fontSize: "30px",
  },
});

const Footer = () => {
  const { footerStyle, icons, icon } = useStyle();
  return (
    <footer className={footerStyle}>
      <Container>
        <Grid container spacing={6} sx={{ color: "#fff" }}>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ mb: 1, fontWeight: "bold" }}>
                ABOUT US
              </ListItemText>
              <ListItemText sx={{ textAlign: "justify" }}>
                Classic Watch Limited, a retail and a distribution house, with
                this concept started its journey in the year 2012 as a small
                entity in this country under one of the biggest conglomerates to
                be the sole enterprises to cater the world famous BRANDS of
                watches and accessories for easy access to the residents and
                citizen of Bangladesh.
              </ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ mb: 1, fontWeight: "bold" }}>
                HELP CENTER
              </ListItemText>
              <ListItemText>Contact Us</ListItemText>
              <ListItemText>Privacy Policy</ListItemText>
              <ListItemText>Warranty Information</ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ mb: 1, fontWeight: "bold" }}>
                ACCOUNT
              </ListItemText>
              <ListItemText>My Account</ListItemText>
              <ListItemText>Orders</ListItemText>
              <ListItemText>Cart</ListItemText>
              <ListItemText>Wishlist</ListItemText>
              <ListItemText>Log Out</ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ mb: 1, fontWeight: "bold" }}>
                CORPORATE ADDRESS
              </ListItemText>
              <ListItemText>
                Union Center, 68/1, Gulshan Avenue, Dhaka, Bangladesh Phone:
                01713199299 Email: info@classicwatch.com
              </ListItemText>
            </List>
            <ListItemText sx={{ mt: 1, fontWeight: "bold" }}>
              FOLLOW US
            </ListItemText>
            <Box className={icons}>
              <NavLink to="/" className={icon}>
                <i className="fab fa-facebook"></i>
              </NavLink>
              <NavLink to="/" className={icon}>
                <i className="fab fa-twitter"></i>
              </NavLink>
              <NavLink to="/" className={icon}>
                <i className="fab fa-linkedin"></i>
              </NavLink>
              <NavLink to="/" className={icon}>
                <i className="fab fa-instagram"></i>
              </NavLink>
              <NavLink to="/" className={icon}>
                <i className="fab fa-github"></i>
              </NavLink>
            </Box>
          </Grid>
        </Grid>
        <Typography
          sx={{ textAlign: "center", py: 4, color: "#fff" }}
          variant="subtitle1"
        >
          Copyright Classic Watch &copy; {new Date().getFullYear()} All Rights
          Reserved
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
