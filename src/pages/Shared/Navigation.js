import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import CustomButton from "../../StyledComponents/CustomButton";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <MuiNavbar
      background="#3867d6"
      height="70px"
      navItemPosition="right"
      togglerColor="#fff"
      logo="https://classicwatchny.com/wp-content/uploads/2016/03/clwa_logo_final-01.jpg"
    >
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/exploreWatches">Explore Watches</NavItem>
      {user.email && <NavItem to="/dashboard">Dashboard</NavItem>}
      {user.email ? (
        <NavItem to="/">
          <CustomButton
            variant="contained"
            sx={{ px: 2, py: 1, fontSize: "12px" }}
            onClick={logout}
          >
            <i className="fas fa-sign-out-alt"></i> &nbsp; Logout
          </CustomButton>
        </NavItem>
      ) : (
        <NavItem to="/login">
          <CustomButton variant="contained" sx={{ px: 2, py: 1 }}>
            <i className="fas fa-sign-in-alt"></i> &nbsp; Login
          </CustomButton>
        </NavItem>
      )}
    </MuiNavbar>
  );
};

export default Navigation;
