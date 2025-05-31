// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt("Enter your city");
if (city == "Karachi" || city == "karachi") {
  alert("Welcome to city of lights");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender");
if (gender == "male") {
  alert("Good Morning Sir");
} else if (gender == "female") {
  alert("Good Morning Ma'am");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var signal = prompt("Enter signal color");
if (signal == "red" || signal == "Red") {
  alert("Must Stop");
} else if (signal == "yellow" || signal == "Yellow") {
  alert("Ready to move");
} else if (signal == "green" || signal == "Green") {
  alert("Move now");
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var fuel = prompt("Enter remaining fuel in litres");
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
document.writeln("<h3>Question 5 Result:</h3><br>");
document.writeln("The value of a is: " + a + "<br><br>");

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
document.writeln("The value of b is: " + b + "<br><br>");

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

document.writeln("The value of c is: " + c + "<br><br>");

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var subject1 = +prompt("Enter marks of subject 1: ");
var subject2 = +prompt("Enter marks of subject 2: ");
var subject3 = +prompt("Enter marks of subject 3: ");
var totalMarks = 300;
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

document.writeln("<h3>Q6 Result:</h3>");
document.writeln("<h2>Mark Sheet</h2>");
document.writeln("Total Marks: " + totalMarks + "<br>");
document.writeln("Marks Obtained: " + obtainedMarks + "<br>");
document.writeln("Percentage: " + percentage + "%<br>");

if (percentage >= 80) {
  document.writeln("Grade: A-one<br>");
  document.writeln("Remarks: Excellent");
} else if (percentage >= 70) {
  document.writeln("Grade: A<br>");
  document.writeln("Remarks: Good");
} else if (percentage >= 60) {
  document.writeln("Grade: B<br>");
  document.writeln("Remarks: You need to improve");
} else {
  document.writeln("Grade: Fail<br>");
  document.writeln("Remarks: Sorry");
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 7;
var guess = +prompt("Guess the secret number (ranging from 1 to 10): ");

if (guess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (guess === secretNumber + 1) {
  alert("Close enough to the correct answer");
}


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var numberDivisibility = +prompt("Enter a number to Check if it is divisible by 3: ");
if (numberDivisibility % 3 === 0) {
  alert("The number is divisible by 3");
} else {
  alert("The number is not divisible by 3");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num = +prompt("Enter a number whether it is even or odd: ");
if (num % 2 === 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


var temp = +prompt("Enter temperature: ");

if (temp > 40) {
  alert("It is too hot outside.");
} else if (temp > 30) {
  alert("The Weather today is Normal.");
} else if (temp > 20) {
  alert("Today’s Weather is cool.");
} else if (temp > 10) {
  alert("OMG! Today's weather is so Cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var first_num = +prompt("Enter first number");
var second_num = +prompt("Enter second number")
var operator = prompt("Enter your operator");
if (operator == "+") {
    alert(first_num + second_num);
} else if (operator == "-") {
    alert(first_num - second_num);
} else if (operator == "*") {
    alert(first_num * second_num);
} else if (operator == "/") {
    alert(first_num / second_num);
} else if (operator == "%") {
    alert(first_num % second_num);
}



    
