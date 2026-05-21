console.log("Welcome User");
let userchoice;
let user_win = 0;
let computer_win = 0;
const emojis = ["✊", "✋", "✌️"];

function input(value) {
  userchoice = value;
  logic();
}

function logic() {
  let computerchoice = Math.floor(Math.random() * 3);
  //[0, 1) -> math.random() limit

  document.getElementById("user_move").innerText = emojis[userchoice];
  document.getElementById("computer_move").innerText = emojis[computerchoice];

  //game logic
  if (userchoice == computerchoice) {
    result("Match Draw 🤝", "draw");
  } else {
    if (
      (userchoice === 0 && computerchoice === 2) || // Rock beats Scissors
      (userchoice === 1 && computerchoice === 0) || // Paper beats Rock
      (userchoice === 2 && computerchoice === 1) // Scissors beats Paper
    ) {
      user_win++;
      result("You Win! 🎉", "win");
    } else {
      computer_win++;
      result("Computer Wins! 🤖", "lose");
    }
  }
}

function result(res, status) {
  const resultElement = document.getElementById("result");
  resultElement.innerText = res;
  //change class
  resultElement.classList.remove("green-text", "red-text", "gray-text");
  if (status === "win") {
    resultElement.classList.add("green-text");
  } else if (status === "lose") {
    resultElement.classList.add("red-text");
  } else if (status === "draw") {
    resultElement.classList.add("gray-text");
  }
  //update values
  document.getElementById("you_win").innerText = user_win;
  document.getElementById("computer_win").innerText = computer_win;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const btn = document.getElementById("theme-btn");
  if (document.body.classList.contains("dark-mode")) {
    btn.innerText = "☀️ Light Mode";
  } else {
    btn.innerText = "🌙 Dark Mode";
  }
}
