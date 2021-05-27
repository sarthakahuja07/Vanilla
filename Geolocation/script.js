var arrow=document.querySelector(".arrow");
var speed=document.querySelector(".speed-value");

var geo =navigator.geolocation;
console.log(geo);


function success(pos){
    console.log(pos);
    var speedText=Math.floor(pos.coords.speed);
    speed.textContent=speedText
    arrow.style.transform= `rotate(${Math.floor(pos.coords.heading)}deg)`;
}

function error(err){
    console.error(`Error ${err.code}`)
}

geo.watchPosition(success,error);
