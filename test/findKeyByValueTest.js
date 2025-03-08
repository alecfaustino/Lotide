const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };
  it("should return 'drama' for 'The Wire", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  //check to see if it doesn't return any key if value does not exist.
  it("should return undefined for 'That 70s Show'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);
  });
});