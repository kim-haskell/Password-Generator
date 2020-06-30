   
   var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
   var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   var numbers = "1234567890".split("");
   var specialChar = "~`!@#$%^&*()_-+=?,./:;<>[]{}|".split("");
   

   function getPasswordOptions(){
       var length = prompt ("How long would you like your password to be?");
       if (length <8 || length >128){
           alert("Password must be between 8 and 128 characters");
           return;
       }

       var confirmLowercase = confirm("Click okay to include lowercase characters");
       var confirmUppercase = confirm("Click okay to include uppercase characters");
       var confirmNumbers = confirm("Click okay to include numbers");
       var confirmSpecialchar = confirm("Click okay to include special characters");
        if (confirmLowercase === false && confirmUppercase === false && confirmNumbers === false && confirmSpecialchar === false){
            alert("Must select at least one character type");
            return;
        }
        var passwordOptions = {
            length: length,
            confirmLowercase: confirmLowercase,
            confirmUppercase: confirmUppercase,
            confirmNumbers: confirmNumbers,
            confirmSpecialchar: confirmSpecialchar
        }
        return passwordOptions
   }

   function getRandom(arr) {
       var randomIndex = Math.floor(Math.random() * arr.length);
       var randomEl = arr[randomIndex];
       return randomEl;
   }

   function generatePassword() {
       var options = getPasswordOptions();
       var result = [];
       var possibleChars = [];
       var guaranteedChars = [];
        if (options.confirmLowercase){
            possibleChars = possibleChars.concat(lowercase);
            guaranteedChars.push(getRandom(lowercase));
        }
        if (options.confirmUppercase){
            possibleChars = possibleChars.concat(uppercase);
            guaranteedChars.push(getRandom(uppercase));
        }
        if (options.confirmNumbers){
            possibleChars = possibleChars.concat(numbers);
            guaranteedChars.push(getRandom(numbers));
        }
        if (options.confirmSpecialchar){
            possibleChars = possibleChars.concat(specialChar);
            guaranteedChars.push(getRandom(specialChar));
        }
        for (var i = 0; i < options.length; i ++) {
            var character = getRandom(possibleChars);
            result.push(character);
        }

        for (var i = 0; i < guaranteedChars.length; i ++){
            result[i] = guaranteedChars[i];
        }

        return result.join("");

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
