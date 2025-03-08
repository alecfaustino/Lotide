const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  // return first letter of each word
  it("should return ['g', 'c', 't', 'm', 't'] for map word[0] ['ground', 'control', 'to', 'major', 'tom']", () => {
    const input = ['ground', 'control', 'to', 'major', 'tom'];
    const expectedOutput = ['g', 'c', 't', 'm', 't'];
    assert.deepEqual(map(input, (word => word[0])), expectedOutput);
  });
  // double each value
  it("should return [2, 4, 6, 8] for x => x * 2 on [1, 2, 3, 4]", () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [2, 4, 6, 8];
    assert.deepEqual(map(input, (x => x * 2)), expectedOutput);
  });
  // return an array of booleans to determine if each number is even
  it("should return [false, true, false, true] determining if [1, 2, 3, 4] is even", () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [false, true, false, true];
    assert.deepEqual(map(input, (x => x % 2 === 0)), expectedOutput);
  });
});