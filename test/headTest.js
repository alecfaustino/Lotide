const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5, 6, 7]), 5); // should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // should pass
assertEqual(head([]), undefined); // should pass
assertEqual(head([1]), 1); // should pass
assertEqual(head(["1"]), 1); // should not pass