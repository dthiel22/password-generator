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
var usedChar = ""


//TODO: array of numbers, specials, uppercase, lowercase
var passwordArray = [passwordLength,passwordLowercase,passwordUppercase,passwordNumeric,passwordSpecial]


// Write password to the #password input
function writePassword() {
  //this launches the generatePassword function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

//TODO: prompt user for length

  result = "";
  passwordLength = "";
  usedChar = "";
  passwordLength=prompt("How many characters would you like your password to be?\n\nPassword can be 8-128 words.")
  parseInt(passwordLength)
  console.log("password length")
  console.log(passwordLength)

//TODO: check length

    if (passwordLength < 8 || passwordLength > 128) {
      alert("This number is invalid, please click on 'Generate Password' and read the directions again")
      return "";
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

//TODO: based on the responses trim/build available pool of characters


    if (passwordArray[1] === true){
      usedChar = usedChar.concat(lowercaseCharacters)
      console.log("add lowercase"); 
    }if (passwordArray[2] === true){
      usedChar = usedChar.concat(uppercaseCharacters)
      console.log("add uppercase");   
    }if (passwordArray[3] === true){
      usedChar = usedChar.concat(specialCharacters)
      console.log("add numbers");
    }if (passwordArray[4] === true){
      usedChar = usedChar.concat(specialCharacters)
      console.log("add symbols");
    }if (!passwordArray[1] && !passwordArray[2] && !passwordArray[3] && !passwordArray[4]){
      alert("Please select at least one option.")
      return ""
    }else {
      console.log("characters to be used: " + usedChar)
    }

//TODO: build the password character by character >>> select a random character from array of multiple characters

//TODO: generate random int within range of available char length

//TODO: addd char to result

//TODO: do until length = desired length

  while (result.length < passwordLength) {
    result += usedChar[Math.floor(Math.random() * usedChar.length)];
    } 
    console.log(result);
    console.log(result.length); 

  return result
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);