//the button that opens the modal
var btn = document.getElementById("myBtn");

//the modal
var modal = document.getElementById("myModal");

//the image is inserted inside the modal
var btn = document.getElementById("myBtn");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
btn.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "https://marglavender.github.io/EscapeRoomNarrative/Map.jpg";
  captionText.innerHTML = this.alt;
}

//closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "LONG VIOLENT HISTORY") {
   alert("Congrats! You were correct! One of the numbers to open the safe is 2!")
     return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }