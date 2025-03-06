const tail = require("../tail");
const assertEqual = require("../assertEqual");

assertEqual(tail([5, 6, 7]).length, 2); // should pass
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse"); // should pass
const testArr = ["Test"];
assertEqual(tail(testArr).length, 0); // should pass
const mutableTest = [1, 2, 3 ,4];
const mutated = tail(mutableTest);
assertEqual(mutableTest.length, 4); // should pass
assertEqual(mutated.length, 3); // should pass