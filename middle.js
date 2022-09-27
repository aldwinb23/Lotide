
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

module.exports = middle;
