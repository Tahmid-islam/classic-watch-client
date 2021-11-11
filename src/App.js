import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import ExploreWatches from "./pages/ExploreWatches/ExploreWatches";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Purchase from "./pages/Purchase/Purchase";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <Box>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/exploreWatches">
              <ExploreWatches></ExploreWatches>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </Box>
  );
}

export default App;
