// Q-1

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello Mr. " + fullName);

// Q-2

document.writeln("<br><h3>Q2 Result:</h3>");
var favoritePhoneModel = prompt("Enter your favorite phone model:");
var Stringlength = favoritePhoneModel.length;
document.writeln("My favorite phone is: " + favoritePhoneModel + "<br>");
document.writeln("Length of string: " + Stringlength);

// Q-3

document.writeln("<br><h3>Q3 Result:</h3>");
var string = "Pakistani";
var n = string.indexOf("n");
document.writeln("String: " + string + "<br>");
document.writeln("Index of 'n': " + n);

// Q-4

document.writeln("<br><h3>Q4 Result:</h3>");
var Hellotring = "Hello World";
var last = Hellotring.lastIndexOf("l");
document.writeln("String: " + Hellotring + "<br>");
document.writeln("Last Index of 'l': " + last);

// Q-5
document.writeln("<br><h3>Q5 Result:</h3>");
// var string = "Pakistani";
var char = string.charAt(3);
document.writeln("String: " + string + "<br>");
document.writeln("Character at index 3: " + char);

// Q-6
document.writeln("<br><h3>Q6 Result:</h3>");
document.writeln("<h3>Concatenation Method</h3>");
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
var fullConName = firstName.concat(" " + lastName);
document.writeln("Hello Mr. " + fullConName);

// Q-7

document.writeln("<br><h3>Q7 Result:</h3>");

var city = "Hyderabad";
var replacement = city.replace("Hyder", "Islam");
document.writeln("City: " + city + "<br>");
document.writeln("After replacement: " + replacement);

// Q-8

document.writeln("<br><h3>Q8 Result:</h3>");

var message =
  "Ali and Sami are best friends. They play cricket and football together.";
var replaced = message.replace(/and/g, "&");
document.writeln("Message: " + message + "<br>");
document.writeln("After replacement: " + replaced);

// Q-9

document.writeln("<br><h3>Q9 Result:</h3>");
var value = "472";
var converted = Number(value);
document.writeln("Value: " + value + "<br>");
document.writeln("Type: " + typeof value + "<br>");
document.writeln("Value: " + converted + "<br>");
document.writeln("Type: " + typeof converted);

// Q-10
document.writeln("<br><h3>Q10 Result:</h3>");

var userInput = prompt("Enter String to convert in upper case: ");
var capital = userInput.toUpperCase();
document.writeln("User input: " + userInput + "<br>");
document.writeln("Upper case: " + capital);

// Q-11
document.writeln("<br><h3>Q11 Result:</h3>");

var titleInput = prompt("Enter string to convert in title case: ");
var title = titleInput.slice(0, 1).toUpperCase() + titleInput.slice(1);
document.writeln("User input: " + titleInput + "<br>");
document.writeln("Title case: " + title);

// Q-12

document.writeln("<br><h3>Q12 Result:</h3>");

var num = 35.36;
var numToString = num.toString().replace(".", "");
document.writeln("Number: " + num + "<br>");
document.writeln("Result: " + numToString);

// Q-13
document.writeln("<br><h3>Q13 Result:</h3>");
let symbolUsername = prompt("Enter your username:");
var checkSymbol = false;

for (var i = 0; i < symbolUsername.length; i++) {
  var charCode = symbolUsername.charCodeAt(i);
  if (
    charCode === 33 ||
    charCode === 44 ||
    charCode === 46 ||
    charCode === 64
  ) {
    checkSymbol = true;
    break;
  }
}

if (checkSymbol) {
  alert("Please enter a valid username");
} else {
  alert("Username is valid");
}

// Q-14
document.writeln("<br><h3>Q14 Result:</h3>");

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
);
var found = false;
for (let i = 0; i < items.length; i++) {
  searchItem = searchItem.toLowerCase();
  if (items[i] === searchItem) {
    found = true;
    break;
  }
}
if (found) {
  alert(
    searchItem +
      " is available at index " +
      items.indexOf(searchItem) +
      " in our bakery"
  );
} else {
  alert("we are sorry. " + searchItem + " is not available in our bakery.");
}

// Q-15
document.writeln("<br><h3>Q15 Result:</h3>");

var pass = prompt("Enter your password: ");
var firstCharCode = pass.charCodeAt(0);

if (pass.length < 6) {
  alert("Password must be at least 6 characters long.");
} else if (firstCharCode >= 48 && firstCharCode <= 57) {
  alert("Password Should not start with a number.");
} else {
  var hasLetter = false;
  var hasNumber = false;

  for (let i = 0; i < pass.length; i++) {
    var code = pass.charCodeAt(i);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      hasLetter = true;
    }
    if (code >= 48 && code <= 57) {
      hasNumber = true;
    }
  }

  if (hasLetter && hasNumber) {
    alert("Valid password!");
  } else {
    alert("Password must contain both letters and numbers.");
  }
}

// Q-16
document.writeln("<br><h3>Q16 Result:</h3>");

var uni = "Hamdard University";
var uniArray = uni.split("");
for (var i = 0; i < uniArray.length; i++) {
  document.writeln(uniArray[i] + "<br>");
}

// Q-17
document.writeln("<br><h3>Q17 Result:</h3>");

var lastCharInput = prompt("Enter any Input for last character: ");
var lastChar = lastCharInput.slice(-1);
document.writeln("User input: " + lastCharInput + "<br>");
document.writeln("Last character of input: " + lastChar);

// Q-18
document.writeln("<br><h3>Q18 Result:</h3>");

let sentence = "The quick brown fox jumps over the lazy dog";
let word = "the";
let count = 0;

let words = sentence.toLowerCase().split(" ");

for (let i = 0; i < words.length; i++) {
  if (words[i] === word) {
    count++;
  }
}
document.writeln("Text: " + sentence + "<br>");
document.writeln("The word " + word + " appears " + count + " times.");
