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

// write a functin to get all odd numbers in an aray

function getOddNumbers(array) {
  let oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArray.push(array[i]);
    }
  }
  return oddArray;
}

const numbersArray = [25, 10, 16, 19, 17, 34, 60, 70, 33, 15, 14, 87];
let result = sumOfArray(numbersArray);
let oddNumbers = getOddNumbers(numbersArray);

console.log("The numbers are:", numbersArray);
console.log("The odd numbers are:", oddNumbers);
console.log("-------------------------------------");
console.log("The sum of odd numbers are:", result);
console.log("-------------------------------------");
