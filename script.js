// Assignment Code
var generateBtn = document.querySelector("#generate");
// var charU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var charL = "abcdefghijklmnopqrstuvwxyz"
// var num = "0123456789"
// var specialChar ="!@#$%^&*()+;<>?~{}|"


//   var uppers = confirm("Would you like to use lowercase letters?");
//   var lowers = confirm("Would you like to use Uppercase letters?");
//   var numbers = confirm("Would you like to use numbers?");
//   var symbols = confirm("Would you like to use special characters?");
//   }



// Write password to the #password input
function writePassword() {
  var chooseC = prompt("How many characters would you like your password to be?");
    if (chooseC < 8 || chooseC > 128) {

      alert("Length must be between 8 and 128 characters");
      return;
  }

  // if (chooseC >= 8 || chooseC <= 128) {
    var lowers = confirm("Would you like to use lowercase letters?");
    var uppers = confirm("Would you like to use Uppercase letters?");
    var numbers = confirm("Would you like to use numbers?");
    var symbols = confirm("Would you like to use special characters?");
      if (uppers != true && lowers != true && numbers != true && symbols != true) {

        alert("Please select at least on of the following character types");
  }
  var uInput = {
    chooseC: chooseC,
    lowers: lowers,
    numbers: numbers,
    symbols: symbols,
  }
  return uInput;
}




// passwordText.value = password;
// return pwd;

// passwordText + writePassword THis is a abstract version of will combine after the pasword is generated 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
