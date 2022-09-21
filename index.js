var randomnumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomnumber1 + ".png" ;
var randnomImageSource = "images/" + randomDiceImage;
var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src", randnomImageSource );

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randnomImageSource2 = "images/dice" + randomNumber2 + ".png" ;
document.querySelectorAll("img")[1].setAttribute("src", randnomImageSource2);

if (randomnumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML ="Player 1 Wins !" ;

} else if (randomNumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins !" ;
}
else {
    document.querySelector ("h1").innerHTML = "Draw !" ;
}