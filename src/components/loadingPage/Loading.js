import React from "react";

import "./Loading.scss";

import appleLogo from "../assets/apple-logo-black-background.png";

// Renders until shipping dates is fetched
const Loading = () => {
  return (
    <div className="__Loading">
      <img src={appleLogo} alt="spinner" width="150" />
      <p>Fetching data...</p>
    </div>
  );
};

export default Loading;
