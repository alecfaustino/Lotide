const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (sentence) => {
  let counts = {};
  //Without this, it counts " " as a letter and creates a key for it
  let sentenceNoSpace = sentence.split(" ").join("");
  for (const letter of sentenceNoSpace) {
    if (!counts[letter]) {
      counts[letter] = 1;
    } else {
      counts[letter] ++;
    }
  }
  return counts;
};

const resultTest1 = countLetters("alec is learning in 2025");
assertEqual(resultTest1["a"], 2);
assertEqual(resultTest1["2"], 2);
assertEqual(resultTest1["g"], 1);
assertEqual(resultTest1["z"], undefined);

module.exports = countLetters;