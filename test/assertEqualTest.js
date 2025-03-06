const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // should not pass
assertEqual(1, 1); // should pass
assertEqual("match", "match"); // should pass
assertEqual("1", 1); // should not pass
assertEqual(1, 2); // should not pass