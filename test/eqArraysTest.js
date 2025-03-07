const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it("should return true for [1, 2, 3] and [1 ,2 ,3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  // check if it can match empty arrays
  it("should return true for [] and []", () => {
    assert.strictEqual(eqArrays([], []), true);
  });
  // check if it looks at data types
  it("should return false for [1, 2, 3] and ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays([1, 2, 3], ['1', '2', '3']), false);
  });
  // check if it can correctly compare arrays of different lengths even if initial elements match
  it("should return false for [1, 2, 3] and [1, 2, 3, 4]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
  // check if it can correctly compare arrays of different data types
  it("should return true for ['name1', 'name2', 3] and ['name1', 'name2', 3]", () => {
    assert.strictEqual(eqArrays(['name1', 'name2', 3], ['name1', 'name2', 3]), true);
  });
});