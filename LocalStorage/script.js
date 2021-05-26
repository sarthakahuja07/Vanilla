const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
var items=[];
const resetButton=document.querySelector(".resetButton")


if(localStorage.getItem("items")!=""){
    items=JSON.parse(localStorage.getItem("items")) 
}else{
    items=[];
}
function addItem(e) {
  var textInput = this.querySelector("input[name='item']");
  var item = {
    name: textInput.value,
    check: false,
  };
  items.push(item);
  e.preventDefault();
  this.reset();
  store(items);
  displayItems();
}

function displayItems() {
//   console.table(itemsObj);
  var html = items
    .map(function (element, index) {
      return `
    <li>
        <input type="checkbox" name="check" id=${index} ${element.check ? "checked" : ""} >
        <label for=${index}>${element.name}</label>
    </li>

     `;
    })
    .join("");

  itemsList.innerHTML = html;
  var allitems = itemsList.querySelectorAll("li input");
  allitems.forEach((element, index) =>
    element.addEventListener("change", function (e) {
      // console.log(element.checked);
      items[index].check = element.checked;
      store(items);
    })
  );
}

function store(items) {
  localStorage.setItem("items",JSON.stringify(items));
}

function resetItems(){
    localStorage.setItem("items","");
    items=[]; 
    displayItems();
}
addItems.addEventListener("submit", addItem);

resetButton.addEventListener("click",resetItems)

window.addEventListener('DOMContentLoaded', (event) => {
    displayItems();
});