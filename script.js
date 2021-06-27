// Assignment Code

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var choices;

// converts letters to uppercase 
var toUpper = function (x) {
  return x.toUpperCase();
};

// creates a variable for uppercase conversion
uppercaseChar = lowercaseChar.map(toUpper);


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Start function generate password
function generatePassword() {

  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  if(!enter) {
    alert("This needs a value");
  } else if (enter <8 || enter > 128) {

    enter = parseInt(prompt("you must choose between 8 and 128"));
  }

 else {
  // Continues once user input is validated
  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacter = confirm("Will this contain special characters?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");
};

// Else if for 4 negative choices


if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria");

}

// If statement that uses input prompts to determine choices

else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = specialChar.concat(numberChar, lowercaseChar, uppercaseChar);

}

 // Else if for 3 positive options
 else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = specialChar.concat(numberChar, uppercaseChar);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = specialChar.concat(numberChar, lowercaseChar);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = specialChar.concat(lowercaseChar, uppercaseChar);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = numberChar.concat(lowercaseChar, uppercaseChar);
}

 // Else if for 2 positive options 
else if (confirmCharacter && confirmNumber) {
  choices = specialChar.concat(numberChar);

} else if (confirmCharacter && confirmLowercase) {
  choices = specialChar.concat(lowercaseChar);

} else if (confirmCharacter && confirmUppercase) {
  choices = specialChar.concat(uppercaseChar);
}
else if (confirmLowercase && confirmNumber) {
  choices = lowercaseChar.concat(numberChar);

} else if (confirmLowercase && confirmUppercase) {
  choices = lowercaseChar.concat(uppercaseChar);

} else if (confirmNumber && confirmUppercase) {
  choices = numberChar.concat(uppercaseChar);
}

   // Else if for 1 positive option
else if (confirmCharacter) {
  choices = specialChar;
}
else if (confirmNumber) {
  choices = numberChar;
}
else if (confirmLowercase) {
  choices = lowercaseChar;
};

var password = [];


 // Start random selection variables:
 // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }

// This joins the password array and converts it to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textBox
// Changed function input to use textContent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

