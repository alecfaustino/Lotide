const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    return;
  } 
  console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);

};
// ------------

const map = (arr, fn) => {
  const results = [];
  for(let item of arr) {
    results.push(fn(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, (word => word[0])), ['g', 'c', 't', 'm', 't']);
const nums = [1, 2, 3, 4];
assertArraysEqual(map(nums, (x) => x * 2), [2, 4, 6, 8]);
const toDetermineEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
assertArraysEqual(map(toDetermineEven, (x) => x % 2 === 0), [false, true, false, true, false, true, false, true, false, true]);





