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


const letterPositions = (sentence) => {
  let positions = {};
  for (let i = 0; i < sentence.length; i++) {
    // let letter = sentence[i];
    if (sentence[i] !== " ") {
      if (!positions[sentence[i]]) {
        positions[sentence[i]] = [i];
      } else {
        positions[sentence[i]].push(i);
      }
    }
  }
  return positions;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("where is the letter z").z, [20]);
