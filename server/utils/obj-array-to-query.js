const toQuery = (arr) => {
  const keys = Object.keys(arr[0]);
  const str = (e, key) => {
    if (typeof e[key] === "string") {
      return e[key].includes("'")
        ? `'${e[key].replace("'", "''")}'`
        : `'${e[key]}'`;
    } else {
      return e[key];
    }
  };
  return arr.map((e) => {
    let string = "";
    keys.forEach((key, i) => {
      if (i < keys.length - 1) {
        string = `${string + str(e, key)},`;
      } else {
        string = `${string + str(e, key)}`;
      }
    });
    return "(" + string + ")";
  });
};
module.exports = { toQuery };
