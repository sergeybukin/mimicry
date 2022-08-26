const express = require("express");
const app = express();
const axios = require("axios");
const dotenv = require("dotenv");
const postUserData = require("./request-models/post-user-model");
const getUserData = require("./request-models/get-user-model");
const updateUser = require("./request-models/update-user-model");
const deleteUser = require("./request-models/delete-user-model");

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

const routes = [
  {
    route: "/api/v1/users/",
    get: getUserData,
    post: postUserData,
    put: updateUser,
    remove: deleteUser,
  },
];

const getWeatherRoutes = [
  {
    route: "/api/v1/forecast/",
    getUrl: (params) =>
      `forecast/?latitude=${params.latitude}&longitude=${params.longitude}&days=${params.days}&lang=${params.lang}`,
  },
  {
    route: "/api/v1/current/",
    getUrl: (params) =>
      `current/?latitude=${params.latitude}&longitude=${params.longitude}&lang=${params.lang}`,
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

const requestsModel = (route, getFunc, postFunc, putFunc, deleteFunc) => {
  app
    .route(route)
    .get(function (req, res) {
      if (getFunc)
        getFunc
          .getData(req.query)
          .then((result) => {
            res.status(200).send(result);
          })
          .catch((error) => {
            res.status(500).send(error);
          });
    })
    .post(function (req, res) {
      if (postFunc)
        postFunc
          .postData(req.body)
          .then((response) => {
            res.status(200).send(response);
          })
          .catch((error) => {
            console.log(error);
            res.status(500).send(error);
          });
    })
    .put(function (req, res) {
      if (putFunc)
        putFunc
          .updateData({ body: req.body, query: req.query })
          .then((response) => {
            res.status(200).send(response);
          })
          .catch((error) => {
            console.log(error);
            res.status(500).send(error);
          });
    })
    .delete(function (req, res) {
      if (deleteFunc)
        deleteFunc
          .updateData(req.query)
          .then((response) => {
            res.status(200).send(response);
          })
          .catch((error) => {
            console.log(error);
            res.status(500).send(error);
          });
    });
};

routes.forEach(({ route, get, post, put, remove }) =>
  requestsModel(route, get, post, put, remove)
);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
