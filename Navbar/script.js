var list = document.querySelectorAll(".cool>li");
var background = document.querySelector(".dropdownBackground");

function showDropdown() {
  this.classList.add("dropped");
  var dropdown = this.querySelector(`.dropdown`);
  setTimeout(() => {
    if (this.classList.contains("dropped")) {
      dropdown.style.opacity = "1";
    }
  }, 150);
  background.style.width=`${dropdown.offsetWidth}px`;
  background.style.height=`${dropdown.offsetHeight}px`;
  background.style.opacity=`1`;
  console.log(this.offsetLeft);
  console.log(dropdown.offsetLeft);
  background.style.transform=`translate(${this.offsetLeft+dropdown.offsetLeft}px,${this.offsetTop+this.offsetHeight}px)`;

  
  
}
function hideDropdown() {
  var dropdown = this.querySelector(`.dropdown`);
  background.style.opacity=`0`;
  this.classList.remove("dropped");
  dropdown.style.opacity = "0";
}

list.forEach((element) => element.addEventListener("mouseenter", showDropdown));
list.forEach((element) => element.addEventListener("mouseleave", hideDropdown));
