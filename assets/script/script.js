
const minLength = 8;
const maxLength = 128;
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars ="0123456789";
const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);

function writePassword() {

  
  var password = generatePassword();
  if(password == null) return;

  
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;
}


function generatePassword(){

  
  var passwordLength = getPasswordLength();
  if(passwordLength == null) return null;

  
  var charTypes = getSelectedCharacterTypes();
  if(charTypes == null) return null;

  
  var charSet = getCharacterSet(charTypes);
  if(charSet.length == 0) return null;

  
  var password = [];

  
  for(var i = 0; i< passwordLength; i++){
    password.push(charSet[Math.floor(Math.random() * charSet.length)]);
  }
  
  
  return password.join("");
}


function getCharacterSet(charTypes){
  var charSet = [];

  
  if(charTypes.includeLowercase){
    charSet = charSet.concat(lowercaseChars.split(""));
  }

  
  if(charTypes.includeUppercase){
    charSet = charSet.concat(lowercaseChars.toUpperCase().split(""));
  }

  
  if(charTypes.includeNumbers){
    charSet = charSet.concat(numberChars.split(""));
  }

  
  if(charTypes.includeSpecialChars){
    charSet = charSet.concat(specialChars.split(""));
  }

  return charSet;
}


function getSelectedCharacterTypes(){
  
  
  var charTypes = {
    includeLowercase : false,
    includeUppercase : false,
    includeNumbers : false,
    includeSpecialChars : false,
  };

  
  charTypes.includeLowercase = window.confirm("Would you like to include lower case characters?");
  charTypes.includeUppercase = window.confirm("Would you like to include upper case characters?");
  charTypes.includeNumbers = window.confirm("Would you like to include numeric characters?");
  charTypes.includeSpecialChars = window.confirm("Would you like to include special characters?");  

  
  if(!charTypes.includeLowercase && !charTypes.includeUppercase && !charTypes.includeNumbers && !charTypes.includeSpecialChars){
    window.alert("No character type selected. \nAt least one character type must be selected from lowercase, uppercase, numeric and special characters.\nPlease try again.");
    return null;
  }

  return charTypes;
}


function getPasswordLength(){

 
  var passwordLength = window.prompt("Please enter the length of the password.\nPassword length must be between " + minLength + " and " + maxLength + " characters.");

  
  if(isNaN(passwordLength) || passwordLength < minLength || passwordLength > maxLength){
    window.alert("Invalid input.\nPassword length must be between "+ minLength + " and " + maxLength + " characters.\nPlease try again.");
    return null;
  }

  return passwordLength;
}


