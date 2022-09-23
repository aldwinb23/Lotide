
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

const eqObjects = function(object1, object2) {
  let obj1key = Object.keys(object1);
  let obj2key = Object.keys(object2);
  if (obj1key.length !== obj2key.length) {
    return false;
  }
  for (let obj1 of obj1key) {
    if (Array.isArray(object1[obj1]) && Array.isArray(object2[obj1])) {
      if(!eqArrays(object1[obj1], object2[obj1])) {
        return false;
      }
    } else if ((object1[obj1]) !== object2[obj1]) {
        return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✓✓✓ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✓✓✓`);
  } else {
    console.log(`✖︎✖︎✖︎ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} ✖︎✖︎✖︎`);
  }
};

//console.log(`Example label: ${inspect(actual)}`);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(cd, cd2); // => false
