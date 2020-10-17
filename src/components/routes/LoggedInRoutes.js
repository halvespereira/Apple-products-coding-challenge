import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFound from "../NotFound";
import ComingProducts from "../comingProductPage/ComingProducts";
import Welcome from "../welcomePage/Welcome";
import IphonePage from "../iPhonePage/IphonePage";

// Using react-router-dom. If user is logged in, ComingProducts is always the home page.
const LoggedInRoutes = ({ shippingDates, setIsUser }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ComingProducts} />
        <Route
          path="/welcome"
          render={(props) => <Welcome {...props} setIsUser={setIsUser} />}
        />
        <Route
          path="/iphone"
          render={(props) => (
            <IphonePage
              {...props}
              setIsUser={setIsUser}
              shippingDates={shippingDates}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default LoggedInRoutes;
