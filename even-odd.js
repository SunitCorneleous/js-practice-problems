// Write a function to find even or odd numbers

function findEvenNum(num) {
  let result = "";
  if (num % 2 === 0) {
    result = "The number is even";
  } else {
    result = "The number is odd";
  }

  return result;
}

const number = 15;

const isEven = findEvenNum(number);
console.log(isEven);
