#  Password Generator Plan

* First create arrays of  small and capital letters, numbers as characters, and special characters. 
* The password string characters will be selected randomly from the above arrays.
* The password character length will be between 8 and 128 characters log.
* 

#  Password Generation Steps:
* The arrays of small, capital, numbers and speccial charachetes are generated. 
* The code for password length generation options is added and checked.
* The code for password options( small & capital letters, numbers and specials characters) is added and checked.
* The password length and user options are stored in "passwordOption object".
* Random number selction function is setup to be applied on arrays.
* 'getPasswordOptions() function is called under 'generatePassword" function to test all the options first"
*  then steps to generatePassord function are built in the function.
* The user selected options arrays are pushed into possible and guranted arrays.
* From theses arrays, the passord characters are randomly selected by implementing random selection criteria. 
* passord is generated based on the user selected length of passord using  'for' loops. 
* The randomly selected guaranteed charachters are also included in the password length.
* Generated passord is written in textarea using querySelect and addEventlistners methods.
