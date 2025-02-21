const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    return console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (arr) => {
  return arr.slice(1);
};

assertEqual(tail([5, 6, 7]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
