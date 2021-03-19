// Assignment Code
// Required arrays are created:
var smallLetters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'u', 'r', 's', 't', 'x', 'y', 'z'];

var capLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'U', 'R', 'S', 'T', 'X', 'Y', 'Z'];
var numbersChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', '+'];


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

  // Confirm() function is used to store and include in the password selection array
  // Variable to store boolean regarding the inclusion of special characters
  var smallLetters = confirm(
    'Click OK to confirm including small Letters.'
  );

  // Variable to store boolean regarding the inclusion of special characters
  var capLetters = confirm(
    'Click OK to confirm including capital letters.'
  );
  // Variable to store boolean regarding the inclusion of special characters
  var numbersChar = confirm(
    'Click OK to confirm to include numbers'
  );


  // Variable to store boolean regarding the inclusion of special characters
  var specialChar = confirm(
    'Click OK to confirm including special characters.'
  );

  // The following code checks whether users did not include any of the options:
  // returns back to password options
  if (
    smallLetters === false &&
    capLetters === false &&
    numbersChar === false &&
    specialChar === false

  ) {
    alert('user must select one of the option');
    return;
  }


  // Object to store user inpput
  var passwordOptions = {
    length: length,
    smallLetters: smallLetters,
    capLetters: capLetters,
    numbersChar: numbersChar,
    specialChar: specialChar
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}


// Function to generate password with user input
// This function concatenate all user options arrays
// and store password in 'result' array by randomly selecting 
// the indices of possible and guarnted characters arrays. 

function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.specialChar) {
    possibleCharacters = capLetters.concat(specialChar);
    guaranteedCharacters.push(getRandom(specialChar));
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.numbersChar) {
    possibleCharacters = possibleCharacters.concat(numbersChar);
    guaranteedCharacters.push(getRandom(numbersChar));
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.smallLetters) {
    possibleCharacters = possibleCharacters.concat(smallLetters);
    guaranteedCharacters.push(getRandom(smallLetters));
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.capLetters) {
    possibleCharacters = possibleCharacters.concat(capLetters);
    guaranteedCharacters.push(getRandom(capLetters));
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


