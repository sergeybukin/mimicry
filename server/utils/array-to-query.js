const arrayToQuery = (arr) => {
  let query = `ARRAY `;
  arr.forEach((e, i) => {
    if (i === 0) {
      query += `["${e}",`;
    }
    if (i === arr.length - 1) {
      query += `'${e}']`;
    }
    if (i !== 0 && i !== arr.length - 1) {
      query += `'${e}',`;
    }
  });
  return query;
};

module.exports = { arrayToQuery };
