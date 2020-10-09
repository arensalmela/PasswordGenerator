const lowercaseletters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercaseletters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "t",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const specialcharacters = [
  "!",
  "#",
  "$",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "?",
  "^",
  "@",
  "~",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function passwordOptions() {
  let length = parseInt(
    prompt("Please select the number of characters for your password.")
  );

  if (isNaN(length) === true) {
    alert("Please imput a number!");
    return;
  }

  if (length < 8 || length > 128) {
    alert("Please select a number between 8 and 128.");
    return;
  }
  let haslowercaseletters = confirm(
    "Would you like lowercase letters in your password?"
  );

  let hasuppercaseletters = confirm(
    "Would you like uppercase letters in your password?"
  );

  let hasspecialcharacters = confirm(
    "Would you like special characters in your password?"
  );
  let hasnumbers = confirm(
    "Would you like special characters in your password?"
  );

  if (
    haslowercaseletters === false &&
    hasuppercaseletters === false &&
    hasspecialcharacters === false &&
    hasnumbers === false
  ) {
    alert("Please select at least one character type.");
    return;
  }

  let passwordObject = {
    haslowercaseletters,
    hasuppercaseletters,
    hasspecialcharacters,
    hasnumbers,
    length,
  };
  return passwordObject;
}

function Random(arr) {
  let randomindex = Math.floor(Math.random() * arr.length);
  let randomelement = arr[randomindex];
  return randomelement;
}

function generatePassword() {
  let options = passwordOptions();
  let result = [];
  let possiblecharacters = [];
  let definitecharacters = [];

  if (options.haslowercaseletters) {
    possiblecharacters = possiblecharacters.concat(lowercaseletters);
    definitecharacters.push(Random(lowercaseletters));
  }

  if (options.hasuppercaseletters) {
    possiblecharacters = possiblecharacters.concat(uppercaseletters);
    definitecharacters.push(Random(uppercaseletters));
  }

  if (options.hasspecialcharacters) {
    possiblecharacters = possiblecharacters.concat(specialcharacters);
    definitecharacters.push(Random(specialcharacters));
  }

  if (options.hasnumbers) {
    possiblecharacters = possiblecharacters.concat(numbers);
    definitecharacters.push(Random(numbers));
  }

  for (let i = 0; i < options.length; i++) {
    let possiblecharacter = Random(possiblecharacters);
    result.push(possiblecharacter);
  }

  for (let i = 0; i < definitecharacters.length; i++) {
    result[i] = definitecharacters[i];
  }

  return result.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
