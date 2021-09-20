// Challenge 1: Age in daysfunction ageInDays() {  var birthYear = prompt("What year were you born in? ");  var year = prompt("What year is it? ");  let ageDays = (year - birthYear) * 365;  console.log(ageDays);  var h1 = document.createElement("h1"); //creating empty header element on DOM  var ageMsg = document.createTextNode("You are " + ageDays + " days old."); //creating textNode on DOM and assigning it content  h1.setAttribute("id", "ageInDaysMsg"); //setting the h1 element's id to 'ageInDaysMsg'  h1.appendChild(ageMsg); //loading the ageMSg textNode into the h1 DOM element  document.getElementById("flex-box-result").appendChild(h1); //loading out locally created h1 element onto the existing DOM element tagged 'flex-box-result'}function reset() {  document.getElementById("ageInDaysMsg").remove();}

var challenge1Loaded =false;
var theChallenge;
var loadingSet = false;

let myPage = {
  Proj1: {div: "#Challenge_1", id : "#ageCalc"},
  Proj2: {div: "#Challenge_2", id: "#cats"},
  Proj3: {div: "#Challenge_3", id: "#rps"},
  Proj4: {div: "#Challenge_4", id: "#btnColor"},
  Proj5: {div: "#Challenge_5", id: "#blkJack"},
  MainDiv:{div: "Projects-Div", id: "#home"},
  

}


document.querySelector("#AgeInDaysButton").addEventListener("click", ageInDaysClicked);
document.querySelector("#CatGenButton").addEventListener("click", CatGenButtonClicked);
document.querySelector("#RPSButton").addEventListener("click", RPSButtonClicked);
document.querySelector("#CatGenButton").addEventListener("click", CatGenButtonClicked);
document.querySelector("#ColorButton").addEventListener("click", ColorButtonClicked);

document.querySelector("#BlkJackButton").addEventListener("click", BlkJackButtonClicked);

