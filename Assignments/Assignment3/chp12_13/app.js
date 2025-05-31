// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var char = prompt("Enter a character or number: ");
if (char >= "A" && char <= "Z") {
  alert(char + " is an uppercase letter");
} else if (char >= "a" && char <= "z") {
  alert(char + " is a lowercase letter");
} else if (char >= "0" && char <= "9") {
  alert(char + " is a number");
} else {
  alert("Invalid input");
}
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");
if (num1 > num2) {
  alert("The larger number is " + num1);
} else if (num1 < num2) {
  alert("The larger number is " + num2);
}
if (num1 === num2) {
  alert("The numbers are equal");
} else {
  alert("Invalid input");
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var nummber = +prompt("Enter a number: ");
if (nummber > 0) {
  alert("The number is positive");
} else if (nummber < 0) {
  alert("The number is negative");
} else if (nummber === 0) {
  alert("The number is zero");
} else {
  alert("Invalid input");
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

var char = prompt("Enter a character: ");
if (
  char == "a" ||
  char == "e" ||
  char == "i" ||
  char == "o" ||
  char == "u" ||
  char == "A" ||
  char == "E" ||
  char == "I" ||
  char == "O" ||
  char == "U"
) {
  alert(char + " is a vowel");
} else {
  alert(char + " is not a vowel");
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var password = "123456";
var userPassword = prompt("Enter your password: ");

if (userPassword == "") {
  alert("Please enter your password");
} else if (userPassword == password) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.writeln("<h3>Question 6 Result:</h3>");
document.writeln(greeting);

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = +prompt("Enter time in 24 hours clock format: ");
if (time >= 0 && time < 1200) {
  alert("Good morning");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening");
} else {
  alert("Good night");
}
