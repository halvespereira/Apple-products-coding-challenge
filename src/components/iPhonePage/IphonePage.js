import React from "react";

import "./IphonePage.scss";
import NavBar from "../navBar/Navbar";
import IphonePageMainSection from "./IphonePageMainSection";

const IphonePage = ({ setIsUser, shippingDates }) => {
  return (
    <div className="__iPhonePage">
      <NavBar setIsUser={setIsUser} />
      <IphonePageMainSection shippingDates={shippingDates} />
    </div>
  );
};

export default IphonePage;
