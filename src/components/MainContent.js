import React from "react";

import LoggedInRoutes from "./routes/LoggedInRoutes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./loginPage/Login";

const MainContent = ({
  email,
  setEmail,
  isUser,
  setIsUser,
  password,
  setPassword,
  shippingDates,
}) => {
  // Checking if user is logged in and rendering the adequate component using react-router-dom
  if (!isUser) {
    return (
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
  }
  return <LoggedInRoutes shippingDates={shippingDates} setIsUser={setIsUser} />;
};

export default MainContent;
