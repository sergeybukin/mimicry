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

const updateData = ({ body, query }) => {
  return new Promise(function (resolve, reject) {
    const { lookName, clothesArr } = body;
    const { lookId } = query;

    const queryArrPosition = (arr) =>
      JSON.stringify(arr).replace("[", "{").replace("]", "}");
    const updateSet = clothesArr.map(
      (e) => `('${e.id}', '${queryArrPosition(e.position)}', '${e.color}')`
    );

    const qFields = "color = c.color, clothes_position = c.position::real[]";
    const qConditions = `cl.closet_id = c.closet_id AND looks_id = '${lookId}'`;
    const updateClosetLooks = `UPDATE closet_looks AS cl SET ${qFields} FROM (VALUES ${updateSet}) AS c(closet_id, position, color ) WHERE ${qConditions};`;
    const updateLookName = lookName
      ? `UPDATE looks SET name = '${lookName}' WHERE id = '${lookId}';`
      : "";

    pool.query(`${updateClosetLooks} ${updateLookName}`, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = {
  updateData,
};
