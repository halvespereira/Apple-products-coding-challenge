import React from "react";

import "./IphonePage.scss";
import iPhone2 from "../assets/apple-iphonexs-max-gold.png";
import iPhone3 from "../assets/apple-iphonexs-max-gold-back.png";

const IphoneFrontBackImage = () => {
  return (
    <>
      {/* iPhone front and back images */}
      <div className="__iPhoneFrontAndBackImg">
        <img src={iPhone2} alt="iPhone front" width="72" />
        <img src={iPhone3} alt="iPhone back" width="72" />
      </div>

      {/* Bars below front and back images */}
      <div className="__bars">
        <div className="__redBar"></div>
        <div className="__grayBar"></div>
      </div>
    </>
  );
};

export default IphoneFrontBackImage;
