var hero=document.querySelector(".hero");
var heading=hero.querySelector("h1");
var max=100;
function shadow(e){
    var x=e.offsetX;
    var y=e.offsetY;

    
    // console.dir(heading);
    if(this!=e.target){
        x=x+heading.offsetLeft;
        y=y+heading.offsetTop;
    }
    // console.log(x,y);

        // if max =100
        // total width pixel = 1300 
        // 1px - (1300/100)*X
    
    var xShadow=(-(max/hero.offsetWidth)*x + (max/2));
    var yShadow=(-(max/hero.offsetHeight)*y + (max/2));

    console.log(xShadow);
    heading.style.textShadow=`${xShadow}px ${yShadow}px 0px rgb(0 0 0 / 17%)`;

}

hero.addEventListener("mousemove",shadow);