

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

// Prompting user input with conditionals. They select the length and which types of characters they want in their password.
 
function passwordOptions() {
  let length = parseInt(
    prompt("Please select the number of characters for your password.")
  );

  if (isNaN(length)) {
    alert("Please imput a number!");
    return;
  }

  
  if (length < 8 || length > 128) {
    alert("Please select a number between 8 and 128.");
    return;
  }
  
  let UserSelectedLwrCase = confirm("Would you like lowercase letters in your password?");

  let UserSelectedUprCase = confirm("Would you like uppercase letters in your password?");

  let UserSelectedSpclChar = confirm("Would you like special characters in your password?");

  let UserSelectedNmbr = confirm("Would you like special characters in your password?");
  
  // If statement to make sure user selected atleast one character field. 

  if (
    UserSelectedLwrCase === false &&
    UserSelectedUprCase === false &&
    UserSelectedSpclChar === false &&
    UserSelectedNmbr === false
  ) {
    alert("Please select at least one character type.");
    return;
  }

  // User input stored in SelectedRequirements.

  let SelectedRequirements = {
    length,
    UserSelectedLwrCase,
    UserSelectedUprCase,
    UserSelectedSpclChar,
    UserSelectedNmbr,
  };
  return SelectedRequirements;
}

// Randomizer to select random element from each array.

function Random(arr) {
  let randomindex = Math.floor(Math.random() * arr.length);
  let randomelement = arr[randomindex];
  return randomelement;
}

// This function will generate password with user input. Options variable stores user input from above. 

function generatePassword() {
  let options = passwordOptions();
  let result = [];
  let possiblecharacters = [];
  let definitecharacters = [];

  // Statements add to possible characters array based off of user input. 
  // If user selected character type, one character will be pushed to definite character array.

  if (options.UserSelectedLwrCase) {
    possiblecharacters = possiblecharacters.concat(lowercaseletters);
    definitecharacters.push(Random(lowercaseletters));
    console.log(possiblecharacters);
  }

  if (options.UserSelectedUprCase) {
    possiblecharacters = possiblecharacters.concat(uppercaseletters);
    definitecharacters.push(Random(uppercaseletters));
    console.log(possiblecharacters);
  }

  if (options.UserSelectedSpclChar) {
    possiblecharacters = possiblecharacters.concat(specialcharacters);
    definitecharacters.push(Random(specialcharacters));
    console.log(possiblecharacters);
  }

  if (options.UserSelectedNmbr) {
    possiblecharacters = possiblecharacters.concat(numbers);
    definitecharacters.push(Random(numbers));
    console.log(possiblecharacters);
  }

  // For loop used to select from possible characters array. Will run based off of user selected length.

  for (let i = 0; i < options.length; i++) {
    let possiblecharacter = Random(possiblecharacters);
    result.push(possiblecharacter);
  }

  // Definite character being added to result.

  for (let i = 0; i < definitecharacters.length; i++) {
    result[i] = definitecharacters[i];
    console.log(definitecharacters);
  }

  // Result is now a string. 

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
