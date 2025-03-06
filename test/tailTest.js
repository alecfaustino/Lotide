const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  //test if returns the proper amount of elements
  it("should return new array with length 2 for [5, 6, 7]", () => {
    const input = [5, 6, 7];
    const expectedOutput = 2;
    assert.strictEqual(tail(input).length, expectedOutput);
  });
  //test what the first element is of the new tail array
  it("should return 'Lighthouse' for tail(['Hello', 'Lighthouse', 'Labs'])[0]", () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = "Lighthouse";
    assert.strictEqual(tail(input)[0], expectedOutput);
  });
  it("should return [2, 3, 4] for [1, 2, 3, 4]", () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [2, 3, 4];
    assert.deepEqual(tail(input), expectedOutput);
  });
  //test ability to return tail of array with different data types
  it("should return ['two', 3, 4, 'five'] for [1,'two', 3, 4, 'five']", () => {
    const input = [1,'two', 3, 4, 'five'];
    const expectedOutput = ['two', 3, 4, 'five'];
    assert.deepEqual(tail(input), expectedOutput);
  });

});