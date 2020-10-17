import React from "react";

import LoggedInRoutes from "./routes/LoggedInRoutes";
// import LoggedOutRoute from "./routes/LoggedOutRoute";
import Login from "../components/loginPage/Login";

const Main = ({
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
      <Login
        email={email}
        setEmail={setEmail}
        setIsUser={setIsUser}
        password={password}
        setPassword={setPassword}
      />
      // <LoggedOutRoute
      //   email={email}
      //   setEmail={setEmail}
      //   setIsUser={setIsUser}
      //   password={password}
      //   setPassword={setPassword}
      // />
    );
  } else {
    return (
      <LoggedInRoutes shippingDates={shippingDates} setIsUser={setIsUser} />
    );
  }
};

export default Main;
