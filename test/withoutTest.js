const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it("should return [2, 3] for [1, 2, 3] without [1]", () => {
    const input = [1, 2, 3];
    const expectedOutput = [2, 3];
    assert.deepEqual(without(input, [1]), expectedOutput);
  });
  //work with strings
  it("should return ['Cat', 'Mouse'] for ['Dog', 'Cat', 'Mouse'] without ['Dog']", () => {
    const input = ['Dog', 'Cat', 'Mouse'];
    const expectedOutput = ['Cat', 'Mouse'];
    assert.deepEqual(without(input, ['Dog']), expectedOutput);
  });
  // should not have anything removed if nothing matches
  it("should return [1, 2, 3, 4] for [1, 2, 3, 4] without [7]", () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [1, 2, 3, 4];
    assert.deepEqual(without(input, [7]), expectedOutput);
  });
});