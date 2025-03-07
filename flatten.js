const flatten = (arr) => {
  let flattened = [];
  for (const value of arr) {
    if (Array.isArray(value)) {
      flattened.push(...value);
    } else {
      flattened.push(value);
    }
  }
  return flattened;
};

module.exports = flatten;