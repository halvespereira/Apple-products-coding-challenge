import React from "react";

import "./Loading.scss";

import appleLogo from "../assets/apple-logo-black-background.png";

const Loading = () => {
  return (
    <div className="__Spinner">
      <img src={appleLogo} alt="spinner" width="150" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
