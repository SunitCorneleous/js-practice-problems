// write a function to find your grade using if-else

function getGrade(marks) {
  if (marks >= 80) {
    return "A+";
  } else if (marks >= 75 && marks < 80) {
    return "A";
  } else if (marks >= 70 && marks < 75) {
    return "A-";
  } else if (marks >= 65 && marks < 70) {
    return "B+";
  } else if (marks >= 60 && marks < 65) {
    return "B";
  } else if (marks >= 55 && marks < 60) {
    return "B-";
  } else if (marks >= 50 && marks < 55) {
    return "C";
  } else if (marks >= 45 && marks < 50) {
    return "C-";
  } else if (marks >= 40 && marks < 45) {
    return "D";
  } else {
    return "F";
  }
}

const result = getGrade(45);
console.log("----------------------------------------");
console.log("         Your grade is", result);
console.log("----------------------------------------");

// write a function to find your grade using switch
function getGradeSwitch(marks) {
  switch (true) {
    case marks >= 80:
      console.log("A+");
      break;
    case marks >= 75 && marks < 80:
      console.log("A");
      break;
    case marks >= 70 && marks < 75:
      console.log("A-");
      break;
    case marks >= 65 && marks < 70:
      console.log("B+");
      break;
    case marks >= 60 && marks < 65:
      console.log("B");
      break;
    case marks >= 55 && marks < 60:
      console.log("B-");
      break;
    case marks >= 50 && marks < 55:
      console.log("C");
      break;
    case marks >= 45 && marks < 50:
      console.log("C-");
      break;
    case marks >= 40 && marks < 45:
      console.log("D");
      break;

    default:
      console.log("Fail");
      break;
  }
}

getGradeSwitch(55);
