var words = document.querySelector(".words");

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var isOver = false;

recognition.interimResults = true;

recognition.maxAlternatives = 1;
recognition.lang = "en-UK";
console.log(recognition);

var p = document.createElement("p");
words.appendChild(p);

recognition.addEventListener("result", function (e) {
  console.log(e.results);
  var transcript = e.results[0][0].transcript;
  p.innerText = transcript;
});

recognition.addEventListener("end", function () {
  if (isOver) {
    return;
    isOver = false; 
  }
  recognition.start();
  console.log("yoo");
  p = document.createElement("p");
  words.appendChild(p);
});

document.addEventListener("click", function () {
  recognition.start();
  console.log("hi");
});

document.addEventListener("keydown", function (e) {
  if (e.key == " ") {
    isOver = true;
    recognition.stop();
    console.log("bye");
  }
});
