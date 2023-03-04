
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



// task to do list :
let taskList = document.getElementById("task-list");
let inputTask = document.getElementById("input-task");
let savedTasks = [];

function addTask() {
  let task = inputTask.value.trim();
  if (task !== "") {
    let li = document.createElement("li");
    li.innerHTML = "<span>" + task + "</span><button onclick='deleteTask(this)'>Delete</button>";
    taskList.appendChild(li);
    inputTask.value = "";
  }
}

function deleteTask(button) {
  let li = button.parentElement;
  li.remove();
}

function saveTasks() {
  savedTasks

  function saveTasks() {
  let tasks = [];
  let liElements = taskList.getElementsByTagName("li");
  for (let i = 0; i < liElements.length; i++) {
  let task = liElements[i].getElementsByTagName("span")[0].textContent;
  tasks.push(task);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Tasks saved successfully.");
  }
  
  function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks !== null && tasks.length > 0) {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = "<span>" + tasks[i] + "</span><button onclick='deleteTask(this)'>Delete</button>";
  taskList.appendChild(li);
  }
  alert("Tasks loaded successfully.");
  } else {
  alert("No tasks found.");
  }
  }
  
  function deleteAllTasks() {
  taskList.innerHTML = "";
  localStorage.removeItem("tasks");
  }
  
  window.onload = function() {
  if (localStorage.getItem("tasks") !== null) {
  savedTasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < savedTasks.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = "<span>" + savedTasks[i] + "</span><button onclick='deleteTask(this)'>Delete</button>";
  taskList.appendChild(li);
  }
  }
  };