// Q-1

// var user_birth = prompt("Enter your birth year: ");
// var age = 2025 - user_birth;
// alert("Your age is " + age);

// Q-2

// var num_arr = [];

// for (let i = 0; i < 5; i++) {
//   var sum = +prompt(`Enter Number ${i + 1}`);
//   num_arr.push(sum);
// }
// var sum_of_num = 0;

// for (let i = 0; i < num_arr.length; i++) {
//   var sum_of_num = num_arr[i] + sum_of_num;
// }
// var average = sum_of_num / 5;
// console.log(average);

// Q-3

// var arr_10 = [12, 25, 33, 47, 60, 78, 91, 30, 18, 100];
// document.writeln( "Numbers Divisible By 3: <br> ");

// for (var i = 0; i < arr_10.length; i++) {
//   if (arr_10[i] % 3 === 0) {
//     // console.log(arr_10[i]);
//     document.writeln(arr_10[i] + "<br>");
// }}

// Q-4

// var number = prompt("Enter a number to find its factorial:");
// var factorial = 1;

// for (var i = 1; i <= number; i++) {
//   factorial *= i;
// }
// document.writeln("Factorial of " + number + " is: " + factorial);

// Q-5

// var input = prompt("Enter a string to reverse:");
// var reversed = "";
// for (var i = input.length - 1; i >= 0; i--) {
//   reversed += input[i];
// }
// console.log("Reversed string is: " + reversed);
// document.writeln("Reversed string is: " + reversed);

// Q-6

// var letter = prompt("Enter a String:");
// var text = "a";
// var count = 0;

// for (var i = 0; i < letter.length; i++) {
//   if (letter[i] === text) {
//     count++;
//   }
// }

// console.log("The letter '" + letter + "' appears " + count + " times.");
// document.writeln("The letter '" + text + "' appears " + count + " times.");

// Q-7

// var nameArr = [];

// // for (var i = 0; i < 5; i++) {
// //   var userName = prompt(`Enter Name ${i + 1}:`);
// //   nameArr.push(userName);
// // }
// // nameArr.sort();

// // for (var i = 0; i < nameArr.length; i++) {
// //   console.log(nameArr[i]);
// // }

// // 2nd Method

// for (var i = 0; i < 5; i++) {
//   nameArr[i] = prompt(`Enter Name ${i + 1}:`);
// }
// nameArr.sort();
// console.log(nameArr);

// Q-8

// var table = prompt("Enter a number for Table:");

// for (var i = 1; i < 11; i++) {
//     console.log(`${table} x ${i} = ${table * i}`);
// }

// Q-9

// var sentence = prompt("Enter a sentence:");
// var ch = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// var count = 0;

// for (var i = 0; i < sentence.length; i++) {
//   for (var j = 0; j < ch.length; j++) {
//     if (ch[j] === sentence[i]) {
//       count++;
//     }
//   }
// }
// 2nd Method

// for (var i = 0; i < sentence.length; i++) {
//   var ch = sentence[i];
//   if (
//     ch === "a" ||
//     ch === "e" ||
//     ch === "i" ||
//     ch === "o" ||
//     ch === "u" ||
//     ch === "A" ||
//     ch === "E" ||
//     ch === "I" ||
//     ch === "O" ||
//     ch === "U"
//   ) {
//     count++;
//   }
// }

// console.log("The sentence contains " + count + " vowels.");

// Q-10

// var products = ["Laptop", "Phone", "Headphones", "Mouse", "Keyboard"];
// var prices = [50000, 20000, 3000, 500, 1000];

// for (var i = 0; i < products.length; i++) {
//   console.log(products[i] + " - Rs " + prices[i]);
// }

// Q-11

// var celsius = prompt("Enter temperature in Celsius:");
// var fahrenheit = (celsius * 9 / 5) + 32;

// alert(celsius + "°C is equal to " + fahrenheit + "°F");

// Q-12

// var palindromeInput = prompt("Enter palindrome word:");
// var palindrome = "";
// for (var i = palindromeInput.length - 1; i >= 0; i--) {
//   palindrome += palindromeInput[i];
// }
// if (palindrome === palindromeInput) {
//   alert(palindrome + " is a palindrome");
// } else {
//   alert(palindrome + " is not a palindrome");
// }

// Q-13 

// var number = +prompt("Enter a number: ");
// var count = false;
// for (var i = 2; i < number; i++) {
//   var remainder = number % i;
//   console.log(remainder);

//   if (remainder === 0) {
//     count = true;
//     break;
//   }
// }
// if (!count) {
//   console.log(number + " is a prime number");
// } else {
//   console.log(number + " is not a prime number");
// }

// Q-14

// var numbers = [105,16,24,32,40,56,64,72,80,98];

// var max = numbers[0];
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log("Largest number: " + max);

// Q-15

// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operator = prompt("Enter the operator (+, -, *, /):");
// var result;

// if (operator === "+") {
//   result = num1 + num2;
// } else if (operator === "-") {
//   result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
//   if (num2 !== 0) {
//     result = num1 / num2;
//   } else {
//     result = "Error: Division by zero!";
//   }
// } else {
//   result = "Invalid operator!";
// }

// alert("Result: " + result);

// Q-16

// var numbers = [12, 75, 43, 89, 21, 55, 67, 30];
// var greaterThan50 = [];

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 50) {
//     greaterThan50.push(numbers[i]);
//   }
// }

// console.log("Numbers greater than 50:", greaterThan50);
