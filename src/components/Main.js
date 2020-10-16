import React from "react";

import LoggedInRoutes from "./routes/LoggedInRoutes";
import LoggedOutRoute from "./routes/LoggedOutRoute";

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
      <LoggedOutRoute
        email={email}
        setEmail={setEmail}
        setIsUser={setIsUser}
        password={password}
        setPassword={setPassword}
      />
    );
  } else {
    return (
      <LoggedInRoutes shippingDates={shippingDates} setIsUser={setIsUser} />
    );
  }
};

export default Main;
