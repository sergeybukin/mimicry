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

const postData = (body) => {
  return new Promise(function (resolve, reject) {
    const { lookId, clothesArr, userId, lookName } = body;
    const queryArrPosition = (arr) =>
      JSON.stringify(arr).replace("[", "{").replace("]", "}");
    const mapClosetValues = clothesArr.map(
      (e) =>
        `('${e.id}', '${lookId}', '${queryArrPosition(e.position)}', '${
          e.color
        }')`
    );
    const insertLooks = `INSERT into looks VALUES('${lookId}', '${lookName}');`;
    const insertClosetLooks = `INSERT into closet_looks VALUES ${mapClosetValues.join(
      ","
    )};`;
    const insertUserLooks = `INSERT into users_looks VALUES('${userId}', '${lookId}');`;
    const updateUser = `UPDATE users SET looks_list = append_unique(looks_list, '{${lookId}}') WHERE "id" = '${userId}';`;
    const poolString =
      insertLooks +
      " " +
      insertClosetLooks +
      " " +
      insertUserLooks +
      " " +
      updateUser;
    pool.query(poolString, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = {
  postData,
};
