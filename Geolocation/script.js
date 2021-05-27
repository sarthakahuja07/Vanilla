var arrow=document.querySelector(".arrow");
var speed=document.querySelector(".speed");

var geo =navigator.geolocation;
console.log(geo);


function success(pos){
    console.log(pos);
}

function error(err){
    console.error(`Error ${err.code}`)
}

geo.watchPosition(success,error);
console.log("hi");
