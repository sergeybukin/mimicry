const Pool = require("pg").Pool;
const dotenv = require("dotenv");
const { userModel } = require("../../utils/models");
const { generateUpdatingSet } = require("../../utils/utils");

dotenv.config({ path: ".env" });
const pool = new Pool({
  user: process.env.USERDB,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const updateData = ({ body, query }) => {
  return new Promise(function (resolve, reject) {
    const { user } = body;
    const { id } = query;
    const querySet = generateUpdatingSet(userModel, user);

    pool.query(
      `UPDATE users SET ${querySet} WHERE "id" = $1`,
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

module.exports = {
  updateData,
};
