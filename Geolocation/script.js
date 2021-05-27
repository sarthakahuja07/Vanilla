var arrow=document.querySelector(".arrow");
var speed=document.querySelector(".speed-value");

var geo =navigator.geolocation;
console.log(geo);


function success(pos){
    console.log(pos);
    console.log(Math.floor(pos.coords.speed*1000));
    var speedText=Math.floor(pos.coords.speed*1000);
    speed.textContent=speedText
    arrow.style.transform= `rotate(${Math.floor(pos.coords.heading)}deg)`;
}

function error(err){
    console.error(`Error ${err.code}`)
}

geo.watchPosition(success,error);
