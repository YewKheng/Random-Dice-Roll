const randomNumber1 = Math.floor(Math.random() * 6) + 1; //Random roll 1-6 for player 1
const randomNumber2 = Math.floor(Math.random() * 6) + 1; //Random roll 1-6 for player 2
const randomDicePng1 = "dice" + randomNumber1 + ".png"; //String + random 1-6 + string to get dice1.png - dice6.png for player 1
const randomDicePng2 = "dice" + randomNumber2 + ".png"; //String + random 1-6 + string to get dice1.png - dice6.png for player 2
const randomImageSource1 = "images/" + randomDicePng1; //Set path to be = images/dice1.png - images/dice6.png for player 1
const randomImageSource2 = "images/" + randomDicePng2; //Set path to be = images/dice1.png - images/dice6.png for player 2

const image1 = document.querySelectorAll("img")[0]; //Set dice image for player 1 to be in [0]
const image2 = document.querySelectorAll("img")[1]; //Set dice image for player 2 to be in [1]
image1.setAttribute("src", randomImageSource1); //Set src of image for player 1
image2.setAttribute("src", randomImageSource2); //Set src of image for player 2

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins !!!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins !!!";
} else {
    document.querySelector("h1").innerHTML ="Draw!!!";
}

