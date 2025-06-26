// Q-1

var positiveInt = Number(prompt("Enter a positive integer:"));
var posRound = Math.round(positiveInt);
var posFloor = Math.floor(positiveInt);
var posCeil = Math.ceil(positiveInt);

document.writeln("<br><h3>Q1 Result:</h3>");

document.writeln("Number: " + positiveInt + "<br>");
document.writeln("Round off value: " + posRound + "<br>");
document.writeln("Floor value: " + posFloor + "<br>");
document.writeln("Ceil value: " + posCeil);

// Q-2

var negativeInt = Number(prompt("Enter a negative integer:"));
var negRound = Math.round(negativeInt);
var negFloor = Math.floor(negativeInt);
var negCeil = Math.ceil(negativeInt);

document.writeln("<br><h3>Q2 Result:</h3>");
document.writeln("Number: " + negativeInt + "<br>");
document.writeln("Round off value: " + negRound + "<br>");
document.writeln("Floor value: " + negFloor + "<br>");
document.writeln("Ceil value: " + negCeil);

// Q-3

document.writeln("<br><h3>Q3 Result:</h3>");
var absInput = +prompt("Enter a number to find its absolute value:");
var abs = Math.abs(absInput);
document.writeln("Absolute value of " + absInput + " is: " + abs);

// Q-4

document.writeln("<br><h3>Q4 Result:</h3>");
var dice = Math.floor(Math.random() * 6) + 1;
document.writeln("Random dice value: " + dice);

// Q-5

document.writeln("<br><h3>Q5 Result:</h3>");

var headTail = Math.floor(Math.random() * 2) + 1;
document.writeln(headTail + "<br>");
if (headTail == 1) {
  document.writeln("Random coin value: Tails");
} else {
  document.writeln("Random coin value: Heads");
}

// Q-6
document.writeln("<br><h3>Q6 Result:</h3>");
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.writeln("Random number beteen 1 to 100: " + randomNumber);

// Q-7
document.writeln("<br><h3>Q7 Result:</h3>");

var weight = prompt("Enter your weight in kilograms: ");
var convertedString = parseFloat(weight);
if (!isNaN(convertedString)) {
    
    document.writeln("The weight of user is: " + convertedString + " kilograms");
} else {
    document.writeln("Invalid input. Please enter a valid weight.");
}

// Q-8
document.writeln("<br><h3>Q8 Result:</h3>");

var secretNumber = 3;
var guess = +prompt("Guess the number between 1 to 10: ");
if (guess === secretNumber) {
  document.writeln("Correct answer!");
} else {
  document.writeln("Wrong guess<br><br>");
}

