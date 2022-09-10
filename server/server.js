const express = require("express");
const app = express();
const axios = require("axios");
const dotenv = require("dotenv");
const weatherRoutes = require("./routes/weather-routes");
const userRoutes = require("./routes/user-routes");
const looksRoutes = require("./routes/looks-routes");
const closetRoutes = require("./routes/closet-routes");

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

const routes = [userRoutes.routes, looksRoutes.routes, closetRoutes.routes];

weatherRoutes.get.forEach((item) => {
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
