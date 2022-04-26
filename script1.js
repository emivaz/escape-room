function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "COUNTRY SQUIRE") {
   alert("Congrats! You were correct! One of the numbers to open the safe is 4!")
     return true;
   }
   alert("That is incorrect, try again! Make sure to look at the ends of the paragraphs!");
   return false;
   }