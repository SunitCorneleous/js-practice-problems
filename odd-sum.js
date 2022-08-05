// write a function that take an array of numbers and return the sum of odd numbers.

function sumOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
  }
  return sum;
}

const numbersArray = [25, 10, 16, 19, 17, 34, 60, 70, 33, 15, 14, 87];
let result = sumOfArray(numbersArray);

console.log("The sum of odd numbers are", result);
