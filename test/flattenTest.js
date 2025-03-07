const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it("should return ['hello', 'I', 'am', 'flattened'] for ['hello', 'I', ['am', 'flattened']]", () => {
    const input = ['hello', 'I', ['am', 'flattened']];
    const expectedOutput = ['hello', 'I', 'am', 'flattened'];
    assert.deepEqual(flatten(input), expectedOutput);
  });
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, 3, [4, 5, 6]]", () => {
    const input = [1, 2, 3, [4, 5, 6]];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(input), expectedOutput);
  });
  // test to see if it can flatten different data types at the same time.
  it("should return [1, 2, 'Word!'] for [1, 2, ['Word!']", () => {
    const input = [1, 2, ['Word!']];
    const expectedOutput = [1, 2, 'Word!'];
    assert.deepEqual(flatten(input), expectedOutput);
  });
});