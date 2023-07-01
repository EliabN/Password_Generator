// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = [];

function generatePassword() {

  var lowerCase = window.confirm("Would you like to include lowercase");


  if (lowerCase) { 
    var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var index = Math.floor(Math.random() * alphabetLower.length);
    password = (password + alphabetLower[index]);
  }
}

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
