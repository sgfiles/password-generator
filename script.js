const specialCharacter = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':',
  ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
]
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
function passwordOptions() {
  var passwordLength = prompt("Enter the length of your password");
  if (passwordLength >= 8) {
    alert("Password must be 8 to 128 characters");
    return null;
  } 
  if ( passwordLength >= 128) {
    alert("Password must be 8 to 128 characters");
    return null;
  }
  
  var hasSpecialCharacter = confirm("Include special Character")
  var hasUpperCase = confirm("Include upperCase")
  var hasLowerCase = confirm("Include lowerCase")
  var hasNumbers = confirm("Include numbers")
 
  var optionsPassword = {
    passwordLength: passwordLength,
    hasSpecialCharacter: hasSpecialCharacter,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
    hasLowerCase: hasLowerCase
    
  }
  return optionsPassword
}

function getRandom() {
  var randomIndex =   Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex]
  return randomElement
}
function generatePassword() {
 var options = passwordOptions()
 var results = []
 var possibleCharacters = []
 var essentialCharacters = []
if (options.hasSpecialCharacter) {
  possibleCharacters = possibleCharacters.concat(specialCharacter)
  essentialCharacters.push(getRandom(specialCharacter))
}
if (options.hasLowerCase) {
  possibleCharacters = possibleCharacters.concat(hasLowerCase)
  essentialCharacters.push(getRandom(hasLowerCase))
}
if (options.hasUpperCase) {
  possibleCharacters = possibleCharacters.concat(hasUpperCase)
  essentialCharacters.push(getRandom(hasUpperCase))
}
if (options.hasNumbers) {
  possibleCharacters = possibleCharacters.concat(hasNumbers)
  essentialCharacters.push(getRandom(hasNumbers))
}
for (let i = 0;  i < options.length; i++) {
  var possibleSingleCharacter = getRandom(possibleCharacters)
  results.push(possibleSingleCharacter)
  
}
for (let i = 0; i < essentialCharacters.length; i++) {
  results[i] = essentialCharacters[i]
  
}
return results.join('')
}
// Assignment Code creates button to generate password on screen
var generateBtn = document.querySelector("#generate");

//Page asks before output


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


  




