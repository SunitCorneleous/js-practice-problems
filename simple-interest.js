// write a function to find simple interest

function getInterest(principle, time, rate) {
  let simpleInterest = (principle * time * rate) / 100;

  return simpleInterest;
}

const principle = 1000000;
const time = 2;
const rate = 10;

const result = getInterest(principle, time, rate);
const monthly = result / (12 * time);

console.log("-----------------------------------------");
console.log("        Interest rate is", result);
console.log("        Interest rate monthly is", parseInt(monthly));
console.log("-----------------------------------------");
