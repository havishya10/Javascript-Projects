// Declaring variables
let homePlusOne = document.getElementById("homePointOne");
let homePlusTwo = document.getElementById("homePointTwo");
let homePlusThree = document.getElementById("homePointThree");
let guestPlusOne = document.getElementById("guestPlusOne");
let guestPlusTwo = document.getElementById("guestPlusTwo");
let guestPlusThree = document.getElementById("guestPlusThree");
let homeReset = document.getElementById("hreset");
let guestReset = document.getElementById("greset");
let homescore = document.getElementById("homeScore");
let guestscore = document.getElementById("guestScore");
let hscore = 0;
let gscore = 0;
let totalHomeScore = 0;
let totalGuestScore = 0;


// Function to handle score updates
function points(pointone, score, updatescore) {
    let point = parseInt(pointone.textContent);
    score += point;
    updatescore.textContent = score;
    return score;
}

function reset(scoreEl, tScore) {
    scoreEl.textContent = "0";
    tScore = 0;
    return tScore;
}

// Event listeners for score buttons
homePlusOne.onclick = function() {
    hscore = points(homePlusOne, hscore, homescore);
    totalHomeScore += hscore;
}
homePlusTwo.onclick = function() {
    hscore = points(homePlusTwo, hscore, homescore);
    totalHomeScore += hscore;
}
homePlusThree.onclick = function() {
    hscore = points(homePlusThree, hscore, homescore);
    totalHomeScore += hscore;
}
guestPlusOne.onclick = function() {
    gscore = points(guestPlusOne, gscore, guestscore);
    totalGuestScore += gscore;
}

guestPlusTwo.onclick = function() {
    gscore = points(guestPlusTwo, gscore, guestscore);
    totalGuestScore += gscore;
}
guestPlusThree.onclick = function() {
    gscore = points(guestPlusThree, gscore, guestscore);
    totalGuestScore += gscore;
}

// Event listener for reset buttons
homeReset.onclick = function() {
    hscore = reset(homescore, hscore);
}
guestReset.onclick = function() {
    gscore = reset(guestscore, gscore);
}

let timerInterval;
let totalSeconds = 0;

function start() {
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    totalSeconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    totalSeconds++;
    if (totalSeconds >= 40 * 60) { // 40 minutes converted to seconds
        stopTimer();
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const timeElement = document.getElementById("time");
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const timeString = minutes + ":" + seconds;
    timeElement.textContent = timeString;
}
