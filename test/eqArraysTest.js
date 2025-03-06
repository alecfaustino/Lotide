const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // [ 1, 2, 3 ] === [ 1, 2, 3 ] should pass
assertEqual(eqArrays([], []), true); // [] === [] should pass
assertEqual(eqArrays([1, 2, 3], [ "1", "2", "3"]), false); // should pass because 1 array is of numbers vs the other is of strings
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // should pass because one array contains more elements and we're checking to see if the function doesn't get a false positive after all of arr1 is checked.
assertEqual(eqArrays(["Name1", "Name2", 3], ["Name1", "Name2", 3]), true); // should pass we're checking to see if it can effectively check arrays with different data types. 