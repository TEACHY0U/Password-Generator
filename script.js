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

  if (passwordLength > 128) {
    alert("Password must not have more than 128 characters!")
    return "";
  }

// creates boolean for lowercase yes or no.

var lowercaseCharChoice = confirm("Lowercase Characters?")

if (lowercaseCharChoice) {
  passwordChar += lowercaseChar;
}

// creates boolean for uppercase yes or no.
var uppercaseCharChoice = confirm("Uppercase Characters?")

if (uppercaseCharChoice) {
  passwordChar += uppercaseChar;
}

// creates boolean for numbers yes or no.
var numberCharChoice = confirm("Do you want numbers for your password?")

if (numberCharChoice) {
  passwordChar += numberChar;
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
