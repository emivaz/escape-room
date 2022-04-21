// Design from: https://pngtree.com/freepng/awesome-typography-t-shirt-design_5332714.html

var dictionary = [
    "BOTTLES AND BIBLES",
 
];
var myWord;
function startGame() {
  myWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  var scrambled = myWord
    .split("")
    .sort(function() {
      return Math.random() - 0.5;
    })
    .join("");

  while (scrambled == myWord) {
    scrambled = myWord
      .split("")
      .sort(function() {
        return Math.random() - 0.5;
      })
      .join("");
  }

  var html = "";
  for (var i = 0; i < scrambled.length; i++) {
    html += '<li class="tile">' + scrambled[i] + "</li>";
  }
  $(".word").html(html);
}

$(function() {
  startGame();

  $(".word").sortable({
    update: function(e, ui) {
      console.log(myWord, $(".tile").text());
      if (myWord === $(".tile").text()) {
        var playAgain = confirm("You win! The correct phrase was the name of one of the albums. One of the numbers is 7 to open the safe!");
        if (playAgain) {
          startGame();
        }
      }
    }
  });
});
