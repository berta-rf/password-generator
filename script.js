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

// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Length of password
// At least 10 characters but no more than 64.
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// Code should validate for each input and at least one character type should be selected
// Once prompts are answered then the password should written to the page


let passLength = 0;

let withLowerCase = false;
let withUpperCase = false;
let withNumbers = false;
let withSpecialChar = false;

function getPasswordOptions() {
  
  while (passLength < 10 || passLength > 64) {
    
    passLength = Number(prompt("How long would you like your password to be?"));
    console.log(passLength);
    
    if (passLength < 10 || passLength > 64) {
      alert("Please type a number between 10 and 64");
    }
  }

  alert(`You want a password that is ${passLength} characters long`);

  while (!withLowerCase && !withUpperCase && !withNumbers && !withSpecialChar) {
    
    
    withLowerCase = confirm("Would you like to include Lower Case Characters?");
    withUpperCase = confirm("Would you like to include Upper Case Characters?");
    withNumbers = confirm("Would you like to include Numbers?");
    withSpecialChar = confirm("Would you like to include Special Characters?");
        
    if (!withLowerCase && !withUpperCase && !withNumbers && !withSpecialChar)
    alert("Please choose at least one character type");
  }

}

// Function to prompt user for password options

// Function for getting a random element from an array
function getRandom(arr) {

    x = arr[Math.floor(Math.random()*arr.length)];
    return x;
}
  

// Function to generate password with user input
function generatePassword() {
  
  getPasswordOptions();

  let password = "";

  while (password.length <= passLength) {
    
    if (withLowerCase) {
      password += getRandom(lowerCasedCharacters);
    }
    if (withUpperCase) {
      password += getRandom(upperCasedCharacters);
    }
    if (withNumbers) {
      password += getRandom(numericCharacters);
    }
    if (withSpecialChar) {
      password += getRandom(specialCharacters);
    }

  }

  if (password.length > passLength) {
    password = password.slice(0, passLength);
  }

  // shuffles the generated characters
  let shuffledPassword = password.split("").sort(() => 0.5 - Math.random()).join("");

  return shuffledPassword;

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