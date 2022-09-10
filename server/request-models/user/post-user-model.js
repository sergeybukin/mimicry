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
    const { user } = body;
    const {
      id,
      token,
      name,
      age,
      gender,
      weight,
      height,
      placesHistory,
      email,
      location,
    } = user;
    const poolString =
      'INSERT INTO users ("id", "token", "name", "age", "gender", "weight", "height", "places_history", "email", "location") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';
    pool.query(
      poolString,
      [
        id,
        token,
        name,
        age,
        gender,
        weight,
        height,
        placesHistory,
        email,
        location,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new device has been added added`);
      }
    );
  });
};

module.exports = {
  postData,
};
