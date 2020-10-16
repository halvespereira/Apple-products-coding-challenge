import React, { useState, useEffect } from "react";

import "./App.scss";

import Main from "./components/Main";
import Loading from "./components/loadingPage/Loading";
import fetchShippingDates from "./fetchData";

function App() {
  const [isUser, setIsUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shippingDates, setShippingDates] = useState(null);

  useEffect(() => {
    fetchShippingDates(setShippingDates);
    const localStorageRef = localStorage.getItem("user");

    if (localStorageRef) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, []);

  if (shippingDates) {
    return (
      <div className="App">
        <Main
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

  return <Loading />;
}

export default App;
