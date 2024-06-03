const sumAll = function(fromNum, toNum) {
  let sum = 0;
  if (typeof fromNum !== 'number' || typeof toNum !== 'number') {
    return 'ERROR'
  } else if (fromNum < 0 || toNum < 0) {
    return 'ERROR'
  }
  if (fromNum < toNum) {
    for (let i = fromNum; i <= toNum; i++) {
      sum += i;
    }
  } else {
    for (let i = fromNum; i >= toNum; i--) {
      sum += i;
    }
  }
  return sum;

};

// Do not edit below this line
module.exports = sumAll;
