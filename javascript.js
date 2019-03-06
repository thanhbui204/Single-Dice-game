var pictures = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

function displayImages() {

  var playerName1 = prompt("Please enter your name (Player1):");
  var playerName2 = prompt("Please enter your name (Player2):");

  document.querySelector(".player1").innerHTML = playerName1;
  document.querySelector(".player2").innerHTML = playerName2;

  var randomNumber = Math.floor((6 * Math.random()) + 1);
  var randomNumber1 = Math.floor((6 * Math.random()) + 1);

  document.querySelector("img.img1").src = "images/" + pictures[randomNumber - 1];
  document.querySelector("img.img2").src = "images/" + pictures[randomNumber1 - 1];

  if (randomNumber > randomNumber1) {
    document.querySelector(".container h1").innerHTML = playerName1+ " won!";
  } else if (randomNumber < randomNumber1) {
    document.querySelector(".container h1").innerHTML = playerName2 + " won!";
  } else {
    document.querySelector(".container h1").innerHTML = "Draw";
  }
}
