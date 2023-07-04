var player1 = prompt("Ener the name of player one : ");
var player2 = prompt("Ener the name of player two : ");
var p1 = document.querySelectorAll("p")[0];
p1.innerHTML = player1;
var p2 = document.querySelectorAll("p")[1];
p2.innerHTML = player2;

//for palyer 1

var randomNumber1 = Math.ceil(Math.random() * 6 );
var randomDiceImage = "dice" + randomNumber1 +".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);

//for player 2

var randomNumber2 = Math.ceil(Math.random() * 6 );
var randomDiceImage = "dice" + randomNumber2 +".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src" , randomImageSource);

//result

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = player1
    +" wins";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML =player2 +" Wins ";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}