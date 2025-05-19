// CHP 3 Variables for numbers 

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 19;
alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visit = 3;
alert("You have visited this site " + visit + " times");

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 2005;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof(birthYear) + "<br>");

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


document.write("<h2>Online Clothing Store</h2>");


var visitorName = prompt("Enter your name");
var productTitle = prompt("Enter product");
var quantity = prompt("Enter quantity");
document.write(visitorName  + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store");


