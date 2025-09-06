

const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = [];

  if (username.value.trim() === "") {
    errors.push("Name is required.");
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    errors.push("Invalid email.");
  }


  if (password.value.length < 6) {
    errors.push("Password must be 6+ characters.");
  }

  if (errors.length > 0) {
    formMessage.style.color = "red";
    formMessage.innerText = errors.join(" ");
  } else {
    formMessage.style.color = "green";
    formMessage.innerText = "Welcome to the squad!";
    form.reset();
  }
});




let goals = 0;
const goalBtn = document.getElementById("goal-btn");
const scoreDisplay = document.getElementById("score-display");

goalBtn.addEventListener("click", function () {
  goals++;
  scoreDisplay.innerText = `Goals: ${goals}`;
});



const playerBtn = document.getElementById("player-btn");
const playerDisplay = document.getElementById("player-display");

const players = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Kylian Mbappe",
  "Erling Haaland",
  "Neymar Jr",
  "Vinicius Jr"
];

playerBtn.addEventListener("click", function () {
  const randomPlayer = players[Math.floor(Math.random() * players.length)];
  playerDisplay.innerText = `Today's star is: ${randomPlayer}`;
});
