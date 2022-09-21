
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
const middle = function(array) {
  let middleArr = [];
  if (array.length <= 2) {
    return middleArr;
  }
  if (array.length > 2) {
    for (let x = 0; x < array.length; x++) {
      if (array.length % 2 === 0) {
        let midNum = array.length / 2;
        middleArr.push(array[midNum - 1]);
        middleArr.push(array[midNum]);
        return middleArr;
      } else if (array.length % 2 !== 0) {
        let midNum = Math.floor(array.length / 2);
        middleArr.push(array[midNum]);
        return middleArr;
      }
    }
  }
};

// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));
