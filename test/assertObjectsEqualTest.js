const assertObjectEqual = require('../assertObjectsEqual');

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