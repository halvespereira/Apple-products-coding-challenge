import React from "react";

import "./NavBar.scss";
import { Link, useHistory } from "react-router-dom";
import appleLogo from "../assets/apple-logo-black-background.png";

const NavBar = ({ setIsUser }) => {
  const history = useHistory();

  // Deletes the user info from local storage and takes the user back to the login page
  const logOut = () => {
    localStorage.removeItem("user");
    setIsUser(false);
    history.push("/");
  };

  return (
    <nav>
      <Link to="/" className="__logo">
        <img src={appleLogo} alt="Apple Logo - Home button" width="100" />
      </Link>
      <div className="__navLinks">
        <Link to="/iphone">iPhone</Link>
        <button onClick={logOut}>Log Out</button>
      </div>
    </nav>
  );
};

export default NavBar;
