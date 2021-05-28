var links= document.querySelectorAll("a");
var highlight= document.createElement("span");
highlight.classList.add("highlight");

document.body.appendChild(highlight);



// console.log(highlight);

function linkHandle(){
    highlight.style.height=`${this.offsetHeight+2}px`;
    highlight.style.width=`${this.offsetWidth+7}px`;
    highlight.style.transform=`translate(${this.offsetParent.offsetLeft+this.offsetLeft-2}px,${this.offsetParent.offsetTop+this.offsetTop}px)`;
    // console.log(this.offsetHeight);

    console.dir(this.offsetParent.offsetTop);
}
links.forEach((link)=>link.addEventListener("mouseover",linkHandle))