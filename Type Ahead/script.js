
var cities;
var matchingPlaces;
(function (window) {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
//   var req = new XMLHttpRequest();
//   req.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log("hi");
//     }
//   };

//   req.open("POST", endpoint, true);
//   req.setRequestHeader("Content-type", "application/json");
//   req.send();


  $.ajax({
      crossOrigin: true,
      url: endpoint,
      success: function(data) {
         cities=JSON.parse(data);
	}
    });
})();


var search = document.querySelector(".search");
var suggestions= document.querySelector(".suggestions");


function findPlace(toSearch){
	matchingPlaces=cities.filter(function(place){
		var regex= new RegExp(toSearch,'gi');
		return place.city.match(regex) || place.state.match(regex);	
	})
	return matchingPlaces;
}

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function displayPlaces(){
	var toSearch=this.value;
	var matchingPlaces=findPlace(toSearch);
	var html=matchingPlaces.map(function(place){
		const regex = new RegExp(toSearch, 'gi');
		const cityName = place.city.replace(regex, `<span class="hl">${toSearch}</span>`);
		const stateName = place.state.replace(regex, `<span class="hl">${toSearch}</span>`);
		var population=numberWithCommas(place.population);
		return `<li>
			<span class="name"> ${cityName}, ${stateName} </span>
			<span class="name"> ${population} </span>
			</li>`;
	}).join('');
	
	suggestions.innerHTML=html;
}

search.addEventListener("keyup",displayPlaces);




