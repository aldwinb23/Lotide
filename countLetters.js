
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✓✓✓ Assertion Passed: ${actual} === ${expected} ✓✓✓`);
  } else if (actual !== expected) {
    console.log(`✖︎✖︎✖︎ Assertion Failed: ${actual} !== ${expected} ✖︎✖︎✖︎`);
  }
};

const countLetters = function(letters) {
  let results = {};
  for (const letter of letters) {
    // if (letter === " ") {
    //   continue;
    // }
    if (results[letter] === undefined) {
      results[letter] = 0;
    }
    results[letter]++;
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));
