// write a function to calculate celcius to farenheit

function getFarenheit(celcius) {
  let farenheit = celcius * (9 / 5) + 32;

  return farenheit;
}

const resultInF = getFarenheit(32);
console.log("----------------------------------------");
console.log("       The temperature is: " + resultInF + " F");
console.log("----------------------------------------");

// write a function to calculate farenheit to celcius
function getCelcius(farenheit) {
  let celcius = (farenheit - 32) * (5 / 9);

  return celcius;
}

const resultInC = getCelcius(150);
console.log("----------------------------------------");
console.log("       The temperature is: " + resultInC.toFixed(1) + " C");
console.log("----------------------------------------");
