const Pool = require("pg").Pool;
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });
const pool = new Pool({
  user: process.env.USERDB,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const getData = (query) => {
  const { id } = query;
  return new Promise(function (resolve, reject) {
    const poolQuery = id
      ? 'SELECT * FROM closet WHERE "id" = $1'
      : "SELECT * FROM closet";

    const poolArguments = id ? [id] : [];
    pool.query(poolQuery, poolArguments, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

module.exports = {
  getData,
};
