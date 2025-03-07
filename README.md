# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @alecfaustino/lotide`

**Require it:**

`const _ = require('@alecfaustino/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `eqArrays(arr1, arr2)`: Will return a boolean indicating if two arrays are equal. 
- `assertArraysEqual(arr1, arr2)`: Will log an assertion if two arrays are equal.
- `eqObj(obj1, obj2)`: Will return a boolean indicating if two objects are equal. 
- `assertObjectsEqual(obj1, obj2)`: Will log an assertion if two objects are equal.
- `assertEqual(actual, expected)`: Will log an assertion if two values are strictly equal.
- `countLetters(sentence)`: Will return a frequency map of letters.
- `countOnly(allItemsArr, itemsToCountObj)`: Will count items in an array. Counted items specified in an object.
- `findKey(obj, fn)`: Will find a key that is true for the function passed.
- `findKeyByValue(obj, value)`: Will find a key that matches the value passed.
- `flatten(arr)`: Will create a new array with all the sub arrays concatenated into it.
- `head(arr)`: Will return the first element of an array.
- `middle(arr)`: Will return the middle element(s) of an array. 
- `tail(arr)`: Will return the last element of an array. 
- `letterPositions(sentence)`: Will return a map of letter and their array of indicies in the original sentence. 
- `map(arr, fn)`: Will return a new array after the callback is called on each element of original array.
- `takeUntil(arr, fn)`: Will return a new array of elements from original until the first instance of fn returns true on an element. 
- `without(arr, toRemove)`: Will return a new array of elements from the original array without the elements indicated in a "toRemove" array. 

