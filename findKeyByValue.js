const findKeyByValue = (obj, value) => {
  for (const keys in obj) {
    if (obj[keys] === value) {
      return keys;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;