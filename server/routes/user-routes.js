const getUserData = require("../request-models/user/get-user-model");
const postUserData = require("../request-models/user/post-user-model");
const updateUser = require("../request-models/user/update-user-model");
const deleteUser = require("../request-models/user/delete-user-model");
const routes = {
  route: "/api/v1/users/",
  get: getUserData,
  post: postUserData,
  put: updateUser,
  remove: deleteUser,
};

module.exports = { routes };
