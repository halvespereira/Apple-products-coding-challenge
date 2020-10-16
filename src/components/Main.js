import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFound from "./NotFound";
import ComingProducts from "./ComingProducts";
import Login from "./Login";
import Welcome from "./Welcome";
import Iphone from "./Iphone";

const Main = ({
  email,
  setEmail,
  isUser,
  setIsUser,
  password,
  setPassword,
  shippingDates,
}) => {
  if (!isUser) {
    return (
      <Login
        email={email}
        setEmail={setEmail}
        setIsUser={setIsUser}
        password={password}
        setPassword={setPassword}
      />
    );
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <ComingProducts {...props} shippingDates={shippingDates} />
            )}
          />
          <Route path="/welcome" render={(props) => <Welcome {...props} />} />
          <Route path="/iphone" component={Iphone} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default Main;
