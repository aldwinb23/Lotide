# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aldwinb23/lotide`

**Require it:**

`const _ = require('@aldwinb23/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: checks to see if two arrays are equal and console logs a pass if they are and fail if they are not
* `assertEqual`: checks to see if both parameters are equal and console logs a pass if they are and fail if they are not
* `eqArrays`: checks to see if both arrays are equal
* `head`: returns the first item in an array
* `middle`: returns the middle of an odd aray; returns the two middle of an even array
* `tail`: returns the last item in an array