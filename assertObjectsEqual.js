
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

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertObjectEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
};

const testObj = {
  name: "Alec",
  pets: ["Sage", "Mika"],
};
const testObj2 = {
  name: "Alec",
  pets: ["Sage", "Mika"],
};

const testObj3 = {
  name: "Bob",
  job: "building",
};

assertObjectEqual(testObj, testObj2); // Pass Message
assertObjectEqual(testObj, testObj3); // Fail Message