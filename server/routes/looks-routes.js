const getUserLooksData = require("../request-models/looks/get-user-looks-model");
const postUserLooksData = require("../request-models/looks/post-user-looks-model");
// const updateUser = require("./request-models/looks/update-user-model");
// const deleteUser = require("./request-models/looks/delete-user-model");
const routes = {
  route: "/api/v1/looks/",
  get: getUserLooksData,
  post: postUserLooksData,
  // put: updateUser,
  // remove: deleteUser,
};

module.exports = { routes };
