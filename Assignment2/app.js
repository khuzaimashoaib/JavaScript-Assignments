// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.writeln("<h1>Assignment 2</h1>");
document.writeln("<h3>Q1 Result:</h3>");

var a = 10;
document.writeln(
  "The value of a is: " + a + "<br>--------------------------------<br><br>"
);

document.writeln("The value of ++a is: " + ++a + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");
document.writeln("The value of a++ is: " + a++ + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");
document.writeln("The value of --a is: " + --a + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");
document.writeln("The value of a-- is: " + a-- + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br><br>");



//2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;



document.writeln("<h3>Q2 Result:</h3>");

var num1 = 2,
  num2 = 1;
var result = --num1 - --num2 + ++num2 + num2--;

document.writeln(" a is: " + num1 + "<br>");
document.writeln(" b is: " + num2 + "<br>");
document.writeln(" result is: " + result + "<br><br><br>");




// 3. Write a program that takes input a name from user &
// greet the user.


document.writeln("<h3>Q3 Result:</h3>");

var fname = prompt("Enter your name: ");
alert("Hello " + fname + "! How are you?");
document.writeln("Hello " + fname + "! How are you?<br><br><br>");





// 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

document.writeln("<h3>Q4 Result:</h3>");

var input = prompt("Enter a number for Table:");
var num;

if (input != null && input != "") {
  num = input;
} else {
  num = 5;
}

document.writeln("<h3>Table of " + num + "</h3>");
document.writeln(num + " x 1 = " + num * 1 + "<br>");
document.writeln(num + " x 2 = " + num * 2 + "<br>");
document.writeln(num + " x 3 = " + num * 3 + "<br>");
document.writeln(num + " x 4 = " + num * 4 + "<br>");
document.writeln(num + " x 5 = " + num * 5 + "<br>");
document.writeln(num + " x 6 = " + num * 6 + "<br>");
document.writeln(num + " x 7 = " + num * 7 + "<br>");
document.writeln(num + " x 8 = " + num * 8 + "<br>");
document.writeln(num + " x 9 = " + num * 9 + "<br>");
document.writeln(num + " x 10 = " + num * 10 + "<br><br><br>");

// 5. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
document.writeln("<h3>Q5 Result:</h3>");

var sub1 = prompt("Enter subject 1: ");
var sub2 = prompt("Enter subject 2: ");
var sub3 = prompt("Enter subject 3: ");
var totalMarks = 100;
var obtainedMarks1 = +prompt("Enter obtained marks of " + sub1 + ": ");
var obtainedMarks2 = +prompt("Enter obtained marks of " + sub2 + ": ");
var obtainedMarks3 = +prompt("Enter obtained marks of " + sub3 + ": ");
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

document.writeln(
  "<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>"
);
document.writeln(
  "<tr><td>" +
    sub1 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks1 +
    "</td><td>" +
    (obtainedMarks1 / totalMarks) * 100 +
    "%</td></tr>"
);
document.writeln(
  "<tr><td>" +
    sub2 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks2 +
    "</td><td>" +
    (obtainedMarks2 / totalMarks) * 100 +
    "%</td></tr>"
);
document.writeln(
  "<tr><td>" +
    sub3 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks3 +
    "</td><td>" +
    (obtainedMarks3 / totalMarks) * 100 +
    "%</td></tr>"
);
document.writeln(
  "<tfoot><tr><td>" +
    "</td><td>" +
    300 +
    "</td><td>" +
    totalObtainedMarks +
    "</td><td>" +
    (totalObtainedMarks / 300) * 100 +
    "%</td></tfoot>"
);
document.writeln("</table><br><br>");
