import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Navigation from "./pages/Shared/Navigation";
import Footer from "./pages/Shared/Footer";

const watches = [
  {
    name: "",
  },
];

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
          <Route path="/explore"></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Box>
  );
}

export default App;
