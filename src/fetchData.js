import axios from "axios";

// Utilizing Heroku anywhere to enable cross-origin requests
const endpoint =
  "https://cors-anywhere.herokuapp.com/https://boalt-interview.herokuapp.com/api/shipping-dates";

// Using axios package to fetch data
const fetchShippingDates = async (setShippingDates) => {
  try {
    const res = await axios.get(endpoint);
    setShippingDates(res);
  } catch (err) {
    console.log(err);
  }
};

export default fetchShippingDates;
