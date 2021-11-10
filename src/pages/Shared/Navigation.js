import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import CustomButton from "../../StyledComponents/CustomButton";

const Navigation = () => {
  return (
    <MuiNavbar
      background="#3c6382"
      height="70px"
      navItemPosition="right"
      togglerColor="black"
      logo="https://classicwatchny.com/wp-content/uploads/2016/03/clwa_logo_final-01.jpg"
    >
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/exploreWatches">Explore Watches</NavItem>
      <NavItem to="/login">
        <CustomButton variant="contained" sx={{ px: 2, py: 1 }}>
          <i className="fas fa-sign-in-alt"></i> &nbsp; Login
        </CustomButton>
      </NavItem>
    </MuiNavbar>
  );
};

export default Navigation;
