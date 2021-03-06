var player = document.querySelector(".player"); // DONE
var video = player.querySelector(".viewer"); //DONE
var progress = player.querySelector(".progress");
var progressBar = player.querySelector(".progress__filled");//DONE
var toggle = player.querySelector(".toggle"); //DONE
var skipButtons = player.querySelectorAll("[data-skip]");//DONE
var ranges = player.querySelectorAll(".player__slider");//DONE
var fullScreen = player.querySelector(".fullScreen");//DONE
var speed=document.querySelector(".speed");
var speedBar=speed.querySelector(".speed-bar");
var speedChangeBool=false;

function playOrPause() {
  video.paused ? video.play() : video.pause();
}
function updateButton() {
  const icon = this.paused ? "►" : "❚❚";
  toggle.textContent = icon;
}

function changeTime() {
  var time = this.dataset.skip;
//   console.log(video.currentTime);
  video.currentTime += parseInt(time);
}

var isFull = false;
function enterFull() {
	if(!isFull){
		// console.dir(player);  
		player.requestFullscreen();
		// console.dir(player);
		isFull = true;
	}else{
		document.exitFullscreen();
		// console.log("hello");
	}

}

function rangeHandler(){
	var prop = this.name;
	video[prop]=this.value;	
}


function progressUpdate(){
	var progressTime=(video.currentTime/video.duration)*100;
	progressBar.style.flexBasis = `${progressTime}%`;
}
function changeProgress(e){
	
	// console.log("pro: " + e.offsetX);
	// console.dir("total: " + player.clientWidth);
	var progressTime=(e.offsetX/player.clientWidth)*video.duration;
	// console.log(progressTime);
	video.currentTime=progressTime;
}
var isMouseDown=false;
video.addEventListener("click", playOrPause);
toggle.addEventListener("click", playOrPause);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
fullScreen.addEventListener("click", enterFull);
skipButtons.forEach((btn) => btn.addEventListener("click", changeTime));
ranges.forEach(element => element.addEventListener("input",rangeHandler));
document.addEventListener("keydown", function(e){
	if(e.code==="Space") playOrPause();
});

video.addEventListener("timeupdate",progressUpdate);

progress.addEventListener("mousedown",function(){
	isMouseDown=true;
});
progress.addEventListener("mouseup",function(){
	isMouseDown=false;
});
progress.addEventListener("mousemove",function(e){
	(isMouseDown && changeProgress(e));
});
progress.addEventListener("click",function(e){
	(changeProgress(e));
});


//SPPED CHANGE BAR//

var changeBy;
var start;
var currHeight;
var perc;

function changeVideoSpeed(){
	var videoSpeed =  (0.4) + perc*0.036;
	video.playbackRate=videoSpeed;
	speedBar.innerText=`${videoSpeed.toFixed(2)}x`;
}

speed.addEventListener("mousedown",(e)=>{
	speedChangeBool=true;
	currHeight=100-((e.pageY-speed.offsetTop)/speed.offsetHeight)*100;
	// console.log(currHeight);
	start=e.screenY;
	e.preventDefault()
	speedBar.style.height=`${currHeight}%`;
	perc=currHeight;
	changeVideoSpeed();
});

speed.addEventListener("mouseup",()=>{
	speedChangeBool=false;
});

speed.addEventListener("mouseleave",()=>{
	speedChangeBool=false;
});


speed.addEventListener("mousemove",(e)=>{
	if(speedChangeBool){
		e.preventDefault();
		changeBy=(start-e.screenY);
		perc = currHeight + (changeBy/speed.offsetHeight)*100;
		speedBar.style.height=`${perc}%`;
		changeVideoSpeed();

	}
});