function ColorButtonClicked(){

  document.querySelector(myPage["Proj4"]["id"]).style.display= "block";

  if(loadingSet === false){
    inProgress();
  }

  document.querySelector(myPage["Proj5"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj1"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj2"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj3"]["id"]).style.display= "none";
}

function RPSButtonClicked(){
 

  document.querySelector(myPage["Proj3"]["id"]).style.display= "block";

  document.querySelector(myPage["Proj5"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj1"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj2"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj4"]["id"]).style.display= "none";



}

function BlkJackButtonClicked(){
   

  document.querySelector(myPage["Proj5"]["id"]).style.display= "block";

  document.querySelector(myPage["Proj4"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj3"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj2"]["id"]).style.display= "none";
   document.querySelector(myPage["Proj1"]["id"]).style.display= "none";

}

function ageInDaysClicked () {

  document.querySelector(myPage["Proj1"]["id"]).style.display= "block";

  document.querySelector(myPage["Proj3"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj4"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj5"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj2"]["id"]).style.display= "none";  
  

}

function CatGenButtonClicked(){
 
  document.querySelector(myPage["Proj2"]["id"]).style.display= "block";

  document.querySelector(myPage["Proj3"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj4"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj5"]["id"]).style.display= "none";
  document.querySelector(myPage["Proj1"]["id"]).style.display= "none";  
    


}

function inProgress(){
  var holderImg= document.createElement("img");
  holderImg.src = "https://www.pngkey.com/png/full/137-1379340_wip-work-in-progress-png.png";
  document.getElementById("HoldingBox").appendChild(holderImg);
  loadingSet = true;
  
}


// Challenge 1: Age in days

function ageInDays() {
  var birthYear = prompt("What year were you born in? ");
  var year = prompt("What year is it? ");
  let ageDays = (year - birthYear) * 365;
  console.log(ageDays);

  var h1 = document.createElement("h1"); //creating empty header element on DOM
  var ageMsg = document.createTextNode("You are " + ageDays + " days old."); //creating textNode on DOM and assigning it content
  h1.setAttribute("id", "ageInDaysMsg"); //setting the h1 element's id to 'ageInDaysMsg'
  h1.appendChild(ageMsg); //loading the ageMSg textNode into the h1 DOM element
  document.getElementById("flex-box-result").appendChild(h1); //loading out locally created h1 element onto the existing DOM element tagged 'flex-box-result'
}

function reset() {
  document.getElementById("ageInDaysMsg").remove();
}








function newCat() {
  var aCat = document.createElement("img");
  var aDiv = document.getElementById("cat-holder");
  //aCat.src= "https://cataas.com/cat/says/hello%20world!"
  aCat.src =
    "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  aDiv.appendChild(aCat);
  //    // aCat.appendChild('cat-image');
  //     document.getElementById('flex-box-container-2').appendChild(aCat);
}

//challenge 3 Rock, Paper, Scissors
function rpsGame(urChoice) {
  var userChoice, compChoice;

  userChoice = urChoice.id;
  compChoice = botChoice(randIntRPS());

  console.log(userChoice, compChoice);

  var results = rpsWinner(userChoice, compChoice);
  console.log(results);

  var message = rpsMessage(results);
  console.log(message);

  rpsFrontEnd(userChoice, compChoice, message);
}

function randIntRPS() {
  return Math.floor(Math.random() * 3);
}

function botChoice(randNum) {
  return ["rock", "paper", "scissors"][randNum];
}

function rpsWinner(urChoice, botChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  var yourScore = rpsDatabase[urChoice][botChoice];
  //code will go to 'urChoice' key and then to 'botChoice' value
  var botScore = rpsDatabase[botChoice][urChoice];
  //code will go to 'botChoice' key and 'urChoice' value
  //ie: 'paper' bot choice, then to 'scissors' urChoice = botScore 0

  return [yourScore, botScore];
}

function rpsMessage([urScore, computerScore]) {
  if (urScore == 0) {
    return { message: "you Lost!", color: "red" };
  } else if (urScore == 0.5) {
    return { message: "You tied!", color: "yellow" };
  } else {
    return { message: "You Win!", color: "green" };
  }
}

function rpsFrontEnd(humanImage, botImage, finalMessage) {
  var imgDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var msgDiv = document.createElement("div");
  console.log(imgDatabase[humanImage]);

  humanDiv.innerHTML =
    "<img src='" +
    imgDatabase[humanImage] +
    "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
  msgDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size: 60px; padding: 30px '>" +
    finalMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" +
    imgDatabase[botImage] +
    "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(msgDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

function again() {
  console.log("hi");
  "#flex-box-rps-div".load(document.URL + "#flex-box-rps-div");

  //  document.getElementById('flex-box-rps-div').removeChild()
}

//challenge 4: changing button colors
var all_buttons = [];
all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);
var copyAllButtons = [];

console.log(all_buttons.length);

for (let i = 4; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i]);
}

console.log(all_buttons.length);
console.log(copyAllButtons);

function buttonColorChange(buttonChoice) {
  console.log(buttonChoice.value);
  if (buttonChoice.value == "red") {
    buttonsRed();
  } else if (buttonChoice.value == "green") {
    buttonsGreen();
  } else if (buttonChoice.value == "reset") {
    buttonsReset();
  } else if (buttonChoice.value == "random") {
    buttonsRandom();
  }
}

function buttonsRed() {
  for (let i = 4; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttonsGreen() {
  for (let i = 4; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonsReset() {
  for (let i = 4; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

//console.log(rpsWinner('rock', 'paper'));

//Project 5 Blackjack

let blackJackGame = {
  you: { scoreSpan: "#your-blackjack-result", div: "#your-box", score: 0 },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
  cardScoreMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 10,
    Q: 10,
    J: 10,
    A: [1, 11],
  },

  tally: { wins: "#Wins", loss: "#Losses", draws: "#Draws" },

  isStand: false,
  turnsOver: false,
  //dictionary of 'your box' and 'dealer box' from main.
  //We can now instantiate variables and set the attributes directly equal to the html components  for easy access
};
const YOU = blackJackGame["you"]; // 'you' object from blackjack dictionary for easy access
const DEALER = blackJackGame["dealer"]; //making objects of each item in blackJack dictionary
const hitSound = new Audio("blackjack/sounds/swish.m4a");
const LOSE_SOUND = new Audio("blackjack/sounds/aww.mp3");
const WIN_SOUND = new Audio("blackjack/sounds/cash.mp3");
var wins = 0,
  losses = 0,
  draws = 0;

document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackJackHit);
document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", blackJackStand);
document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackJackDeal);

//adding event listener to the 'deal' button

function blackJackHit() {
  if (blackJackGame["isStand"] === false) {
    //will only execute a 'hit' if user has not clicked stand
    showCard(YOU); //sending which player hit as argument to showCard
  }

  //showCard(DEALER); //sending which player hit as argument to showCard
}

function showCard(player) {
  //receiving argument of which player to display cards for

  if (player["score"] <= 21) {
    var playCard = cardFromDeck(); // function will return a random card index
    let cardImage = document.createElement("img");
    cardImage.src = `blackjack/images/${playCard}.png`; //alternate way to embed variable arguments into a string
    hitSound.play();
    document.querySelector(player["div"]).appendChild(cardImage); //appending card to argument player's div, as defined in dictionary

    updateScore(playCard, player); //updates the score of player sent to showCard argument
    showScore(player);
    console.log(player["score"]);
  } else {
    alert("BUST card");
  }
}

function cardFromDeck() {
  cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Q", "K", "J", "A"]; //array of all card possibilities
  var playCard = cards[Math.floor(Math.random() * 13)]; // generate rand card num between 0-12
  // console.log("num:" + playCard);

  return playCard; //return the random card index to call
}
// rpsWinner(userChoice, botChoice){
///
// }

function blackJackDeal() {
  //  computeWinner();
  console.log("In: " + blackJackGame['turnsOver']);

  if (blackJackGame['turnsOver'] === true) {
    blackJackGame['isStand'] = false;

    let playedCards = document
      .querySelector(YOU["div"])
      .querySelectorAll("img");
    let dealerCards = document
      .querySelector(DEALER["div"])
      .querySelectorAll("img");

    // playedCards is an array of card images currently occupying YOU's div, 'your-box'

    for (var i = 0; i < playedCards.length; i++) {
      playedCards[i].remove();
    }

    for (var i = 0; i < dealerCards.length; i++) {
      dealerCards[i].remove();
    }
    //looping through the array and deleting the cards in 'your box' of YOU object

    // Clearing out the player scores and the player font settings back to 0 and white
    document.querySelector(YOU["scoreSpan"]).textContent = 0; //setting html document text = 0 through teh dictionary
    document.querySelector(DEALER["scoreSpan"]).textContent = 0; //setting html document text = 0 thru the dictionary
    document.querySelector("#your-blackjack-result").style.color = "white"; //resetting html text color  MANUALLY
    document.querySelector("#dealer-blackjack-result").style.color = "white"; //resetting html text color MANUALLY
    YOU["score"] = 0; // setting the local dictionary score = 0
    DEALER["score"] = 0; // setting the local dictionary score = 0

    document.querySelector("#blackjack-result").textContent = "Let's play! ";
    document.querySelector("#blackjack-result").style.color = "blue ";

    blackJackGame['turnsOver'] = false;

    hitSound.play();
  }

}

function updateScore(card, activePlayer) {
  //when ace is played, if score + 11 <=21, add 11, else add only 1

  if (card == "A") {
    if (activePlayer["score"] + blackJackGame["cardScoreMap"][card][1] <= 21) {
      activePlayer["score"] += blackJackGame["cardScoreMap"][card][1];
    } else {
      activePlayer["score"] += blackJackGame["cardScoreMap"][card][0];
    }
  } else {
    //if not Ace played
    activePlayer["score"] += blackJackGame["cardScoreMap"][card];
    // score += cardMap[card : score]
    //will update the score element of the player's dictionary using:
    // card dictionary
    // player's 'score' dictionary
  }
}

function showScore(activePlayer) {
  if (activePlayer["score"] <= 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
    // setting score span map equal to score map
    // scoreSpan.text = score
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function dealerBot() {

  let card = cardFromDeck();
  showCard(DEALER);

  if (DEALER['score'] > 15) {
    blackJackGame['turnsOver'] = true; // will set last_turn to 'true'  and  make it the computer's last turn
    let winner = computeWinner();
    
  }
}

async function blackJackStand() {
    //asynchronous functions don't run on computer's time
    // it doesn't wait for code linearly, rather depends on user created 'await' dependencies
    blackJackGame['isStand'] = true; //setting this to 'true' will prevent hit button function, until deal re-sets to 'false'

  while(DEALER['score'] < 16) {
    dealerBot();
    await sleep(700);
    //console.log(blackJackGame['turnsOver']);
  }

  
}

function computeWinner() {
  let winner; // variable to hold the winner

  if (YOU["score"] <= 21) {
    // if ur score is valid

    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      console.log("You win!");
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      console.log("You Lost...");
      winner = DEALER;
    } else if (YOU["score"] == DEALER["score"]) {
      console.log("It's a draw!");
    }
  }

  //if you bust but not the bot:
  if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    console.log("You lost!");
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    console.log("It's a draw!");
  }

  showWinner(winner);
  tallyScores(winner);

  return winner;
}

function showWinner(winner) {
  let message, msgColor;
  if (blackJackGame["turnsOver"] === true) {
    if (winner == YOU) {
      message = ":^)    You Win !!  :^) ";
      msgColor = "green";
      WIN_SOUND.play();
    } else if (winner == DEALER) {
      message = " :^(    You Lose...   :^(";
      msgColor = "red";
      LOSE_SOUND.play();
    } else {
      message = " :^/    It's a tie!!   :^/";
      msgColor = "orange";
      LOSE_SOUND.play();
    }

    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = msgColor;
  }
}

function tallyScores(winner) {
  if (winner == YOU) {
    wins += 1;
    document.querySelector(blackJackGame["tally"]["wins"]).textContent = wins;
  } else if (winner == DEALER) {
    losses += 1;
    document.querySelector(blackJackGame["tally"]["loss"]).textContent = losses;
  } else {
    draws += 1;
    document.querySelector(blackJackGame["tally"]["draws"]).textContent = draws;
  }
}


