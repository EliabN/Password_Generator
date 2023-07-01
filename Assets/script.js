// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = [];

function generatePassword() {

  var userNumb = parseInt(window.prompt("Please enter the length of the password; Recommended at least 8 to 14 characters (No more than 128 characters)."));
  

  if (userNumb < 8 || userNumb > 128) {
    window.alert("Error: Enter required length!");
    return generatePassword();
  }

  
  var lowerCase = window.confirm("Would you like to include lowercase");

  var upperCase = window.confirm("Would you like to include uppercase");

  var numeric = window.confirm("Would you like to include numeric");

  var specialChar = window.confirm("Would you like to include special characters");


  if (lowerCase) { 
    var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var index = Math.floor(Math.random() * alphabetLower.length);
    password = (password + alphabetLower[index]);
  }

  if (upperCase) {
    var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    var index = Math.floor(Math.random() * alphabetUpper.length);
    password = (password + alphabetUpper[index]);
  }

  if (numeric) {
    var numb = [0,1,2,3,4,5,6,7,8,9];

    var index = Math.floor(Math.random() * numb.length);
    password = (password + numb[index]);
  }

  if (specialChar) { 
    var spCharacters = ["!","#","$","%","&","(",")","*","+","-","/",":",";","<","=",">","?","@","[","\"","]","^","_","`","{","|","}","~",",","'","\"",")"]
    
    var index = Math.floor(Math.random() * spCharacters.length);
    password = (password + spCharacters[index]);
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
