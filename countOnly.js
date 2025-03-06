const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = (allItemsArr, itemsToCountObj) => { // change param names
  const results = {};
  for (const item of allItemsArr) {
    // if I don't add the &&, it asserts the last test as fail because it DOES have that name, but we don't want to count it. We only want to count it if it is true.
      if (itemsToCountObj.hasOwnProperty(item) && (itemsToCountObj[item])) {
      // if the item is not yet in the results object, start the count at 1
      if (!results[item]) { 
        results[item] = 1;
      } else {
        // if it is already in the object, increment by 1.
        results[item] ++;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
