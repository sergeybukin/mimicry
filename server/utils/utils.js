const transformJsonToSingleQuotes = (json) => {
  const unquoted = json.replace(/"([^"]+)":/g, "$1:");
  return unquoted.replace(/"/g, "'");
};

const generateUpdatingSet = (model, obj) => {
  let set = "";
  for (let key in obj) {
    let arr;
    if (Array.isArray(obj[key])) {
      arr = obj[key].map((object) => `'${JSON.stringify(object)}'`);
    }

    if (arr) {
      set += `"${model[key]}" = (array[ ${arr} ]::json[]),`;
    } else {
      set += `"${model[key]}" = '${JSON.stringify(obj[key])}',`;
    }
  }
  return set.substring(0, set.length - 1);
};

module.exports = { generateUpdatingSet, transformJsonToSingleQuotes };
