// write a function to find leap year

function isLeapYear(year) {
  if (year % 4 === 0) {
    return "The year is leap year.";
  } else {
    return "The year is not leap year.";
  }
}

const yearType = isLeapYear(2022);
console.log(yearType);
