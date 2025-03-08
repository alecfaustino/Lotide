const assert = require ('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  // work with number arrays
  it("should return [1, 2, 5, 7 ,2] for [1, 2, 5, 7, 2, -1, 2, 4, 5] x < 0", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const expectedOutput = [1, 2, 5, 7, 2];
    assert.deepEqual(takeUntil(data1, x => x < 0), expectedOutput);
  });
  // work with strings in arrays
  it("should return ['Fluffy', 'Candy', 'Chief', 'Buddy'] for ['Fluffy', 'Candy', 'Chief', 'Buddy', 'Sagey', 'Daisy'] dog === 'Sagey", () => {
    const dogs = ['Fluffy', 'Candy', 'Chief', 'Buddy', 'Sagey', 'Daisy'];
    const expectedOutput = ['Fluffy', 'Candy', 'Chief', 'Buddy'];
    assert.deepEqual(takeUntil(dogs, dog => dog === "Sagey"), expectedOutput);
  });
});