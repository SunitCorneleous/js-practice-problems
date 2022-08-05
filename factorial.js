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
console.log("------------------------------------");
console.log("| Using for loop,");
console.log("| The factorial of " + num + " is: " + result);

// write a functin to find factorial of any number using while loop

function getFactorialWhile(number) {
  let count = number;
  let result = 1;

  while (count > 1) {
    result *= count;
    count--;
  }

  return result;
}

const num2 = 8;
const output = getFactorialWhile(num2);

console.log("------------------------------------");
console.log("| Using while loop,");
console.log("| The factorial of " + num2 + " is: " + output);
console.log("------------------------------------");
