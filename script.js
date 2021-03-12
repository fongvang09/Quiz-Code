var startBtn = document.querySelector(".start-button");
// console.log(startBtn);
var timerDisplay = document.querySelector(".timer-count");
var wordDisplay = document.querySelector(".word-blanks");
var btnPlayAgain = document.querySelector(".reset-button");
var set = document.querySelector("#questionSet");
var result = document.querySelector("#result");
var wins = 0;
var losses = 0;
var isWin = false;
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

var chosenImages = "";
var imageArray = ["https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/FlowerEmpty.png",
  "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/FlowerFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerFull.png",
  "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledLeafEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledLeafFull.png"];

// var rand = imgArray[math.floor(math.random * imgArray.length)];

btn.onclick = function () {
  modal.style.display = "block";
}
// if (startBtn) {
//   startBtn.addEventListener("click"), handleStartClick;
// }

span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function handleStartClick(e) {
  startPrompt.style.display = "none";
  questionContainer.style.display = "block";
  timer();
  renderImages
}

function startGame () {
  isWin = false;
  timerCount = 60;
  startButton.disabled = true;
  renderImages()
  startTimer()
}


// Quiz game question set
var questions = [
  {
    title: "Odd one out",
    choices: ["https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/FlowerFull.png"],
    correctAns: "two",
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
var currentQuestion = 0;

function renderImages () {
  console.log("In render Images function");
  // chosenImages = imageArray[math.floor(math.random() * imageArray.length) - 5];
  const currentImage = questions[questionIndex];
  // what question are we curerntly displaying 
  set.textContent = currentImage.text
  // create new HTML elements to display the question data (question title, question choices)
  // Create element
  var image = document.createElement("img");
  console.log(image)  // --> <img src="......"/> 

  // Populate element with Text and Attributes
  image.setAttribute("src", questions[currentQuestion].choices[0])
  image.setAttribute("data-selection", i)
  // Add Element to DOM
  set.appendChild(image);
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
    timerDisplay.textContent = timerCount;
    if (timerCount === 0) {
      wordDisplay.textContent = "GAME OVER!";
      clearInterval(timerId);
    }
  }, 1000);
});


// if (typeof (Storage) !== "undefined") {
//   localStorage.setItem("localstorage", "localstorage");
//   document.getElementById("result").innerHTML = localStorage.getItem("localstorage");
// } else {
//   document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
// }


// function getRandomImage(imgAr, path) {
//   path = path || "images/";
//   var num = math.floor(math.random() * imgAr.length);
//   var img = imgAr[num];
//   var imgStr = "<img src='" + path + img + "'alt = ''></img>";
//   document.write(imgStr); document.close();
// }

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