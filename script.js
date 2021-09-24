const specialCharacter = ['@', '%','+', '\\','/',"'",'!','#','$','^','?',':',
  ',',')','(','}', '{', ']', '[','~','-', '_', '.'
]
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k',
  'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

const upperCase = ['A','B','C', 'D', 'E','F','G','H','I','J','K',
  'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

 // Assignment Code creates button to generate password on screen
   var generateBtn = document.querySelector("#generate");

 //Page asks before output
   var hasNumbers = confirm("Include numbers")
    if(hasNumbers) {
      Math.floor(Math.random() * 128);
    } 
   var hasspecialCharacter = confirm("Include special Character")
   var hasupperCase = confirm("Include upperCase")
   var haslowerCase = confirm("Include lowerCase")


   var passwordLength = prompt("Enter the length of your password");
   if(passwordLength >= 8 && (passwordLength >= 128));
   alert("Password must be 8 to 128 characters");
   if(passwordLength >= 8 && (passwordLength <= 128)) {
   window.confirm("Click Generate Password");
   }

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

  generateBtn.addEventListener("click", writePassword);


  
   

