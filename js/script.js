// Assignment Code

var smallLetters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','u','r','s','t','x','y','z'];

var CapLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','U','R','S','T','X','Y','Z'];
var  numbersChar = ['1','2','3','4','5','6','7','8','9','0'];

var specialChar = ['!','@','#','$','%','^','&','*','(',')','+']

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
