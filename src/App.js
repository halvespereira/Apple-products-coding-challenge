import React, { useState, useEffect } from "react";

import "./App.scss";

import Main from "./components/Main";
import Loading from "./components/loadingPage/Loading";
import fetchShippingDates from "./fetchData";

function App() {
  // Entire state for the application in the App component
  const [isUser, setIsUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shippingDates, setShippingDates] = useState(null);

  useEffect(() => {
    // fetching shipping dates using the endpoint provided. This function is located in the fetchData.js file
    fetchShippingDates(setShippingDates);

    // Using local storage to maintain a session and also to log in user
    const localStorageRef = localStorage.getItem("user");

    // User stays logged in if the isUser state is true. Also used to maintain session
    localStorageRef ? setIsUser(true) : setIsUser(false);
  }, []);

  if (shippingDates) {
    return (
      <div className="App">
        {/* Main component triggered once response from API is successfully fetched */}
        <Main
          // Passing down all the state as well as response from API
          email={email}
          setEmail={setEmail}
          isUser={isUser}
          setIsUser={setIsUser}
          password={password}
          setPassword={setPassword}
          shippingDates={shippingDates}
        />
      </div>
    );
  }

  // Loading component is rendered while shipping dates is being fetched
  return <Loading />;
}

export default App;
