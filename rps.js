var playerScore = 0;
var computerScore = 0;

function generateComputerMove() {
  const number = Math.random();

  if (number <= 0.33) {
    return "rock";
  } else if (number > 0.33 && number <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame(playerMove) {
  var computerMove = generateComputerMove();

  showMove(computerMove);

  if (playerMove === "rock")
    if (computerMove === "rock") {
      showMessage("Draw");
    } else if (computerMove === "paper") {
      showMessage("Computer wins");
      computerScore++;
    } else if (computerMove === "scissors") {
      showMessage("Player wins");
      playerScore++;
    }
  if (playerMove === "paper")
    if (computerMove === "paper") {
      showMessage("Draw");
    } else if (computerMove === "scissors") {
      showMessage("Computer wins");
      computerScore++;
    } else if (computerMove === "rock") {
      showMessage("Player wins");
      playerScore++;
    }
  if (playerMove === "scissors")
    if (computerMove === "scissors") {
      showMessage("Draw");
    } else if (computerMove === "rock") {
      showMessage("Computer wins");
      computerScore++;
    } else if (computerMove === "paper") {
      showMessage("Player wins");
      playerScore++;
    }

  var gameChoices = {
    playerMove,
    computerMove
  };

  gameHistory.push(gameChoices);
  paintHistory();

  let player_Score = document.getElementById("playerscore");
  player_Score.innerText = playerScore;

  let computer_Score = document.getElementById("computerscore");
  computer_Score.innerText = computerScore;
}

function paintHistory() {
  var historyElement = document.getElementById("history");
  var displayString = "";
  for (var i = 0; i < gameHistory.length; i++) {
    displayString +=
      "<li>" + gameHistory[i].playerMove + " vs " + gameHistory[i].computerMove;
    +"</li>";
  }

  historyElement.innerHTML = displayString;
}

function playRock() {
  playGame("rock");
}
function playPaper() {
  playGame("paper");
}
function playScissors() {
  playGame("scissors");
}

let Rockbutton = document.getElementById("Rockbtn");
Rockbutton.addEventListener("click", playRock);

let Paperbutton = document.getElementById("Paperbtn");
Paperbutton.addEventListener("click", playPaper);

let Scissorsbutton = document.getElementById("Scissorsbtn");
Scissorsbutton.addEventListener("click", playScissors);

function showMessage(message) {
  var resultElement = document.getElementById("results");
  resultElement.innerText = message;
}

function showMove(message) {
  var resultElement = document.getElementById("computerMove");
  resultElement.innerText = message;
}

function handleUsername() {
  var input = document.getElementById("usernameInput");
  var display = document.getElementById("usernameDisplay");

  display.innerText = input.value;

  if (input.value) {
    display.innerText = input.vlaue;
  } else {
    alert("WRONGO");
  }
}

var usernameBtn = document.getElementById("username-btn");
usernameBtn.addEventListener("click", handleUsername);

var gameHistory = [];
