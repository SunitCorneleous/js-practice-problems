// write a functin to find factorial of any number using for loop

function getFactorial(number) {
  let result = 1;

  for (let i = number; i >= 1; i--) {
    result *= i;
  }

  return result;
}

const num = 6;

const result = getFactorial(num);
console.log("The factorial of " + num + " is " + result);
