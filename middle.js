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

const middle = (arr) => {
  // if the array length is 1 or 2, there is no middle value. or empty.
  if (arr.length <= 2) {
    return [];
  }
  // writing the isEven function for readability;
  const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  };
  let midArr = [];
  if (isEven(arr.length)) {
    //example, if array length is 6, the middle indexes are 2 and 3
    midArr.push(arr[((arr.length / 2) - 1)]);
    midArr.push(arr[(arr.length / 2)]);
  } else {
    //example, if the array length is 5, the middle index is 2 so you round down 5/2
    midArr.push(arr[(Math.floor(arr.length / 2))]);
  }
  return midArr;
};

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(["one", "two", "three"]), ["two"]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);