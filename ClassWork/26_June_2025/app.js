// 1. Write a function that takes an array of numbers and returns their sum.

function sumOfNumbers(numbers) {
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

var numbers = [8, 65, 43, 59, 5];
var sum = sumOfNumbers(numbers);
document.writeln("<h3>Q1 Result:</h3>");
document.writeln("Array of numbers: " + numbers + "<br>");
document.writeln("Sum of numbers: " + sum);

// 2. Write a function that reverses a string.

function reverseString(str) {
  var reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
var str = prompt("Enter a Sentence ");
var reverse = reverseString(str);
document.writeln("<br><h3>Q2 Result:</h3>");
document.writeln("String: " + str);
document.writeln("<br>Reverse String: " + reverse);

// 3. Write a function that finds the largest number in an array.

function largestNumber(arr) {
  var largest = Math.max(...arr);
  return largest;
}
var largestArr = [9, 82, 100, 561, 761];
var largest = largestNumber(largestArr);
document.writeln("<br><h3>Q3 Result:</h3>");
document.writeln(largestArr + "<br>");
document.writeln("Largest number: " + largest);

// 4. Write a function that counts the number of vowels in a string.

var count = 0;
function countVowels(sentence) {
  var ch = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (var i = 0; i < sentence.length; i++) {
    for (var j = 0; j < ch.length; j++) {
      if (ch[j] === sentence[i]) {
        count++;
      }
    }
  }
  return count;
}
document.writeln("<br><h3>Q4 Result:</h3>");
countVowels(str);
document.writeln("The sentence contains " + count + " vowels.");

// 5. Write a function that removes duplicates from an array.

function removeDuplicate(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
document.writeln("<br><h3>Q5 Result:</h3>");
var duplicateArr = [5, 6, 89, 67, 28, 34, 67, 34, 88, 9, 5, 6, 28, 67, 9];
var uniqueArr = removeDuplicate(duplicateArr);
document.writeln("Duplicate array:" + duplicateArr + "<br>");
document.writeln("Unique array: " + uniqueArr);

// 6. Write a function that capitalizes the first letter of each word in a sentence.

function capitalizeFirstLetter(sentence) {
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

document.writeln("<br><h3>Q6 Result:</h3>");
var capitalizedSentence = capitalizeFirstLetter(str);
document.writeln("Original sentence: " + str);
document.writeln("<br>Capitalized sentence: " + capitalizedSentence);
