// Assignment Code
// Required arrays are created:
var smallLetters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','u','r','s','t','x','y','z'];

var capLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','U','R','S','T','X','Y','Z'];
var  numbersChar = ['1','2','3','4','5','6','7','8','9','0'];

var specialChar = ['!','@','#','$','%','^','&','*','(',')','+']

//  Generate password button is clicked 
// make getPasswordOption  function and add evenentListener to clcik  
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function() {
  getPasswordOptions()
}
);
// password requiremnets function is called when generateBTN is pressed
// propomts are introduced in the function
function getPasswordOptions() {
  // Variable to store length of password from user input an integer
  
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

// The following function ' IsNAN'  checks whether user entered a number or characters
// only prompts if entered llength is not a number
if (isNaN(length) === true) {
  alert('Password length must be provided as a number');
  return;
}
// Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
if (length < 8) {
  alert('Password length must be at least 8 characters');
  return;
}

// Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
if (length > 128) {
  alert('Password length must less than 129 characters');
  return;
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
