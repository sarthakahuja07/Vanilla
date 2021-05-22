var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#FF0000";
ctx.lineCap = "round";
ctx.lineWidth = 150;
ctx.lineJoin = "round";

// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.lineTo(100,100);
// ctx.stroke();

var isDraw = false;
var initialX = 0;
var initialY = 0;
var x = 0;
var y = 0;
var hue = 0;
var widthSwitch=false;
function startDraw(ev) {
  isDraw = true;
  initialX = ev.offsetX;
  initialY = ev.offsetY;
}
function stopDraw() {
  isDraw = false;
}

function draw(ev) {
  if (isDraw) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    x = ev.offsetX;
    y = ev.offsetY;
    ctx.beginPath();
    ctx.moveTo(initialX, initialY);
    ctx.lineTo(x, y);
    ctx.stroke();
    initialX = x;
    initialY = y;

	if(hue>=360){
		hue=0;
	}
	hue+=2;

	if(ctx.lineWidth>=150){
		widthSwitch=true;
	}else if(ctx.lineWidth==5){
		widthSwitch=false;
	}

	if(widthSwitch){
		ctx.lineWidth--;
	}else{
		ctx.lineWidth++;
	}
	

  } else {
    return;
  }
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseleave", stopDraw);
