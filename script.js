const readingTime = document.getElementById("timer");

var timeInterval = 0;
var runStatus = true;
var lastReadingInterval = new Date();

function startTimer() {
  runStatus = false;
}

function stopTimer() {
  runStatus = true;
}

function resetTimer() {
  runStatus = true;
  timeInterval = 0;
  displayTimer();
}

function updateTimer() {
  if (runStatus === false) {
    timeInterval += new Date() - lastReadingInterval;
    displayTimer();
  }
  lastReadingInterval = new Date();
  setTimeout(updateTimer, 1);
}

function displayTimer() {
  let ms = timeInterval % 1000;
  let s = Math.floor(timeInterval / 1000) % 60;
  let min = Math.floor(timeInterval / 60000) % 60;
  let h = Math.floor(timeInterval / 360000);
  let d = Math.floor(timeInterval / 86400000);

  ms = (ms + "000").slice(0, 3);
  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  min = min < 10 ? "0" + min : min;
  s = s < 10 ? "0" + s : s;

  readingTime.innerHTML = d + ":" + h + ":" + min + ":" + s;
}

updateTimer();
