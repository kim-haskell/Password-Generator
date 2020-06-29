   // Assignment Code
   var generateBtn = document.querySelector("#generate");

    // Write password to the #password input
    
    //Add event listener to generate button
   generateBtn.addEventListener("click", writePassword);

   
   var passwordCriteria = confirm("Do you want to set the password criteria?");
   

   var passwordLength = prompt("Please enter the desired length of password, between 8 and 128 characters.");
   
   
   var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
   var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   var numbers = "1234567890".split("");
   var specialChar = "~`!@#$%^&*()_-+=?,./:;<>[]{}|".split("");
   


   var confirmLowercase = confirm("Do you want to include lowercase characters?");
   var confirmUppercase = confirm("Do you want to include uppercase characters?");
   var confirmNumbers = confirm("Do you want to include numbers?");
   var confirmSpecialchar = confirm("Do you want to include special characters?");


   var userChars = ["lowercase", "uppercase", "numbers", "specialChar"];



   if (confirmLowercase) {
       userChars = [ ...userChars, ...lowercase ];
   }

   if (confirmUppercase) {
       userChars = [...userChars, ...uppercase ];
   }

   if (confirmNumbers){
        userChars = [...userChars, ...numbers ];
   }

   if (confirmSpecialchar) {
        userChars = [...userChars, ...specialChar]
   }
   function writePassword() {
    for (var i = 0; i >= 8; i ++) {
        var generatePassword = userChars[Math.floor(Math.random) * userChars.length];
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
}