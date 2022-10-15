const getUserLooksData = require("../request-models/looks/get-user-looks-model");
const postUserLooksData = require("../request-models/looks/post-user-looks-model");
const updateUserLooksData = require("../request-models/looks/update-user-looks-model");
// const deleteUser = require("./request-models/looks/delete-user-model");
const routes = {
  route: "/api/v1/looks/",
  get: getUserLooksData,
  post: postUserLooksData,
  put: updateUserLooksData,
  // remove: deleteUser,
};

module.exports = { routes };
