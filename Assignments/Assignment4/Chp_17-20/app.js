// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var arr = [];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

let mat = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
document.writeln("<h3>Q2 Result:</h3>");
document.writeln(
  mat[0][0] + " " + mat[0][1] + " " + mat[0][2] + " " + mat[0][3] + "<br>"
);
document.writeln(
  mat[1][0] + " " + mat[1][1] + " " + mat[1][2] + " " + mat[1][3] + "<br>"
);
document.writeln(
  mat[2][0] + " " + mat[2][1] + " " + mat[2][2] + " " + mat[2][3] + "<br><br>"
);

//3.  Write a program to print numeric counting from 1 to 10.
document.writeln("<h3>Q3 Result:</h3>");

for (let i = 1; i <= 10; i++) {
  console.log(i);
  document.writeln(i + "<br>");
}

//4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

document.writeln("<h3>Q4 Result:</h3>");
var num = prompt("Enter a number to show its multiplication table:");
var length = prompt("Enter length of multiplication table:");
document.writeln("Multiplication Table of " + num + "<br>");
document.writeln("Length: " + length + "<br><br>");
for (let i = 1; i <= length; i++) {
  document.writeln(num + " x " + i + " = " + num * i + "<br>");
}

//5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.writeln("<h3>Q5 Result:</h3>");
document.writeln("Fruits:<br>");
for (let i = 0; i < fruits.length; i++) {
  document.writeln(fruits[i] + "<br>");
}
document.writeln("<br>");
for (let i = 0; i < fruits.length; i++) {
  document.writeln("Elements at index " + i + " is " + fruits[i] + "<br>");
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.writeln("<h3>Q6 Result:</h3>");
document.writeln("<h4>Counting:</h4>");
for (let i = 1; i <= 15; i++) {
  document.writeln(i + " ");
}
document.writeln("<br>");
document.writeln("<h4>Reverse Counting:</h4>");
for (let i = 10; i >= 1; i--) {
  document.writeln(i + ", ");
}
document.writeln("<br>");
document.writeln("<h4>Even:</h4>");
for (let i = 0; i <= 20; i += 2) {
  document.writeln(i + ", ");
}
document.writeln("<br>");
document.writeln("<h4>Odd:</h4>");
for (let i = 1; i <= 19; i += 2) {
  document.writeln(i + ", ");
}
document.writeln("<br>");
document.writeln("<h4>Series:</h4>");
for (let i = 2; i <= 20; i += 2) {
  document.writeln(i + "k, ");
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
);
var found = false;
for (let i = 0; i < A.length; i++) {
  if (A[i] === item) {
    found = true;
    break;
  }
}
if (found) {
  alert(item + " is available at index " + A.indexOf(item) + " in our bakery");
} else {
  alert("we are sorry. " + item + " is not available in our bakery.");
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var largestNum = [24, 53, 78, 91, 12, 102, 140, 150];

document.writeln("<h3>Q8 Result:</h3>");
document.writeln("Array: " + largestNum + "<br>");
document.writeln(
  "The largest number is: " + Math.max(...largestNum) + "<br><br>"
);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var smallestNum = [24, 53, 78, 91, 12, 5, 3, 1];

document.writeln("<h3>Q9 Result:</h3>");
document.writeln("Array: " + smallestNum + "<br>");
document.writeln(
  "The smallest number is: " + Math.min(...smallestNum) + "<br><br>"
);

//10. Write a program to print multiples of 5 ranging 1 to
// 100.

document.writeln("<h3>Q10 Result:</h3>");
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.writeln(i + ", ");
  }
}
