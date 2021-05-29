var items= document.querySelector(".items");
// console.log(items);
var start;
var mouseclicked=false;
var shiftBy;
var scrolledleft;
function startScrolling(e){
    start=e.screenX
    this.classList.add('active');
    scrolledleft=this.scrollLeft;
    mouseclicked=true;
}

function stopScrolling(){
    mouseclicked=false
    this.classList.remove('active');
    // this.scrollLeft=shiftBy;
    console.log(this.scrollLeft);
}

function scroll(e){
    if(!mouseclicked){
        return;
    }
    shiftBy=(start-e.screenX)*2;
    this.scrollLeft=scrolledleft+shiftBy;
}

items.addEventListener("mousedown", startScrolling)
items.addEventListener("mouseup", stopScrolling)
items.addEventListener("mousemove", scroll)
items.addEventListener("mouseleave",stopScrolling)