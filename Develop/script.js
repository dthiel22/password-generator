// we will want a function on click that makes pop up (possibly confirm?)
// answer pop up, records answer
// new pop up comes up, records again
//           recording can be same function?
// all questions done, all recorded data is inputted in random generator
// password is made

// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// characters: 8 - 128
// lowercase
// uppercase
// numeric
// and/or special characters

function writePassword() {
  let passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength != null) {
    console.log(passwordLength)
  }
  
  let passwordLowercase = "Would you like your password to contain lowercase letters?";
  if (confirm(passwordLowercase) == true) {
    passwordLowercase = true;
  } else {
    passwordLowercase = false;
  }
  console.log(passwordLowercase)
}