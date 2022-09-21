
const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`✓✓✓ Assertion Passed: ${actual} === ${expected} ✓✓✓`);
  } else if (actual != expected) {
    console.log(`✖︎✖︎✖︎ Assertion Failed: ${actual} !== ${expected} ✖︎✖︎✖︎`);
  }
};
const eqArrays = function(arrOne, arrTwo) {
  for (x = 0; x < eqArrays.length; x++) {
    if (arrOne[x] === arrTwo[x]) {
      return true;
    } else {
      return false;
    }
  }
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
