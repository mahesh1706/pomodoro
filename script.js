
let intervalId;
let timeLeft;
let sessionLength = 55 * 60; // 25 minutes in seconds
let breakLength = 5 * 60; // 5 minutes in seconds
let isSession = true;
let isRunning = false;

const timer = document.getElementById("timer");
const timerLabel = document.getElementById("timer-label");
const startStopButton = document.getElementById("start-stop");
const resetButton = document.getElementById("reset");

function startTimer() {
  isRunning = true;
  intervalId = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft === 0) {
      clearInterval(intervalId);
      switchMode();
      intervalId = setInterval(startTimer, 1000);
    }
  }, 1000);
}

function pauseTimer() {
  isRunning = false;
  clearInterval(intervalId);
}

function resetTimer() {
  pauseTimer();
  isSession = true;
  timeLeft = sessionLength;
  updateTimerDisplay();
  timerLabel.textContent = "Session";
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  timer.textContent = `${minutes}:${seconds}`;
}

function switchMode() {
  if (isSession) {
    isSession = false;
    timeLeft = breakLength;
    timerLabel.textContent = "Break";
  } else {
    isSession = true;
    timeLeft = sessionLength;
    timerLabel.textContent = "Session";
  }
}

function toggleTimer() {
  if (isRunning) {
    pauseTimer();
    startStopButton.textContent = "Start";
  } else {
    startTimer();
    startStopButton.textContent = "Pause";
  }
}41

startStopButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);

resetTimer();


const ITEMS_CONTAIER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_ITEM_BUTTON = document.getElementById("add");

