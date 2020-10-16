import React from "react";

import "./IphonePage.scss";
import iPhone1 from "../assets/Iphone 1.png";
import iPhone2 from "../assets/apple-iphonexs-max-gold.png";
import iPhone3 from "../assets/apple-iphonexs-max-gold-back.png";

const IphonePageMainSection = ({ shippingDates }) => {
  const date = shippingDates.data.iphone;
  return (
    <>
      {/* Page Text */}
      <section className="__pageText">
        <h2>iPhone</h2>
        <h3>
          The Ultimate <br /> iPhone
        </h3>
        <h4>
          The future is here. Join the iPhone Upgrade <br /> Program to get the
          latest iPhone - NOW!
        </h4>
        <p>Starts shipping {date}</p>
      </section>

      {/* iPhone front and bacl images */}
      <div className="__iPhoneFrontAndBackImg">
        <img src={iPhone2} alt="iPhone front" width="72" />
        <img src={iPhone3} alt="iPhone back" width="72" />
      </div>

      {/* Bars below front and back images */}
      <div className="__bars">
        <div className="__redBar"></div>
        <div className="__grayBar"></div>
      </div>

      {/* Large iPhone image  */}
      <img
        src={iPhone1}
        alt="iPhone"
        className="__iPhoneLargeImg"
        width="370"
      />

      {/* Call to action with price */}
      <div className="__callToAction">
        <h4>From $699</h4>
        <p>Buy Now {">"} </p>
      </div>
    </>
  );
};

export default IphonePageMainSection;
