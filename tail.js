const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const tail = (arr) => {
  return arr.slice(1);
};

assertEqual(tail([5, 6, 7]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
const testArr = ["Test"];
assertEqual(tail(testArr).length, 0);
const mutableTest = [1, 2, 3 ,4];
const mutated = tail(mutableTest);
assertEqual(mutableTest.length, 4);
assertEqual(mutated.length, 3);

