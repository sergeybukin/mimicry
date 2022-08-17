const express = require("express");
const app = express();
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

const port = 3001;

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,HEAD,OPTIONS"
  );
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  next();
});

const getRoutes = [
  {
    route: "/api/v1/forecast/",
    getUrl: (params) =>
      `forecast/?latitude=${params.latitude}&longitude=${params.longitude}&days=${params.days}`,
  },
  {
    route: "/api/v1/current/",
    getUrl: (params) =>
      `current/?latitude=${params.latitude}&longitude=${params.longitude}`,
  },
];

getRoutes.forEach((item) => {
  app.get(item.route, (req, res) => {
    axios(`${process.env.BASE_URL}/${item.getUrl(req.query)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Gismeteo-Token": process.env.API_KEY,
      },
    })
      .then((result) => {
        res.status(200).send(result.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
