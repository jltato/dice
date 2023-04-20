
function dice(){
  let random = Math.floor(Math.random()*6) + 1;
  return random;

}

var player1 = dice();
var player2 = dice();

var dice1 = "images/dice" + player1 + ".png";
var dice2 = "images/dice" + player2 + ".png";

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

if (player1 > player2){
  document.querySelector("h1").textContent = "Player 1 Wins"
}
else if (player1< player2){
  document.querySelector("h1").textContent = "Player 2 Wins"
}
else{
  document.querySelector("h1").textContent = "Draw"
}
