//======================================this is what Henry wrote=============
// Assignment Code
var generateBtn = document.querySelector("#generate");

//our global variables
var result =""
var passwordLength = ""
var passwordLowercase = ""
var passwordUppercase = ""
var passwordNumeric = ""
var passwordSpecial = ""
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericCharacters = "1234567890"
var specialCharacters = "!@#$%^&*_-+="


//TODO: array of numbers, specials, uppercase, lowercase
var passwordArray = [passwordLength,passwordLowercase,passwordUppercase,passwordNumeric,passwordSpecial]
var usedMaterial = [lowercaseCharacters, uppercaseCharacters, numericCharacters, specialCharacters]


// Write password to the #password input
function writePassword() {
  //this launches the generatePassword function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
//TODO: prompt user for length
    passwordLength=prompt("How many characters would you like your password to be?\n\nPassword can be 8-128 words.")
    parseInt(passwordLength)
    console.log("password length")
    console.log(passwordLength)

//TODO: check length
    if (passwordLength < 8 || passwordLength > 128) {
      alert("This number is invalid, please read the directions again")
      generatePassword()
    }else{

//TODO: promtpt/confirm for types of characters
    passwordLowercase=confirm("Would you like your password to contain lowercase letters?\n\nClick 'OK' for yes and 'Cancel' for no.")
    console.log("password lowercase") 
    console.log(passwordLowercase)

    passwordUppercase=confirm("Would you like your password to contain uppercase letters?\n\nClick 'OK' for yes and 'Cancel' for no.")
    console.log("password uppercase") 
    console.log(passwordUppercase)

    passwordNumeric=confirm("Would you like your password to contain numeric values?\n\nClick 'OK' for yes and 'Cancel' for no.")
    console.log("password numeric") 
    console.log(passwordNumeric)
    
    passwordSpecial=confirm("Would you like your password to contain speical character?\n\nClick 'OK' for yes and 'Cancel' for no.")
    console.log("password special") 
    console.log(passwordSpecial)
    }

    //TODO: store responses
    var passwordArray = [passwordLength,passwordLowercase,passwordUppercase,passwordNumeric,passwordSpecial]
    console.log(passwordArray)
    return passwordArray
    
}
//TODO: based on the responses trim/build available pool of characters
// var passwordArray = [passwordLength,passwordLowercase,passwordUppercase,passwordNumeric,passwordSpecial]
// var usedMaterial = [lowercaseCharacters, uppercaseCharacters, numericCharacters, specialCharacters]

    if (passwordArray[1] == true){
      console.log("it is true!")
    }
  
//TODO: build the password character by character >>> select a random character from array of multiple characters

//TODO: generate random int within range of available char length

    // Math.floor(Math.random() * passwordLength.length)

//TODO: addd char to result

//TODO: do until length = desired length

// return result


// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//============================MY CODE==========================

// function writePassword() {
//   let passwordLength = prompt("How many characters would you like your password to contain?");
//   if (passwordLength != null) {
//     console.log(passwordLength)
//   }
  
//   let passwordLowercase = "Would you like your password to contain lowercase letters?\n\nClick 'OK' for yes and 'Cancel' for no.";
//   if (confirm(passwordLowercase) == true) {
//     passwordLowercase = true;
//   } else {
//     passwordLowercase = false;
//   }
//   console.log(passwordLowercase)

//   let passwordUppercase = "Would you like your password to contain lowercase letters?\n\nClick 'OK' for yes and 'Cancel' for no.";
//   if (confirm(passwordUppercase) == true) {
//     passwordUppercase = true;
//   } else {
//     passwordUppercase = false;
//   }
//   console.log(passwordUppercase)
// }
