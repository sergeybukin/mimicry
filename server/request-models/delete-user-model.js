const Pool = require("pg").Pool;
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
const pool = new Pool({
  user: process.env.USERDB,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const removeData = (query) => {
  return new Promise(function (resolve, reject) {
    const { id } = query;
    pool.query('DELETE FROM users WHERE "id" = $1', [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = {
  removeData,
};
