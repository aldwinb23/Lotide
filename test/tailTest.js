
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE 
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words), "Labs");
assertEqual(tail([3, 6, 9]), 9);
assertEqual(words.length, 3);
