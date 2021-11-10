import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Navigation from "./pages/Shared/Navigation";
import Footer from "./pages/Shared/Footer";
import ExploreWatches from "./pages/ExploreWatches/ExploreWatches";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Purchase from "./pages/Purchase/Purchase";

function App() {
  return (
    <Box>
      <Router>
        <Navigation />
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
          <Route path="/purchase/:id">
            <Purchase></Purchase>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Box>
  );
}

export default App;
