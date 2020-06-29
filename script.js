   // Assignment Code
   var generateBtn = document.querySelector("#generate");

   // Write password to the #password input
   function writePassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");
   
     passwordText.value = password;
   
   }
   
   // Add event listener to generate button
   generateBtn.addEventListener("click", writePassword);

   
   var passwordCriteria = confirm("Do you want to set the password criteria?");
   
   if (passwordCriteria) {
       alert(passwordLength);
   }
   else {
       alert("Cancel request");
   }
   
   var passwordLength = prompt("Please enter the desired length of password, between 8 and 128 characters.");

   
   var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
   var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   var numbers = "1234567890".split("");
   var specialChar = "~`!@#$%^&*()_-+=?,./:;<>[]{}|".split("");
   


   var confirmLowercase = confirm("Do you want to include lowercase characters?");
   

   var userChars = [];



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
   

   for (var i = 0; i < lowercase.length; i ++) {
       console.log(lowercase[i]);
   }
    for (var i = 0; i < uppercase.length; i ++) {
        console.log(uppercase[i]);
    }

    