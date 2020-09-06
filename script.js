// Assignment Code
var enter;
var options;
var charU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numC = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialChar = ["!", "#", "$", "%", "&", "'", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// function randomNumber(array) {
//     return Math.floor(Math.random() * array.length);
// }

// function randomChoice(array) {
//     return array[randomNumber(array)];
// }

// function mix(password) {
//     var toss = password.split("");
//     toss.sort(function() {
//         return 0.5 - Math.random();
//     });
//     var returnP = mix.join("");
//     return returnP;
// }
// Write password to the #password input


function createPassword() {
    var length = prompt("How many characters would you like your password to be?");
    if (length < 8 || length > 128) {

        alert("Length must be between 8 and 128 characters");
        return;
    }
};

// createPassword ();
    var lowers = confirm("Would you like to use lowercase letters?");
    var uppers = confirm("Would you like to use Uppercase letters?");
    var numbers = confirm("Would you like to use numbers?");
    var symbols = confirm("Would you like to use special characters?");

if (uppers != true && lowers != true && numbers != true && symbols != true) {

    alert("Please select at least on of the following character types");
}
var userInput = {
    length: length,
    lowers: lowers,
    uppers: uppers,
    numbers: numbers,
    symbols: symbols,
}
return userInput;
          
// function randomNumber(arr) {
//     var randomIndex = Math.floor(Math.random() * arr.length);
//     var randomElement = arr[randomIndex]
//     return randomElement;
// }
// randomNumber(charL);


// createPassword()

// function generatePassword() {
//     var pass = '';
//     var strng = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$" + "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
//     //   created a for loop to ensure when button is clicked, it generates a new password.
//     for (i = 1; i <= 20; i++) {
//         var char = Math.floor(Math.random() * strng.length + 1);

//         pass += strng.charAt(char)
//     }

//     return pass + "";
// };
// var generateBtn = document.querySelector("#generate");

// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

// generateBtn.addEventListener("click");

//     }
//     else if (lowers && uppers && numbers && symbols) {
//         options = charL.concat(charU, numC, specialChar);

//         // password += randomChoice(charL);
//         // confirmA.push(charL)
//         // firstChar ++;
//     }

//     // 3
//     else if (lowers && uppers && numbers) {
//         options = charL.concat(charU, numC);

//         // password += randomChoice(charU);
//         // confirmA.push(charU)
//         // firstChar ++;
//     }
//     else if (lowers && uppers && symbols) {
//         options = charL.concat(charU, specialChar);

//         // password += randomChoice(numC);
//         // confirmA.push(numC)
//         // firstChar ++;
//     }
//     else if (lowers && numbers && symbols) {
//         options = charL.concat(numC, specialChar);

//         // password += randomChoice(specialChar);
//         // confirmA.push(specialChar)
//         // firstChar ++;
//     }
//     else if (uppers && numbers && symbols) {
//         options = charU.concat(numC, specialChar)

//     }

//     // 2
//     else if (uppers && lowers) {
//         options = charU.concat(charL);
//     }
//     else if (uppers && numbers) {
//         options = charU.concat(numC);
//     }
//     else if (uppers && symbols) {
//         options = charU.concat(specialChar);
//     }
//     else if (symbols && numbers) {
//         options = specialChar.concat(numC);
//     }
//     else if (lowers && symbols) {
//         options = charL.concat(specialChar);
//     }
//     else if (lowers && numbers) {
//         options = charL.concat(numC);
//     }

//     // 1 
//     else if (symbols) {
//         options = specialChar;
//     }
//     else if (numbers) {
//         options = numC;
//     }
//     else if (lowers) {
//         options = charL;
//     }
//     else if (uppers) {
//         options = charU;
//     }


//     var password = [];

//     for (var i = 0; i < enter; i++) {
//         var theOptions = options[Math.floor(Math.random() * options.length)];
//         password.push(theOptions);
//     }
//     var ps = password.join("");
//     UserInput(ps);
//     return ps;
// }
// function UserInput(ps) {
//     document.getElementById("#password").textContent = ps;

// }

// var generateBtn = document.querySelector("#generate");

// function writePassword() {
//     var password = createPassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;
// }






