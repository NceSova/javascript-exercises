const convertToCelsius = function(tempInFahrenheit) {
  convertedTemp = ((tempInFahrenheit-32) * 5/9).toFixed(1);
  if(Number.isInteger(convertedTemp)) {
    return Number.parseInt(convertedTemp.toFixed(0));
  } else {
    return Number.parseFloat(convertedTemp);
  }
};

const convertToFahrenheit = function(tempInCelsius) {
  convertedTemp = (tempInCelsius * 9/5+32).toFixed(1);
  if(Number.isInteger(convertedTemp)) {
    return Number.parseInt(convertedTemp.toFixed(0));
  } else {
    return Number.parseFloat(convertedTemp);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
