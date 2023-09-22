var timer = 60;
var guessNumber;
var score = 0;
var timerelm = document.querySelector("#timerelm");
var hitelm = document.querySelector("#hitelm");
var scorelm = document.querySelector("#scorelm");
var btmpnl = document.querySelector("#btmpnl");
setInterval(function () {
    if (timer > 0) {
        --timer;
        timerelm.textContent = timer;
    } else {
        btmpnl.innerHTML = `"<h1 id="center">Game Over </h1>"`;
    }
}, 1000);

function getNewGuess() {
    guessNumber = Math.floor(Math.random() * 10);
    hitelm.textContent = guessNumber;
};
getNewGuess();
makebubbles();

function makebubbles() {
    for (var i = 0; i < 114; i++){
        var guessNumber = Math.floor(Math.random() * 10);
        var template = `<div class="bubble">${guessNumber}</div >`;
        btmpnl.innerHTML += template;
    }
};

btmpnl.addEventListener("click", function (details) {
    var clickbubblevalue = details.target.textContent;
    if (clickbubblevalue == guessNumber) {
        score = score + 10;
        scorelm.textContent = score;
        getNewGuess();
        btmpnl.innerHTML = "";
        makebubbles();
    } else {
        
    }
});