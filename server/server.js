const axios = require("axios");

export const getData = () => {
  axios(`${process.env.BASE_URL}/current/?latitude=54.35&longitude=52.52`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Gismeteo-Token": "6298917a0d3594.30186641",
    },
  })
    .then((response) => response.data)
    .catch((error) => error);
};
