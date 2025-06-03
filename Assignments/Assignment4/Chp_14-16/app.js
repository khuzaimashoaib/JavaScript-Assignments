// 1. Declare an empty array using JS literal notation to store
// student names in future.

var studentNames = {};

// 2. Declare an empty array using JS object notation to store
// student names in future.

var studentNames = [];

// 3. Declare and initialize a strings array.

var fruits = ["apple", "banana", "cherry"];

// 4. Declare and initialize a numbers array.

var numbers = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.

var booleans = [true, false];

// 6. Declare and initialize a mixed array.

var mixed = ["apple", 2, true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];

document.writeln("<h3>Q7 Result:</h3>");
document.writeln("<h2>Qualifications</h2>");
for (var i = 0; i < qualifications.length; i++) {
  document.writeln(i + 1 + ") " + qualifications[i] + "<br>");
}
document.writeln("<br>");

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var students = ["Ali", "Kamran", "Ahmed"];
var scores = [370, 420, 290];

document.writeln("<h3>Q8 Result:</h3>");
document.writeln(
  "Score of " +
    students[0] +
    " is " +
    scores[0] +
    ". Percentage: " +
    (scores[0] / 500) * 100 +
    "%<br>"
);
document.writeln(
  "Score of " +
    students[1] +
    " is " +
    scores[1] +
    ". Percentage: " +
    (scores[1] / 500) * 100 +
    "%<br>"
);
document.writeln(
  "Score of " +
    students[2] +
    " is " +
    scores[2] +
    ". Percentage: " +
    (scores[2] / 500) * 100 +
    "%<br>"
);

// 9. Initialize an array with color names. Display the array
// elements in your browser.
var colors = [" Red", " Green", " Blue"];

document.writeln("<h3>Q9 Result:</h3>");
document.writeln("Colors: " + colors + "<br>");

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

var color = prompt("What color do you want to add to the beginning?");
colors.unshift(color);
document.writeln(
  "After adding " + color + " to the beginning: " + colors + "<br>"
);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

var color = prompt("What color do you want to add to the end?");
colors.push(color);
document.writeln("After adding " + color + " to the end: " + colors + " <br>");

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

colors.unshift("Yellow", "Orange");
document.writeln(
  "After adding two more colors to the beginning: " + colors + "<br>"
);

// d. Delete the first color in the array. Display the updated
// array in your browser.

colors.shift();
document.writeln("After deleting the first color: " + colors + "<br>");

// e. Delete the last color in the array. Display the updated
// array in your browser.

colors.pop();
document.writeln("After deleting the last color: " + colors + "<br>");

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

var index = prompt("At what index do you want to add a color?");
var color = prompt("What color do you want to add?");
colors.splice(index, 0, color);
document.writeln(
  "After adding " + color + " at index " + index + ": " + colors + "<br>"
);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var index = prompt("At what index do you want to delete colors?");
var numColors = prompt("How many colors do you want to delete?");
colors.splice(index, numColors);
document.writeln(
  "After deleting " +
    numColors +
    " colors at index " +
    index +
    ": " +
    colors +
    "<br><br>"
);

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var scores = [320, 230, 480, 120];
document.writeln("<h3>Q10 Result:</h3>");
document.writeln("Scores of students: " + scores + "<br>");
scores.sort();
document.writeln("Ordered scores of students: " + scores + "<br><br>");

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Quetta",
  "Peshawar",
  "Rawalpindi",
  "Faisalabad",
];
var selectedCities = cities.slice(1, 3);
document.writeln("<h3>Q11 Result:</h3>");
document.writeln("Cities: " + cities + "<br>");
document.writeln("Selected cities: " + selectedCities + "<br><br>");

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
document.writeln("<h3>Q12 Result:</h3>");
document.writeln("Array: <br>" + arr + "<br><br>");
document.writeln("String: <br>" + arr.join(" ") + "<br><br>");

//13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];

document.writeln("<h3>Q13 Result:</h3>");
document.writeln("Devices: <br>" + devices + "<br><br>");
document.writeln("Out: <br>" + devices.join("<br>Out:<br>") + "<br><br>");

//14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

document.writeln("<h3>Q14 Result:</h3>");
document.writeln("Devices: <br>" + devices + "<br><br>");
devices.reverse();
document.writeln("Out: <br>" + devices.join("<br>Out:<br>") + "<br><br>");

// 15.Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

document.writeln("<h3>Q15 Result:</h3>");
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.writeln(
  "<select>" + "<option>" + manufacturers[0] + "</option>" + "<option>" +
    manufacturers[1] +
    "</option>" +
    "<option>" +
    manufacturers[2] +
    "</option>" +
    "<option>" +
    manufacturers[3] +
    "</option>" +
    "<option>" +
    manufacturers[4] +
    "</option>" +
    "<option>" +
    manufacturers[5] +
    "</option>" + 
    "</select> " + "<br><br>"
);

