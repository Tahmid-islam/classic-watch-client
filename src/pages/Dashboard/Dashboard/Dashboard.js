import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useAuth from "../../../hooks/useAuth";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";
import AllOrders from "../AllOrders/AllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import AddProduct from "../AddProduct/AddProduct";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";

const style = {
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "black",
};

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { user, logout, isAdmin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Dashboard = (
    <div>
      <Toolbar />
      <List>
        <Divider />
        <NavLink to="/" style={style}>
          <ListItem>
            <img
              src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/96/iconmonstr-home-6.png"
              alt=""
              width="20%"
            />
            &nbsp; Home
          </ListItem>
        </NavLink>
      </List>

      <List>
        <Divider />
        <NavLink to={`${url}`} style={style}>
          <ListItem>
            <img
              src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/96/iconmonstr-monitoring-10.png"
              alt=""
              width="20%"
            />
            &nbsp; Dashboard
          </ListItem>
        </NavLink>
        {!isAdmin && (
          <>
            <NavLink to={`${url}/myOrders`} style={style}>
              <ListItem>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/96/iconmonstr-shopping-cart-3.png"
                  alt=""
                  width="20%"
                />
                &nbsp; My Orders
              </ListItem>
            </NavLink>
            <NavLink to={`${url}/review`} style={style}>
              <ListItem>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/96/iconmonstr-star-3.png"
                  alt=""
                  width="20%"
                />
                &nbsp; Review
              </ListItem>
            </NavLink>
            <NavLink to={`${url}/pay`} style={style}>
              <ListItem>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/96/iconmonstr-banknote-15.png"
                  alt=""
                  width="20%"
                />
                &nbsp; Pay
              </ListItem>
            </NavLink>
          </>
        )}
      </List>

      {/* admin part */}
      {isAdmin && (
        <List>
          <Divider />
          <NavLink to={`${url}/makeAdmin`} style={style}>
            <ListItem>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/96/iconmonstr-user-8.png"
                alt=""
                width="20%"
              />
              &nbsp; Make Admin
            </ListItem>
          </NavLink>
          <NavLink to={`${url}/allOrders`} style={style}>
            <ListItem>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/96/iconmonstr-delivery-10.png"
                alt=""
                width="20%"
              />
              &nbsp; Manage All Orders
            </ListItem>
          </NavLink>
          <NavLink to={`${url}/manageProducts`} style={style}>
            <ListItem>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2019/96/iconmonstr-product-13.png"
                alt=""
                width="20%"
              />
              &nbsp; Manage Products
            </ListItem>
          </NavLink>
          <NavLink to={`${url}/AddProduct`} style={style}>
            <ListItem>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2019/96/iconmonstr-product-9.png"
                alt=""
                width="20%"
              />
              &nbsp; Add Product
            </ListItem>
          </NavLink>
        </List>
      )}

      <List>
        <Divider />
        <NavLink to="/" style={style} onClick={logout}>
          <ListItem>
            <img
              src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/96/iconmonstr-log-out-14.png"
              alt=""
              width="20%"
            />
            &nbsp; Logout
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#3c6382",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            width="60px"
            src="https://classicwatchny.com/wp-content/uploads/2016/03/clwa_logo_final-01.jpg"
            alt=""
          />
          &nbsp;
          <Typography variant="h6" noWrap component="div" sx={{ py: 3 }}>
            {user.displayName}'s Dashboard {isAdmin && "(Admin)"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {Dashboard}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {Dashboard}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/allOrders`}>
            <AllOrders></AllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
