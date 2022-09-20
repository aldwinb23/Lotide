
const tail = function (words) {
  let tailWord = words.slice(1);
  console.log(tailWord);
}

const assertEqual = function (actual, expected) {
};

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log(words);
