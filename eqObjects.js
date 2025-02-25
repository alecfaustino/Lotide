const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

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

const eqObjects = (object1, object2) => {
  const keysOfFirst = (Object.keys(object1).sort()); // an array of keys
  const keysOfSecond = (Object.keys(object2).sort());
  if (keysOfFirst.join() !== keysOfSecond.join()) { // to compare if the keys are the same in both
    return false;
  }
  for (const keys in object1) {
    const valueObj1 = object1[keys];
    const valueObj2 = object2[keys];
    if (Array.isArray(valueObj1) && Array.isArray(valueObj2)) {
      if (!eqArrays(valueObj1, valueObj2)) {
        return false;
      }
    } else if (valueObj1 !== valueObj2) {
      return false;
    }
  }

  return true;

};

//primitive only test 1
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
//primitie only test 2
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
// array as values test 1
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
// array as values test 2
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);