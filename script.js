// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()*-.:;<>=?{}[]|`~/+"


function generatePassword() {

  var password = "";
  var passwordChar ="";
  // makes user prompt to select password length
  var passwordLength = prompt ("Password must be least 8 characters and no more than 128 characters.")
  passwordLength =  Math.floor(passwordLength);

  if (passwordLength < 8) {
    alert("Password must have more than 7 characters!");
    return "";

  }




  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
