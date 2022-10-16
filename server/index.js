const express = require("express");
const app = express();
const axios = require("axios");
const dotenv = require("dotenv");
const postUserData = require("./post-user-model");
const getUserData = require("./get-user-model");

const bodyParser = require("body-parser");

dotenv.config({ path: "config.env" });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

const getWeatherRoutes = [
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

getWeatherRoutes.forEach((item) => {
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

const postDBRoutes = [
  {
    route: "/api/v1/users/",
    model: postUserData,
  },
];

const getDBRoutes = [
  {
    route: "/api/v1/users/",
    model: getUserData,
  },
];

const getDBDataModel = (route, model) => {
  app.get(route, (req, res) => {
    model
      .getData(req.query)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });
};

const postDBDataModel = (route, model) => {
  app.post(route, (req, res) => {
    model
      .postData(req.body)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send(error);
      });
  });
};

postDBRoutes.forEach(({ route, model }) => {
  postDBDataModel(route, model);
});

getDBRoutes.forEach(({ route, model }) => {
  getDBDataModel(route, model);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
