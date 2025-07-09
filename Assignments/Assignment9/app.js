const lengthSlider = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const specialCheckbox = document.getElementById("special");
const passwordOutput = document.getElementById("passwordOutput");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const specialChars = "!@#$%^&*()_+{}[]<>=~";

function generatePassword() {
  let length = parseInt(lengthSlider.value);
  let includeUppercase = uppercaseCheckbox.checked;
  let includeLowercase = lowercaseCheckbox.checked;
  let includeNumbers = numbersCheckbox.checked;
  let includeSpecial = specialCheckbox.checked;

  let charSet = "";
  if (includeUppercase) charSet += upperChars;
  if (includeLowercase) charSet += lowerChars;
  if (includeNumbers) charSet += numberChars;
  if (includeSpecial) charSet += specialChars;

  if (charSet === "") {
    alert("Please select at least one character type.");
    return;
  }

  let finalPassword = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    finalPassword += charSet[randomIndex];
  }

  passwordOutput.value = finalPassword;
}

// copy button event
function copyPassword() {
  navigator.clipboard.writeText(passwordOutput.value);
  alert("Password copied!");
}

