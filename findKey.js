const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// ----

const findKey = (obj, fn) => {
  for (const key in obj) {
    const value = obj[key]; // store value of key in a variable
    if (fn(value)) { // if it's true
      return key;
    }
  }
};

const testObj1 =   {
  BlueHill: { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

assertEqual(findKey(testObj1, x => x.stars === 2), "noma"); // noma

const dogs = {
  1: "Fluffy",
  2: "Buddy",
  3: "Chief",
  4: "Sagey",
  5: "Bear",
};
assertEqual(findKey(dogs, myDog => myDog === "Sagey"), "4"); // "4" as a string since keys are strings
assertEqual(findKey(dogs, myDog => myDog === "Mika"), undefined);
