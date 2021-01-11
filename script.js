"use strict";

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess);

  // When no number (guess) is entered
  if (!guess) {
    displayMessage("No Number!");

    // When Player Wins
  } else if (guess === secretNumber) {
    displayMessage("Correct...You Win!!!");
    document.querySelector(".number").textContent = secretNumber;

    document.body.style.background = "green";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is different from secret number
  } else if (score !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "Too High...Try Again!" : "Too Low...Try Again!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game Over...You Lost!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  displayMessage("Start Guessing...");
  document.body.style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
