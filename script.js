
//declare variables
var characterLength = 8;
var storeAr = [];
var charAr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var numberAr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerAr = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperAr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var promptsCorrect = promptInfo();
  var passwordText = document.querySelector("#password");

  if(promptsCorrect){
    var passwordNew = generatePassword();
    passwordText.value = passwordNew;
  }else {
    passwordText.value = "";
  }
 }

 // generate password based on prompts
function generatePassword() {
    var password = "";
     for(var i = 0; i < characterLength; i++) {
       var  randomIndex = Math.floor(Math.random() * storeAr.length);
       password = password + storeAr[randomIndex];
     }
     return password;
     
}

// collect data using prompts and returning messages to confirm choice
function promptInfo(){
     storeAr = [];
     characterLength = parseInt(prompt("How many characters do you want your password to be? (8 -128 characters"));

     if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
       alert("Character length needs to be a number, 8-128 digits. Try again");
       return false;
     }

     var confirmLower = false;
     var confirmUpper = false;
     var confirmNum = false;
     var confirmSpecial= false;

     while(
      confirmLower == false &&
      confirmUpper == false &&
      confirmNum == false &&
      confirmSpecial == false
      ) {
        window.alert("You must choose at least one item from the following list:")
        confirmLower = confirm("Do you want lowercase letters in your password?")
        confirmUpper = confirm("Do you want uppercase letters in your password?")
        confirmSpecial = confirm("Do you want special characters in your password?")
        confirmNum = confirm("Do you want numbers in your password?")
      }

     if (confirmLower) {
       storeAr = storeAr.concat(lowerAr)
       window.alert("Password will contain lowercase letters.")
     } else {
       window.alert("Password will not contain lowercase letters")
     }

     if (confirmUpper) {
      storeAr = storeAr.concat(upperAr)
      window.alert("Password will contain uppercase letters.")
     } else {
       window.alert("Password will not contain uppercase letters")
     }

     if (confirmSpecial) {
      storeAr = storeAr.concat(charAr)
      window.alert("Password will special characters.")
     } else {
       window.alert("Password will not contain characters")
     }

     if (confirmNum) {
      storeAr = storeAr.concat(numberAr)
      window.alert("Password will contain numbers.")
     } else {
       window.alert("Password will not contain numbers")
     }
     return true;
}




