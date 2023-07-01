// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creating empty array called password
var password = [];

// Generate password that meets certain criteria
function generatePassword() {

  // Ask user for their choice of password length
  var userNumb = parseInt(window.prompt("Please enter the length of the password; Recommended at least 8 to 14 characters (No more than 128 characters)."));
  
  // If length less than 8 or more than 128, immediately end function
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
  if (userNumb < 8 || userNumb > 128) {
    window.alert("Error: Enter required length!");
    return generatePassword();
  }

  // Ask user for password criteria
  var lowerCase = window.confirm("Would you like to include lowercase");

  var upperCase = window.confirm("Would you like to include uppercase");

  var numeric = window.confirm("Would you like to include numeric");

  var specialChar = window.confirm("Would you like to include special characters");

  // Run iteration until password length matches user choice 
  for (password > -1; password.length < userNumb;) {

    // Same for lowercase
    if (lowerCase) { 
      // Create alphabet array with of lowercase letters
      var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      // Get random letter from alphabet and add to password
      var index = Math.floor(Math.random() * alphabetLower.length);
      password = (password + alphabetLower[index]);
    }


    // If user pressed OK on upperCase popup run if statement
    if (upperCase) {
      // Create alphabet array with of uppercase letters
      var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

      // Get random letter from alphabet and add to password
      var index = Math.floor(Math.random() * alphabetUpper.length);
      password = (password + alphabetUpper[index]);
    }

    // Same for numeric
    if (numeric) {
      // Create an array with of numeric values
      var numb = [0,1,2,3,4,5,6,7,8,9];
  
      // Get random number from array and add to password
      var index = Math.floor(Math.random() * numb.length);
      password = (password + numb[index]);
    }

    // Same for special
    if (specialChar) { 
      // Create an array with of special characters
      var spCharacters = ["!","#","$","%","&","(",")","*","+","-","/",":",";","<","=",">","?","@","[","\"","]","^","_","`","{","|","}","~",",","'","\"",")"]
      
      // Get random character from array and add to password
      var index = Math.floor(Math.random() * spCharacters.length);
      password = (password + spCharacters[index]);
    }
  }
}


// Write password to the #password input
function writePassword() {
  generatePassword();
  // Create an element from document
  var passwordText = document.querySelector("#password");

  // Run generate password function
  generatePassword();

  // Show password
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
