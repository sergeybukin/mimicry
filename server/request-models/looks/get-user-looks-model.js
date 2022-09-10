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
    const queryRows = '"closet".*, "users_looks"."looks_id", "looks"."name"';
    const queryJoin =
      'JOIN "closet_looks" ON "users_looks"."looks_id"="closet_looks"."looks_id" JOIN closet ON "closet_looks"."closet_id"="closet"."id" JOIN looks ON "users_looks"."looks_id"="looks"."id"';
    const queryCondition = 'WHERE "users_id" = $1';
    const poolQuery = `SELECT ${queryRows} FROM users_looks ${queryJoin} ${queryCondition}`;
    pool.query(poolQuery, [id], (error, results) => {
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
