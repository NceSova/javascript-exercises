const reverseString = function(string) {
  let arrayFromString = string.split('');
  let reversedArray = arrayFromString.reverse();
  let resultString = reverseString.join('');
  return resultString;
};

// Do not edit below this line
module.exports = reverseString;
