const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  //test for basic functionality for even length arrays to return array with 2 elements
  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [3, 4];
    assert.deepEqual(middle(input), expectedOutput);
  });
  //test for basic functionality for odd even arrays to return array with 1 element
  it("should return [2] for [1, 2, 3]", () => {
    const input = [1, 2, 3];
    const expectedOutput = [2];
    assert.deepEqual(middle(input), expectedOutput);
  });
  //test for ability to return middle value for an array of strings
  it("should return 'two' for ['one', 'two', 'three']", () => {
    const input = ["one", "two", "three"];
    const expectedOutput = ['two'];
    assert.deepEqual(middle(input), expectedOutput);
  });
  //test for ability to return middle value for an array of different data types
  it("should return 'two' for [1, 'two', 3]", () => {
    const input = [1, 'two', 3];
    const expectedOutput = ['two'];
    assert.deepEqual(middle(input), expectedOutput);
  });
  //test for ability to return empty array if input array is empty
  it("should return '[]' for []", () => {
    const input = [];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });
  //test for ability to return empty array if input array has 1 element
  it("should return [] for [1]", () => {
    const input = [1];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });
  //test for ability to return empty array if input array has 2 elements
  it("should return [] for [1, 2]", () => {
    const input = [1, 2];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });

});