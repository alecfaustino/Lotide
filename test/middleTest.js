const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should pass
assertArraysEqual(middle([1, 2, 3]), [2]); // should pass
assertArraysEqual(middle(["one", "two", "three"]), ["two"]); // should pass testing if middle is string
assertArraysEqual(middle([]), []); // should pass if array empty
assertArraysEqual(middle([1]), []); // should pass if only 1 number, no middle number, empty array
assertArraysEqual(middle([1, 2]), []); // should pass if only 2 numbers in array , no mid, empty array