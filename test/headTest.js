const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    const input = [1, 2, 3];
    const expectedOutput = 1;
    assert.strictEqual(head(input), expectedOutput);
  });

  it("returns '5' for ['5']", () => {
    const input = ['5'];
    const expectedOutput = '5';
    assert.strictEqual(head(input), expectedOutput); 
  });

  it("returns 5 for [5, 6, 7]", () => {
    const input = [5, 6, 7];
    const expectedOutput = 5;
    assert.strictEqual(head(input), expectedOutput);
  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = "Hello";
    assert.strictEqual(head(input), expectedOutput);
  });

  it("returns undefined for []", () => {
    const input = [];
    const expectedOutput = undefined;
    assert.strictEqual(head(input), expectedOutput);
  });

  it("returns 1 for [1]", () => {
    const input = [1];
    const expectedOutput = 1;
    assert.strictEqual(head(input), expectedOutput);
  });


});