var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer-count");
var wordDisplay = document.getElementById("word-blanks");
var btnPlayAgain = document.getElementById("reset-button");
var questionsEl = document.getElementById("questions");
var result = document.getElementById("result");
var choicesEl = document.getElementById("choices");

var wins = 0;
var losses = 0;
var isWin = false;
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0]; // [0] is needed to close modal when clicking "x"
var currentQuestionIndex = 0;

var imageArray = ["https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/FlowerEmpty.png",
  "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/FlowerFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerFull.png",
  "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledLeafEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledLeafFull.png"];

// Quiz game question set
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "Odd one out",
    choices: ["https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/FlowerFull.png"],
    correctAns: 2,
  },
  {
    title: "Odd one out",
    choices: ["https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledLeafFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledLeafEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/FlowerEmpty.png"],
    correctAns: "one",
  },
  {
    title: "Odd one out",
    choices: ["https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/FlowerEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledLeafEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafEmpty.png"],
    correctAns: "three",
  },
  {
    title: "Odd one out",
    choices: ["https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledLeafFull.png"],
    correctAns: "two",
  },

]

// user clicks button to submit initials
// submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

// initialsEl.onkeyup = checkForEnter;


// opens modal when user clicks on the start button
startBtn.onclick = function () {
  modal.style.display = "block";
}
// to close modal when you press "x" button
span.onclick = function () {
  modal.style.display = "none";
}
// another way to close modal when pressed outside of content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function startQuiz () {
  // un-hide questions section
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  // questionsEl.removeAttribute("class");

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = "";

  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceNode.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}

function renderImages () {
  console.log("In render Images function");
  const currentImage = questions[questionIndex];
  // what question are we curerntly displaying 
  questionsEl.textContent = currentImage.text
  // create new HTML elements to display the question data (question title, question choices)
  // Create element
  var image = document.createElement("img");
  console.log(image)  // --> <img src="......"/> 

  // Populate element with Text and Attributes
  image.setAttribute("src", questions[currentQuestion].choices[0])
  image.setAttribute("data-selection", i)
  // Add Element to DOM
  questionsEl.appendChild(image);
}

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}

startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var timerCount = 60;
  startBtn.disabled = true;
  var timerId = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount === 0) {
      wordDisplay.textContent = "GAME OVER!";
      clearInterval(timerId);
    }
  }, 1000);
});

function timer() {
  timerEl.style.display = "block";
  var timeInterval = setInterval(function () {
    timerEL.textContent = "Time left: " + timeLeft;
    if (timeLeft == 0 || !timerOn) {
      timerOn = false;
      quizOver();
      clearInterval(timeInterval);
    }
    if (timerOn) {
      timeLeft--;
    }
  }, 1000);
}

function quizOver() {
  timerOn = false;
  questionContainer.style.display = "none";
  timerEl.style.display = "none";
  result.style.dispaly = "block";
  score = timerLeft < 0?0:timeLeft;
  userScore.textContent = `${score}`;
}