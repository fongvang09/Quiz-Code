var startBtn = document.querySelector(".start-button");
// console.log(startBtn);
var timerDisplay = document.querySelector(".timer-count");
var wordDisplay = document.querySelector(".word-blanks");
var btnPlayAgain = document.querySelector(".reset-button");
var wins = 0;
var losses = 0;
var wordsList = ["html", "python"];
var chosenWord;

// btnPlayAgain.addEventListener(".reset-button").onclick, function () {
//   document.querySelector(".reset-button").empty();
//   alert("clicked");
// }

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

startBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var timerCount = 60;
    var timerId = setInterval(function(){
        timerCount--;
        timerDisplay.textContent = timerCount;
        if(timerCount === 0) {
            wordDisplay.textContent = "GAME OVER!"
            clearInterval(timerId);
        }
    }, 1000);

    chosenWord = wordsList[Math.floor(Math.random()*
    wordsList.length)];
    // console.log(chosenWord);

    var wordArr = chosenWord.split(""); //converts string into array
    console.log(wordArr);

    for (let i = 0; i < wordArr.length; i++) {
        wordArr[i] = "_"
    };
    console.log(wordArr);



    // var imageArr = chosenImg.split("");
    // for (let i = 0; i < imageArr.length; i++) {
    //     __Arr.push("_");
    // };
    // __Arr = __Arr.join(" ");

    // wordDisplay.textContent = __Arr;
})

if (typeof(Storage) !== "undefined") {
    localStorage.setItem("localstorage", "localstorage");
    document.getElementById("result").innerHTML = localStorage.getItem("localstorage");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

// var images = [],
// index = 0;
// images[0] = "<img src='https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafEmpty.png' alt='Visit Computer Hope'></a>";
// images[1] = "<img src='https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafFull.png' alt='Computer History'></a>";
// images[2] = "<img src='https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/FlowerEmpty.png' alt='Visit Computer Hope'></a>";
// images[3] = "<img src='https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/FlowerFull.png' alt='Visit Computer Hope'></a>";
// images[4] = "<img src='https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerEmpty.png' alt='Visit Computer Hope'></a>";
// images[5] = "<img src='https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerFull.png' alt='Visit Computer Hope'></a>";
// images[6] = "<img src='https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledLeafEmpty.png' alt='Visit Computer Hope'></a>";
// images[7] = "<img src='https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledLeafFull.png' alt='Visit Computer Hope'></a>";


var imageList = ["https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/LeafFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/FlowerEmpty.png", 
"https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/FlowerFull.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledFlowerFull.png",
"https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledLeafEmpty.png", "https://assets.mythictrap.com/mistsOfTirnaScithe/miniGame/CircledLeafFull.png"];
