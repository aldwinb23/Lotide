
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✓✓✓ Assertion Passed: ${actual} === ${expected} ✓✓✓`);
  } else {
    console.log(`✖︎✖︎✖︎ Assertion Failed: ${actual} !== ${expected} ✖︎✖︎✖︎`);
  }
};
const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (x = 0; x < arrOne.length; x++) {
    if (arrOne[x] !== arrTwo[x]) {
      return false;
    } 
  }
  return true;
};
