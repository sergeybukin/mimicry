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

app.get("/api/v1/current/", (req, res) => {
  const { latitude, longitude } = req.query;
  axios(
    `${process.env.BASE_URL}/current/?latitude=${latitude}&longitude=${longitude}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Gismeteo-Token": process.env.API_KEY,
      },
    }
  )
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
