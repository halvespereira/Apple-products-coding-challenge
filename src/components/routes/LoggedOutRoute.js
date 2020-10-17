import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../loginPage/Login";

const LoggedOutRoute = ({
  email,
  setEmail,
  setIsUser,
  password,
  setPassword,
}) => {
  return (
    // When user is logged out, the login page is rendered.
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Login
              {...props}
              email={email}
              setEmail={setEmail}
              setIsUser={setIsUser}
              password={password}
              setPassword={setPassword}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default LoggedOutRoute;
