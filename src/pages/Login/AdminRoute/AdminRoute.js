import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  let { user, isLoading, isAdmin } = useAuth();

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user.email && isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default AdminRoute;
