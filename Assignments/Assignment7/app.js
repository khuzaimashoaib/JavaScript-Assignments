var d = new Date();
var day = d.getDay();
var month = d.getMonth();
var date = d.getDate();
var year = d.getFullYear();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
var time = d.getTime();
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Q-1
document.writeln("<br><h3>Q1 Result:</h3>");
document.writeln("Current date & time: " + d);

// Q-2
document.writeln("<br><h3>Q2 Result:</h3>");
document.writeln("Current Month: " + monthNames[month]);

// Q-3
alert("Q3: Today is " + dayNames[d.getDay()]);

// Q-4
document.writeln("<br><h3>Q4 Result:</h3>");
if (day === 0 || day === 6) {
  document.writeln("It's Fun day ");
}

// Q-5
if (d.getDate < 16) {
    alert("Q5: First fifteen days of the month");
} else {
    alert("Q5: Last days of the month");
}

// Q-6

document.writeln("<br><h3>Q6 Result:</h3>");
var msSinceEpoch = time;
var minutesSinceEpoch = Math.floor(msSinceEpoch / (1000 * 60));
var millisecSinceEpoch = Math.floor(msSinceEpoch / 1000);
document.writeln("Current Date: " + d);
document.writeln(
  "<br>Milliseconds since midnight, Jan. 1, 1970: " + millisecSinceEpoch
);
document.writeln(
  "<br>Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch
);

// Q-7
if (hour < 12) {
  alert("Q7: It's AM");
} else {
  alert("Q7: It's PM");
}

// Q-8
document.writeln("<br><h3>Q8 Result:</h3>");

var preDate = new Date("Dec 31, 2020");
document.writeln("Previous Date: " + preDate);

// Q-9
const ramadanStart = new Date("June 18, 2015");
const timeDiff = d - ramadanStart;
const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
alert("Q9: Number of days passed since 1st Ramadan: " + daysPassed);

// Q-10
document.writeln("<br><h3>Q10 Result:</h3>");
const start2015 = new Date("January 1, 2015");
const diffInMs = d - start2015;
const diffInSeconds = Math.floor(diffInMs / 1000);
document.writeln(
  "On reference date " +
    d +
    ",<br>" +
    diffInSeconds +
    " seconds have passed since the beginning of 2015."
);

// Q-11
document.writeln("<br><h3>Q11 Result:</h3>");

var oneHourAgo = new Date(d);
oneHourAgo.setHours(hour - 1);

document.writeln("current date: " + d + "<br>");
document.writeln("1 hour ago, it was " + oneHourAgo);

// Q-12
document.writeln("<br><h3>Q12 Result:</h3>");

var hundredYearAgo = new Date(d);
hundredYearAgo.setFullYear(year - 100);

document.writeln("current date: " + d + "<br>");
document.writeln("100 years back, it was " + hundredYearAgo);

// Q-13
document.writeln("<br><h3>Q13 Result:</h3>");

var age = prompt("What is your age?");
var birthYear = year - age;
document.writeln("Your age is " + age + "<br>");
document.writeln("Your birth year is " + birthYear);

// Q-14
document.writeln("<br><h3>Q14 Result:</h3>");
document.writeln("<h2>K-Electric Bill</h2>");
var customerName = "Khuzaima Shoaib";
var currentMonth = monthNames[month];
var numberUnits = 410;
var chargesPerUnit = 16;
var netAmountPayable = numberUnits * chargesPerUnit;
var latePaymentSurcharge = 350;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.writeln("Customer Name: <strong>" + customerName + "</strong>");
document.writeln("<br>Month: <strong>" + currentMonth + "</strong>");
document.writeln("<br>Number of units: <strong>" + numberUnits + "</strong>");
document.writeln(
  "<br>Charges per unit: <strong>" + chargesPerUnit + "</strong>"
);

document.writeln(
  "<br><br>Net Payable Amount (Within Due Date): <strong>" +
    netAmountPayable +
    "</strong>"
);
document.writeln(
  "<br>Late Payment Surcharge:  <strong>" + latePaymentSurcharge + "</strong>"
);
document.writeln(
  "<br>Gross Amount Payable (After Due Date):  <strong>" +
    grossAmountPayable +
    "</strong>"
);
