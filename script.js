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

  let options = {
    passLength: 0,
    withUpperCase: false,
    withLowerCase: false,
    withNumbers: false,
    withSpecialChar: false,
  }
  
  while (options.passLength < 10 || options.passLength > 64) {
    
    options.passLength = Number(prompt("How long would you like your password to be?"));
    console.log(options.passLength);
    
    if (options.passLength < 10 || options.passLength > 64) {
      alert("Please type a number between 10 and 64");
    }
  }

  alert(`You want a password that is ${options.passLength} characters long`);

  while (!options.withLowerCase && !options.withUpperCase && !options.withNumbers && !options.withSpecialChar) {
    
    options.withLowerCase = confirm("Would you like to include Lower Case Characters?");
    options.withUpperCase = confirm("Would you like to include Upper Case Characters?");
    options.withNumbers = confirm("Would you like to include Numbers?");
    options.withSpecialChar = confirm("Would you like to include Special Characters?");
        
    if (!options.withLowerCase && !options.withUpperCase && !options.withNumbers && !options.withSpecialChar)
    alert("Please choose at least one character type");
  }

  return options;

}

// Function for getting a random element from an array
function getRandom(arr) {

    x = arr[Math.floor(Math.random()*arr.length)];
    return x;
}
  
// Function to generate password with user input
function generatePassword() {
  
  const options = getPasswordOptions();

  let password = "";

  while (password.length <= options.passLength) {
    
    if (options.withLowerCase) {
      password += getRandom(lowerCasedCharacters);
    }
    if (options.withUpperCase) {
      password += getRandom(upperCasedCharacters);
    }
    if (options.withNumbers) {
      password += getRandom(numericCharacters);
    }
    if (options.withSpecialChar) {
      password += getRandom(specialCharacters);
    }
  }

  if (password.length > options.passLength) {
    password = password.slice(0, options.passLength);
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