// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  // arrays for password
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var numbers = '0123456789'.split('');
  var specialCharacters = ',./;"+_)(*&^%$#@!~`[{}|'.split();
  var newPassword = '';
  var characters = '';
  var newCharacters = 0;
// passwrod length
  var length = prompt('Password length?\n(8-128)');
  
//  password length needs to be between 8-128 characters
  if(length<8 || length>128){
    alert('Password Needs to be between8-128 characters');
  } 

  var confirmLowerCase = confirm('Needs to have a lower case letter');
  var confirmUpperCase = confirm('Needs to have an upper case letter');
  var confirmNumber = confirm('Needs to have a number');
  var confirmSymbol = confirm('Needs to have a symbol');

  while (newPassword.length < length){
    newCharacters = Math.floor(Math.random() * 4);
    
    if ( 
      (newCharacters === 0 && confirmLowerCase) ||  
      (newCharacters === 1 && confirmUpperCase) ||
      (newCharacters === 2 && confirmNumber) ||
      (newCharacters === 3 && confirmSymbol)
      ){
        switch (newCharacters){
          case 0:
            characters = lowerCase[Math.floor(Math.random() * lowerCase.length)];
            break;
          case 1: 
          characters = upperCase[Math.floor(Math.random() * upperCase.length)];
          break;
          case 2:
            characters = numbers[Math.floor(Math.random() * numbers.length)];
          break;
          case 3:
            characters = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
          break;  
        }
        newPassword += characters;
      }
  }
  return newPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);