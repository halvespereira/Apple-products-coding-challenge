import React from "react";

import "./IphonePage.scss";
import NavBar from "../navBar/Navbar";
import IphonePageBody from "./IphonePageBody";
import Loading from "../loadingPage/Loading";

// This page is rendered when clicking on the iPhone option in the Welcome page
const IphonePage = ({ setIsUser, shippingDates }) => {
  if (shippingDates) {
    return (
      <div className="__iPhonePage">
        <NavBar setIsUser={setIsUser} />
        <IphonePageBody shippingDates={shippingDates} />
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default IphonePage;
