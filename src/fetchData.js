import axios from "axios";

const endpoint =
  "https://cors-anywhere.herokuapp.com/https://boalt-interview.herokuapp.com/api/shipping-dates";

const fetchShippingDates = async (setShippingDates) => {
  try {
    const res = await axios.get(endpoint);
    setShippingDates(res);
  } catch (err) {
    console.log(err);
  }
};

export default fetchShippingDates;
