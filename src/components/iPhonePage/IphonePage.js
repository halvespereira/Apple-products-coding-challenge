import React from "react";

import "./IphonePage.scss";
import NavBar from "../navBar/Navbar";
import IphonePageBody from "./IphonePageBody";

// This page is rendered when clicking on the iPhone option in the Welcome page
const IphonePage = ({ setIsUser, shippingDates }) => {
  return (
    <div className="__iPhonePage">
      <NavBar setIsUser={setIsUser} />
      <IphonePageBody shippingDates={shippingDates} />
    </div>
  );
};

export default IphonePage;
