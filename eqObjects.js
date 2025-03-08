const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  const keysOfFirst = (Object.keys(object1).sort()); // an array of keys
  const keysOfSecond = (Object.keys(object2).sort());
  if (keysOfFirst.join() !== keysOfSecond.join()) { // to compare if the keys are the same in both I need to covert to string
    return false;
  }
  for (const keys in object1) {
    const valueObj1 = object1[keys];
    const valueObj2 = object2[keys];
    if (Array.isArray(valueObj1) && Array.isArray(valueObj2)) {
      if (!eqArrays(valueObj1, valueObj2)) {
        return false;
      }
    } else if (valueObj1 !== valueObj2) {
      return false;
    }
  }

  return true;

};
module.exports = eqObjects;