import React from "react";

import { useHistory } from "react-router-dom";

import LoginForm from "./LoginForm";

const Login = ({ email, setEmail, setIsUser, password, setPassword }) => {
  const history = useHistory();
  const userLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Must enter email and password");
    } else {
      const obj = {
        email,
        password,
      };

      localStorage.setItem("user", JSON.stringify(obj));
      setIsUser(true);
      history.push("/");

      setPassword("");
      setEmail("");
    }
  };

  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      userLogin={userLogin}
    />
  );
};

export default Login;
