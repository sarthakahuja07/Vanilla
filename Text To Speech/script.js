var voiceSelect = document.querySelector('select[name="voice"]');
var ranges = document.querySelectorAll('input[type="range"]');
var textArea = document.querySelector("textarea");
var speak = document.querySelector("#speak");
var stopButton = document.querySelector("#stop");
var word = new SpeechSynthesisUtterance();

var bool = false;

var synth = window.speechSynthesis;

function showList() {
  if (bool) {
    return;
  }
  bool = true;
  voices = synth.getVoices();
  voices.forEach((element, index) => {
    if (element.lang.includes("en")) {
      // console.log(element);
      var option = document.createElement("option");
      option.textContent = element.name;
      option.value = index;
      voiceSelect.appendChild(option);
    }
  });
}

function changeVoice() {
  synth.cancel();
  console.log(this.value);
  word.voice = voices[this.value];
  speech();
}

function speech() {
  synth.cancel();
  word.text = textArea.value;

  synth.speak(word);
}
function stopSpeaking() {
  if (synth.speaking || synth.pending) {
    synth.cancel();
  }
}

function changeRanges() {
  word[this.name] = this.value;
  speech();
}

synth.addEventListener("voiceschanged", showList);
speak.addEventListener("click", speech);
stopButton.addEventListener("click", stopSpeaking);
voiceSelect.addEventListener("change", changeVoice);
ranges.forEach((value) => value.addEventListener("input", changeRanges));
