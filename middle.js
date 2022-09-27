
const middle = function(array) {
  let newArr = [];

  if (array.length <= 2) {
    return newArr;
  }

  let middleArr = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    lowMid = array[middleArr -1];
    newArr.push(lowMid);
    newArr.push(array[middleArr]);
    return newArr;
  }
  
  return array[middleArr];
}

module.exports = middle;
