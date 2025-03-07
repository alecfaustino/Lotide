// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("where is the letter z").z, [20]);

const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return [1] for ('hello).e", () => {
    const input = "hello";
    const expectedOutput = [1];
    assert.deepEqual(letterPositions(input).e, expectedOutput);
  });
  // check if it can find the proper index in a sentence with spaces.
  it("should return [20] for ('where is the letter z').z", () => {
    const input = 'where is the letter z';
    const expectedOutput = [20];
    assert.deepEqual(letterPositions(input).z, expectedOutput);
  });
  //check if it can find the proper index with a sentence with different data types.
  it("should return [1] for ('4e1l0).e", () => {
    const input = "4e1l0";
    const expectedOutput = [1];
    assert.deepEqual(letterPositions(input).e, expectedOutput);
  });
  // check if it can return mulitple indicies for duplicate letters.
  it("should return [2, 3] for ('hello').l", () => {
    const input = "hello";
    const expectedOutput = [2, 3];
    assert.deepEqual(letterPositions(input).l, expectedOutput);
  });
});