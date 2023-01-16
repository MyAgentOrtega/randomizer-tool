var upperCaseCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCaseCharacters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numericCharacters=["0","1","2","3","4","5","6","7","8","9"]
var specialCharacters=["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","'",";",":",",","<",".",">","/","?","|"]

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordOptions= []
  var finalPassword=[]
  var length = prompt("How long do you want your password to be? Please, input between 8-128");
  console.log(length);
  if (isNaN(length) || length < 8 || length > 128) { 
    alert("Please format password correctly");
    return;
  }
  var upperCase = confirm(
    "Would you like UPPERCASE characters in your password?"
  );
  var lowerCase = confirm(
    "Would you like lowercase characters in your password?"
  );
  var numeric = confirm("Would you like numeric characters in your password?"
  );
  var special = confirm(
    "Would you like special characters in your password?"
  );
  if(upperCase===true){
    passwordOptions=passwordOptions.concat(upperCaseCharacters)
  }
  if(lowerCase===true){
    passwordOptions=passwordOptions.concat(lowerCaseCharacters)
  }
  if(numeric===true){
    passwordOptions=passwordOptions.concat(numericCharacters)
  }
  if(special===true){
    passwordOptions=passwordOptions.concat(specialCharacters)
  }
console.log(passwordOptions)
for (let index = 0; index < length; index++) {
  finalPassword.push(passwordOptions[Math.floor(Math.random()*passwordOptions.length)])
}
console.log(finalPassword)
return finalPassword.join("")

}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
