// Q-1
document.writeln("<br><h3>Q1 Result:</h3>");

function showDateTime() {
  const now = new Date();

  document.writeln(now);
}

showDateTime();

// Q-2
document.writeln("<br><h3>Q2 Result:</h3>");
function greetUser(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  document.writeln("Hello, " + fullName + "! Welcome.");
  alert("Hello, " + fullName + "! Welcome.");
}
greetUser("Khuzaima", "Shoaib");

// Q-3
document.writeln("<br><h3>Q3 Result:</h3>");
function addTwoNumbers(num1, num2) {
  var num1 = Number(prompt("Enter first number:"));
  var num2 = Number(prompt("Enter second number:"));
  var sum = num1 + num2;
  alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
  document.writeln("The sum of " + num1 + " and " + num2 + " is: " + sum);
  return sum;
}

addTwoNumbers(0, 0);

// Q-4
document.writeln("<br><h3>Q4 Result:</h3>");
function calculater(num1, num2, operator) {
  var result;

  num1 = +prompt("Enter the first number:");
  operator = prompt("Enter the operator (+, -, *, /):");
  num2 = +prompt("Enter the second number:");

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Error: Division by zero!";
    }
  } else {
    result = "Invalid operator!";
  }
  return document.writeln("Result: " + result);
}
calculater(0, 0, 0);

// Q-5
document.writeln("<br><h3>Q5 Result:</h3>");
function squareNumber(num) {
  var result = num * num;
  return document.writeln("The square of " + num + " is: " + result);
}
squareNumber(8);

// Q-6

document.writeln("<br><h3>Q6 Result:</h3>");
function factorial(n) {
  var n = Number(prompt("Enter a number to find its factorial:"));
  if (n < 0) return "Factorial not defined for negative numbers";
  var result = 1;
  for (let i = result; i <= n; i++) {
    result *= i;
  }
  return document.writeln("The factorial of " + n + " is: " + result);
}

factorial(0);

// Q-7
document.writeln("<br><h3>Q7 Result:</h3>");

function showCounting(start, end) {
  var output = "";
  for (var i = start; i <= end; i++) {
    output += i + " ";
  }
  return document.writeln(
    "Counting from " + start + " to " + end + ": " + output
  );
}

showCounting(5, 15);

// Q-8
document.writeln("<br><h3>Q8 Result:</h3>");

function calculateHypotenuse(base, perpendicular) {
  var base = Number(prompt("Enter base:"));
  var perpendicular = Number(prompt("Enter perpendicular:"));
  function calculateSquare(num) {
    return num * num;
  }
  var hypotenuseSquared =
    calculateSquare(base) + calculateSquare(perpendicular);

  var hypotenuse = Math.sqrt(hypotenuseSquared);
  return document.writeln("Hypotenuse: " + hypotenuse);
}

calculateHypotenuse(0, 0);

// Q-9
document.writeln("<br><h3>Q9 Result:</h3>");

function areaOfRectangle(length, width) {
  var area = length * width;
  return area;
}

var length = 8;
var width = 4;

var asValues = areaOfRectangle(5, 10);
var asVariables = areaOfRectangle(length, width);

document.writeln("Area of Rectangle (5, 10) as values : " + asValues);
document.writeln(
  "<br>Area of Rectangle (" +
    length +
    ", " +
    width +
    ") as variables: " +
    asVariables
);

// Q-10
document.writeln("<br><h3>Q10 Result:</h3>");

function isPalindrome(word) {
  var palindrome = "";
  for (var i = word.length - 1; i >= 0; i--) {
    palindrome += word[i];
  }
  if (palindrome === word) {
    alert(palindrome + " is a palindrome");
  } else {
    alert(palindrome + " is not a palindrome");
  }
}
isPalindrome("civic");

// Q-11
document.writeln("<br><h3>Q11 Result:</h3>");
function capitalizeFirstLetter(sentence) {
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    var upperCase = words[i].charAt(0).toUpperCase();
    var lowerCase = words[i].slice(1).toLowerCase();
    words[i] = upperCase + lowerCase;
  }
  var result = words.join(" ");
  document.writeln("Expected Output: " + result);
}
var sentence = prompt("Enter a string: ");
document.writeln("Expected String: " + sentence + "<br>");
capitalizeFirstLetter(sentence);

// Q-12
document.writeln("<br><h3>Q12 Result:</h3>");

function largestString(string) {
  var words = string.trim().split(" ");
  var longestWord = words[0];
  for (var i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return document.writeln("Expected Output: " + longestWord);
}
var string = "My name is Khuzaima  Shoaib";
document.writeln("Expected String: " + string + "<br>");

largestString(string);

// Q-13
document.writeln("<br><h3>Q13 Result:</h3>");

function countLetter(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  document.writeln(
    "In String '" +
      str +
      "' The letter '" +
      letter +
      "' appears " +
      count +
      " times."
  );
}

countLetter("Khuzaima Shoaib", "a");

// Q-14
document.writeln("<br><h3>Q14 Result:</h3>");

function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  return document.writeln(
    "The circumference of a circle with radius " +
      radius +
      " is: " +
      circumference.toFixed(3)
  );
}

calcCircumference(9);
function calcArea(radius) {
  var area = Math.PI * radius * radius;
  return document.writeln(
    "<br>The area of a circle with radius " +
      radius +
      " is: " +
      area.toFixed(3) +
      "<br><br>"
  );
}
calcArea(8);
