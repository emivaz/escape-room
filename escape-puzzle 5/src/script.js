span.onclick = function() { 
  modal.style.display = "none";
}

function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "PURGATORY") {
   alert("Congrats! You were correct! One of the numbers to open the safe is 0!")
     return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }
