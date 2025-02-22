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


const without = (origArr, toRemoveArr) => {
  let arrWithout = [];
  for (const element of origArr) {
    if(!toRemoveArr.includes(element)) {
      arrWithout.push(element);
    }
  };
  return arrWithout;
};

//Testing 
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const testArr1 = ["Dog", "Cat", "Mouse"]
console.log(without(testArr1, ["Dog"]), testArr1);

const testArr2 = [1, 2, 3, 4]
console.log(without(testArr2, [7]), testArr2);
