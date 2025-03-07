const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];

  const namesToCount = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: true
  });
  it("should return 1 for 'Jason'", () => {
    const input = namesToCount["Jason"];
    const expectedOutput = 1;
    assert.strictEqual(input, expectedOutput);
  });
  // should not count names that are not in the original array
  it("should return undefined for 'Karima", () => {
    const input = namesToCount["Karima"];
    const expectedOutput = undefined;
    assert.strictEqual(input, expectedOutput);
  });

  it("should return 2 for 'Fang'", () => {
    const input = namesToCount["Fang"];
    const expectedOutput = 2;
    assert.strictEqual(input, expectedOutput);
  });

});
