// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerAlphaNumericCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperAlphaNumericCharacers = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Write password to the #password input
function writePassword() {
  function userPromptsForPassword() {
    // Prompts user for length of password.. if less than 8 then will not accept.. if greater than 28 then will not accept.
    const passwordLength = parseInt(
      prompt("How long do you want your password to be?"),
      10
    );
    if (passwordLength < 8 || passwordLength > 28) {
      alert("Your password length must be greater than 8 and less than 28!");
      return null;
    } else if (isNaN(passwordLength)) {
      alert("Please use a number to indicate the length of the password!");
      return null;
    }

    // Prompts the user which characters they would like to use.
    var useLowerAlphaNumericCharacters = confirm(
      "Would you like to use lowercased alphanumeric characters?"
    );

    var useUpperAlphaNumericCharacters = confirm(
      "Would you like to use uppercase alphanumeric characters?"
    );

    var useNumericCharacters = confirm(
      "Would you like to use numeric characters?"
    );

    var useSpecialCharacters = confirm(
      "Would you like to use special characters?"
    );

    var useConfirms = {
      passwordLength: passwordLength,
      useLowerAlphaNumericCharacters: useLowerAlphaNumericCharacters,
      useUpperAlphaNumericCharacters: useUpperAlphaNumericCharacters,
      useNumericCharacters: useNumericCharacters,
      useSpecialCharacters: useSpecialCharacters,
    };

    return useConfirms;
  }

  // Scrambles desired array character and returns as a string
  function randomizePassword(array) {
    var scrambleCharacters = Math.floor(Math.random() * array.length);
    var arrayOfCharacters = array[scrambleCharacters];

    return arrayOfCharacters;
  }

  function generatePassword() {
    const passwordPrompts = userPromptsForPassword();

    const userPassword = [];

    let passwordCharacters = [];

    const returnPassword = [];

    if (passwordPrompts.useLowerAlphaNumericCharacters) {
      passwordCharacters = passwordCharacters.concat(
        lowerAlphaNumericCharacters
      );
      returnPassword.push(randomizePassword(lowerAlphaNumericCharacters));
    }

    if (passwordPrompts.useUpperAlphaNumericCharacters) {
      passwordCharacters = passwordCharacters.concat(
        upperAlphaNumericCharacers
      );
      returnPassword.push(randomizePassword(upperAlphaNumericCharacers));
    }

    if (passwordPrompts.useNumericCharacters) {
      passwordCharacters = passwordCharacters.concat(numericCharacters);
      returnPassword.push(randomizePassword(numericCharacters));
    }

    if (passwordPrompts.useSpecialCharacters) {
      passwordCharacters = passwordCharacters.concat(specialCharacters);
      returnPassword.push(randomizePassword(specialCharacters));
    }

    for (let i = 0; i < passwordPrompts.passwordLength; i++) {
      let randomCharacters = randomizePassword(passwordCharacters);
      userPassword.push(randomCharacters);
    }

    for (let j = 0; j < returnPassword.length; j++) {
      userPassword[j] = returnPassword[j];
    }

    return userPassword.join("");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Eventlistener to generate password
generateBtn.addEventListener("click", writePassword);
