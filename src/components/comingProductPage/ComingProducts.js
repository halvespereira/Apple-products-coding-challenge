import React from "react";

import "./ComingProducts.scss";

import { useHistory } from "react-router-dom";

import appleLogo from "../assets/apple-logo.jpg";
const ComingProducts = () => {
  const history = useHistory();

  const toWelcome = () => {
    history.push("/welcome");
  };

  return (
    <div className="__ComingProducts" onClick={toWelcome}>
      <header>
        <img src={appleLogo} width="40" alt="Apple Logo" />
      </header>
      <main>
        <h4>New Products Coming This Summer</h4>
        <div className="__dates">
          <p>2019</p>
        </div>
      </main>
    </div>
  );
};

export default ComingProducts;
