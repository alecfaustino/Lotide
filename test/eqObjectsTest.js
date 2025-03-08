const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  // test for primitives only
  it("should return true for { color: 'red', size: 'medium' } and { size: 'medium', color: 'red' }", () => {
    const shirtObject = { color: 'red', size: 'medium' };
    const anotherShirtObject = { size: 'medium', color: 'red' };
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  // test for primitives not matching
  it("should return false for { color: 'red', size: 'medium' } and { size: 'medium', color: 'red', sleeveLength: 'long' }", () => {
    const longSleeveShirtObject = { size: 'medium', color: 'red', sleeveLength: 'long' };
    const shirtObject = { color: 'red', size: 'medium' };
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  // test for arrays as values
  it("should return true for { colors: ['red', 'blue'], size: 'medium' } and { size: 'medium', colors: ['red', 'blue'] }", () => {
    const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' };
    const anotherMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'] };
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  // test for arrays as values not matching
  it("should return false for { colors: ['red', 'blue'], size: 'medium' } and { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' }", () => {
    const longSleeveMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' };
    const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' };
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
    
});