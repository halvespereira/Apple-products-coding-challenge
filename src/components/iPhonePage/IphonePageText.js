import React from "react";

import "./IphonePage.scss";

const IphonePageText = ({ date }) => {
  return (
    <div className="__pageText">
      <h2>iPhone</h2>
      <h3>
        The Ultimate <br /> iPhone
      </h3>
      <h4>
        The future is here. Join the iPhone Upgrade <br /> Program to get the
        latest iPhone - NOW!
      </h4>
      <p>Starts shipping {date ? date : "..."}</p>
    </div>
  );
};

export default IphonePageText;
