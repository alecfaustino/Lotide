const assert = require ('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  // find a key if it matches the string 
  it("should return '4' for the key of Sagey", () => {
    const dogs = {
      1: "Fluffy",
      2: "Buddy",
      3: "Chief",
      4: "Sagey",
      5: "Bear",
    };
    const expectedOutput = "4";
    assert.strictEqual(findKey(dogs, myDog => myDog === "Sagey"), expectedOutput);
  });
  // if the value is not found in the object
  it("should return undefined if the value is not found in the object", () => {
    const dogs = {
      1: "Fluffy",
      2: "Buddy",
      3: "Chief",
      4: "Sagey",
      5: "Bear",
    };
    const expectedOutput = undefined;
    assert.strictEqual(findKey(dogs, myDog => myDog === "Mika"), expectedOutput);
  });
  // the value is an object
  it("should return 'noma' for key of {stars === 2}", () => {
    const testObj1 =   {
      BlueHill: { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    };
    const expectedOutput = "noma";
    assert.strictEqual(findKey(testObj1, x => x.stars === 2), expectedOutput);
  });
});