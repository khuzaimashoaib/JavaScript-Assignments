// CHP 5 MATH EXPRESSIONS

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// 2. Repeat task1 for subtraction, multiplication, division & modulus.


document.write("<h2>Arithmetic Operations</h2>");

var a = prompt("Enter first number");
var b = prompt("Enter second number");

var c = a + b;
document.write("Sum of " + a + " and " + b + " is " + c + "<br>");


var c = a - b;
document.write("Subtraction of " + a + " and " + b + " is " + c + "<br>");

var c = a * b;
document.write("Multiplication of " + a + " and " + b + " is " + c + "<br>"); ;

var c = a / b;
document.write("Division of " + a + " and " + b + " is " + c + "<br>");

var c = a % b;
document.write("Modulus of " + a + " and " + b + " is " + c + "<br><br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.


document.write("<h2>Mathematical Expressions</h2>");

var number;
document.write("Value after variable declaration is: " + number + "<br>");
number = prompt("Enter a number");
document.write("Initial value: " + number + "<br>");
number++;
document.write("Value after increment is: " + number + "<br>");
number += 7;
document.write("Value after addition is: " + number + "<br>");
number--;
document.write("Value after decrement is: " + number + "<br>");
document.write("The remainder is: " + number % 3 + "<br><br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.

document.write("<h2>Total Cost to buy 5 tickets</h2>");


var ticketPrice = 600;
var tickets = 5;
document.write("Total cost to buy " + tickets + " tickets to a movie is " + ticketPrice * tickets + "PKR<br><br>");


// 5. Write a script to display multiplication table of any
// number in your browser.


var num = 5;
document.write("<h2>Table of 5</h2>");
document.write(num + " x 1 = " + num * 1 + "<br>");
document.write(num + " x 2 = " + num * 2 + "<br>");
document.write(num + " x 3 = " + num * 3 + "<br>");
document.write(num + " x 4 = " + num * 4 + "<br>");
document.write(num + " x 5 = " + num * 5 + "<br>");
document.write(num + " x 6 = " + num * 6 + "<br>");
document.write(num + " x 7 = " + num * 7 + "<br>");
document.write(num + " x 8 = " + num * 8 + "<br>");
document.write(num + " x 9 = " + num * 9 + "<br>");
document.write(num + " x 10 = " + num * 10 + "<br><br>");


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// °C = (°F - 32) * 5 / 9;
// °F = (°C * 9 / 5) + 32;

document.write("<h2>Temperature Converter</h2>");

var celsiusTemp = 35;
var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");
var fahrenheitTemp = 90;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C<br><br>");


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.


var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges is " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost + "<br><br>");


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

document.write("<h2>Mark Sheet</h2>");

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


document.write("<h2>Currency in PKR</h2>");

var usd = 10;
var saudiRiyal = 25;
var pkr = usd * 281.50 + saudiRiyal * 75.0547;
document.write("Total Currency in PKR: " + pkr + "<br><br>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

document.write("<h2>Single Expression Program</h2>");

var num = 4;
var result = ((num + 5) * 10) / 2;
document.write("Result: " + result + "<br><br><br>");


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

document.write("<h2>Age Calculator</h2>");

var currentYear = 2025;
var birthYear = 2005;
var age = currentYear - birthYear;
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age + "<br><br>");



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


document.write("<h2>The Geometrizer</h2>");

var radius = 30;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


document.write("<h2>The Lifetime Supply Calculator</h2>");


var favSnack = "Brownie"
var currentAge = 19;
var maxAge = 62;
var amountPerDay = 2;
var totalAmount = (maxAge - currentAge) * amountPerDay;
document.write("Favourite Snack: " + favSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of Snack per day: " + amountPerDay + "<br>");
document.write("You will need " + totalAmount + " " + favSnack + " to last you until the ripe old age of " + maxAge + "<br><br>");