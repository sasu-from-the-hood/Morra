"use strict";
const scoreElement = document.querySelector(".js-score");
const firstContainer = document.querySelector(".first-container");
const secondContainer = document.querySelector(".second-container");
const winner = document.querySelector(".js-winner");
const secondResult = document.querySelector(".js-second-result");
const playAgainElement = document.querySelector(".js-play-again");
const computerChoices = ["Desto", "Finger", "Cow", "Cowter", "Oly"];
let playerMove;
let computerMovee;

function computerMove() {
  const randomNumber = Math.trunc(Math.random() * 5);
  return computerChoices[randomNumber];
}
function playGame(move) {
  playerMove = move;
  const computerChoice = computerMove();
  computerMovee = computerChoice;
  const firstResult = document.querySelector(".js-first-result");
  if (move === computerChoice) {
    playAgainElement.textContent = "You both picked the same. Choose again.";
  } else {
    firstContainer.classList.add("hidden");
    secondContainer.classList.remove("hidden");
    firstResult.textContent = `You picked ${move}: Computer picked: ${computerChoice}`;
  }
}

const score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
};

function choosingIndex(playerIndex) {
  document.querySelector(".choosing-finger").innerHTML = "";
  const randomNumber = Math.trunc(Math.random() * 5) + 1;
  secondResult.innerHTML = `You choose: <img class="index-finger" src= "img/${playerIndex}-index.png"> - 
  Computer choose: <img class="index-finger" src= "img/${randomNumber}-index.png">`;
  let add = randomNumber + playerIndex;
  if (add > 5) {
    add -= 5;
  }
  if (computerChoices[add - 1] === playerMove) {
    winner.innerHTML = `🏆You won🏆`;
    score.win++;
  } else if (computerChoices[add - 1] === computerMovee) {
    winner.innerHTML = `😔Computer won😔`;
    score.lose++;
  } else {
    winner.innerHTML = `🛑 No body won, choose again 🛑`;
  }
  localStorage.setItem("score", JSON.stringify(score));
  scoreElement.innerHTML = `You Win: ${score.win}: You Lose: ${score.lose}`;
}
const resetScoreButton = document.querySelector(".js-reset-score");
resetScoreButton.addEventListener("click", () => {
  score.win = 0;
  score.lose = 0;
  scoreElement.innerHTML = `You Win: ${score.win}: You Lose: ${score.lose}`;
  localStorage.setItem("score", JSON.stringify(score));
});
const chooseAgainButton = document.querySelector(".js-choose-again");
chooseAgainButton.addEventListener("click", () => {
  firstContainer.classList.remove("hidden");
  secondContainer.classList.add("hidden");
  winner.innerHTML = "";
  secondResult.innerHTML = "";
});
// event listeners

document.querySelector("#destoBtn").addEventListener("click", () => {
  playGame("Desto");
});

document.querySelector("#fingerBtn").addEventListener("click", () => {
  playGame("Finger");
});

document.querySelector("#cowBtn").addEventListener("click", () => {
  playGame("Cow");
});

document.querySelector("#cowterBtn").addEventListener("click", () => {
  playGame("Cowter");
});

document.querySelector("#olyBtn").addEventListener("click", () => {
  playGame("Oly");
});

document.querySelector(".oneFinger").addEventListener("click", () => {
  choosingIndex(1);
});

document.querySelector(".twoFinger").addEventListener("click", () => {
  choosingIndex(2);
});

document.querySelector(".threeFinger").addEventListener("click", () => {
  choosingIndex(3);
});

document.querySelector(".fourFinger").addEventListener("click", () => {
  choosingIndex(4);
});

document.querySelector(".fiveFinger").addEventListener("click", () => {
  choosingIndex(5);
});
