const findKey = (obj, fn) => {
  for (const key in obj) {
    const value = obj[key]; // store value of key in a variable
    if (fn(value)) { // if it's true
      return key;
    }
  }
};

module.exports = findKey;
