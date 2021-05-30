var moles = document.querySelectorAll(".mole");
var scoreText = document.querySelector(".score");
var isStart = false;
var timeout;
var score = 0;
function randomTime(max, min) {
  return Math.random() * (max - min) + min;
}

function randomMole() {
  return moles[Math.floor(Math.random() * 6)];
}

function peek() {
  var mole = randomMole();
  var time = randomTime(200, 1000);
  console.log(mole);
  mole.classList.add("up");

  timeout = setTimeout(() => {
    mole.classList.remove("up");
    if (isStart) {
      peek();
    }
  }, time);
}

function start(e) {
  if (!e.isTrusted || e.key != " ") {
    return;
  }
  if (!isStart) {
    isStart = true;
    scoreText.innerText=0;  
    peek();
  } else {
    isStart = false;
    score = 0;
  }
}

document.addEventListener("keypress", (e) => {
  start(e);
});

moles.forEach((mole)=>mole.addEventListener("click",function(){
    console.log("hi");      
    score+=1;
        console.log(score);
        scoreText.innerText=score;  
        this.classList.remove("up");  
}));
