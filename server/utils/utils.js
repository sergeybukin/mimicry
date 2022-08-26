const generateUpdatingSet = (model, obj) => {
  let set = "";
  for (let key in obj) {
    set += `"${model[key]}" = '${JSON.stringify(obj[key])}',`;
  }
  return set.substring(0, set.length - 1);
};

module.exports = { generateUpdatingSet };
