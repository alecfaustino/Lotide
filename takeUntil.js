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

// ----

const takeUntil = (arr, fn) => {
  const resultArr = [];
  for(let value of arr) {
    if (fn(value)) {
      return resultArr;
    }
    resultArr.push(value);
  }
  return resultArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
const dogs = ['Fluffy', 'Candy', 'Chief', 'Buddy', 'Sagey', 'Daisy'];
assertArraysEqual(takeUntil(dogs, dog => dog === "Sagey"), ['Fluffy', 'Candy', 'Chief', 'Buddy']);
const numbers = [1, 3, 5, 8, 9];
assertArraysEqual(takeUntil(numbers, x => x % 2 === 0), [1, 3, 5]);
