var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randImage1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randImage2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
   
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "This match is DRAW";
   
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
    
}