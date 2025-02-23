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

const flatten = (arr) => {
  let flattened = [];
  for (const value of arr) {
    if (Array.isArray(value)) {
      flattened.push(...value);
    } else {
      flattened.push(value);
    }
  }
  return flattened;
};


assertArraysEqual(flatten(["hello", "I", ["am", "flattened"]]), ["hello", "I", "am", "flattened"]);
assertArraysEqual(flatten([1, 2, 3, [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, ["Word!"]]), [1, 2, "Word!"]);