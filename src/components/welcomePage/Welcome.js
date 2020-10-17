import React from "react";

import { Link } from "react-router-dom";

import NavBar from "../navBar/Navbar";
import "./Welcome.scss";

import appleIcon from "../assets/iphone-icon.jpg";

// Welcome page. This is rendered when clicking anywhere in the Coming Products page.
const Welcome = ({ setIsUser }) => {
  return (
    <div className="__Welcome">
      <NavBar setIsUser={setIsUser} />
      <main></main>
      <Link className="__appleIcon" to="/iphone">
        <img src={appleIcon} alt="Apple Icon" width="15" />
      </Link>
      <h1>Welcome to Apple</h1>
      <p>See our Products</p>
    </div>
  );
};

export default Welcome;
