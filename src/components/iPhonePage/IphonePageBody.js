import React from "react";

import "./IphonePage.scss";
import IphoneFrontBack from "./IphoneFrontBackImage";
import IphonePageText from "./IphonePageText";
import IphoneCallToAction from "./IphoneCallToAction";
import IphoneLargeImage from "./IphoneLargeImage";

const IphonePageBody = ({ shippingDates }) => {
  // Shipping date fetched from endpoint provided
  const date = shippingDates.data.iphone;
  return (
    <>
      {/* Page Text */}
      <IphonePageText date={date} />

      {/* Front and back iPhone images with bars underneath */}
      <IphoneFrontBack />

      {/* Large iPhone image on the right side of page */}
      <IphoneLargeImage />

      {/* Call to action with price */}
      <IphoneCallToAction />
    </>
  );
};

export default IphonePageBody;
