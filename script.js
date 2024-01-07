// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("Please enter password length (8-128")

  
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength)) {
    alert("Invalid input. Please enter a valid number.");
    return null;
  }
  
  if (passwordLength < 8){
    alert("Invalid password length. Please enter a number between 8 and 128")
    return null;
  }
  if (passwordLength >128){
    alert("Invalid password length. Please enter a number between 8 and 128")
    return null;
  }


  var passwordObject = {
    size: passwordLength,
    special: confirm("Do you want to use special characters?"),
    numeric: confirm("Do you want to use numbers?"),
    lower: confirm("Do you want to use lower case characters?"),
    upper: confirm("Do you want to use upper case characters?"),
  }
return passwordObject;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
getRandom(upperCasedCharacters)

// Function to generate password with user input
function generatePassword() {

var passwordOptions = getPasswordOptions();
//   if (passwordOptions === null) {
//     return null;
//   } {

var combinedCharacters = []
if (passwordOptions.special === true) {
  combinedCharacters = Array.from(combinedCharacters).concat(specialCharacters);
}
if (passwordOptions.numeric === true) {
  combinedCharacters = Array.from(combinedCharacters).concat(numericCharacters);
}
if (passwordOptions.lower === true) {
  combinedCharacters = Array.from(combinedCharacters).concat(lowerCasedCharacters);
}
if (passwordOptions.upper === true) {
  combinedCharacters = Array.from(combinedCharacters).concat(upperCasedCharacters);
}


var passwordString = ""
for (var index = 0; index < passwordOptions.size; index++) {
  passwordString += getRandom(combinedCharacters);
}

console.log(passwordString)


return "GeneratedPassword123";
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


