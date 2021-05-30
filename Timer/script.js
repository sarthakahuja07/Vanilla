var display = document.querySelector(".display");
var buttons = document.querySelectorAll("[data-time]");
var input = document.querySelector(".timer__controls #custom");
// console.log(input);
var timer;
function setTimer(seconds) {
  clearInterval(timer);
  var date = Date.now();
  var newDate = new Date(date + 1000 * seconds);
  display.querySelector(".display__end-time").innerText =
    "Get Back at " +
    (newDate.getHours() > 12 ? newDate.getHours() - 12 : newDate.getHours()) +
    ":" +
    beautify(newDate.getMinutes());
  startTimer(newDate);
}

function startTimer(newDate) {
  // console.log();
  updateDisplay(Math.round((newDate - new Date()) / 1000));
  timer = setInterval(() => {
    var RemainingTimer = Math.abs(Math.round((newDate - new Date()) / 1000));
    updateDisplay(RemainingTimer);
    // console.log(RemainingTimer);
    if (RemainingTimer == 0) {
      clearInterval(timer);
      return;
    }
  }, 1000);
}

function updateDisplay(RemainingTimer) {
  var minutes = Math.floor(RemainingTimer / 60);
  var seconds = RemainingTimer % 60;
  console.log();
  display.querySelector(".display__time-left").innerText =
    beautify(minutes) + ":" + beautify(seconds);
}

function beautify(a) {
  var prefix = a < 10 ? `0` : ``;
  return prefix + a;
}

// setTimer(3);

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    setTimer(this.dataset.time);
  })
);

input.addEventListener("submit", function (e) {
  e.preventDefault();
  setTimer(this.querySelector("input").value);
});
