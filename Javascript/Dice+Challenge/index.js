//Random Number for Dice Roll
  var player1Number = Math.floor(Math.random() * 6) + 1;
  var player2Number = Math.floor(Math.random() * 6) + 1;

  //Changing Dice Image
  document.querySelector("img.img1").setAttribute("src", "./images/dice"+player1Number+".png");
  document.querySelector("img.img2").setAttribute("src", "./images/dice"+player2Number+".png");

//Select The Winner and Updates Webpage Style
function diceRoll(player1, player2) {

  if (player1 > player2) {
    document.querySelector("h1").style.color = "red";
    document.querySelector("h1").textContent = "Player 1 Win!";
    document.querySelector("#p1").style.fontSize = "3rem";
    document.querySelector("#p1").style.color = "red";
    document.querySelector("#p1").textContent = "Player 1"
    document.querySelector(".img1").style.transform = "scale(120%, 120%)";
  }

  else if (player2 > player1) {
    document.querySelector("h1").style.color = "blue";
    document.querySelector("h1").textContent = "Player 2 Win!";
    document.querySelector("#p2").style.fontSize = "3rem";
    document.querySelector("#p2").style.color = "blue";
    document.querySelector(".img2").style.transform = "scale(120%, 120%)";
  }

  else {
    document.querySelector("h1").textContent = "It's A Tie!";
  }

}


diceRoll(player1Number,player2Number);