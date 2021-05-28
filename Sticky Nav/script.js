var navbar=document.querySelector("nav");
var content=document.querySelector(".site-wrap");
var lost=document.querySelector('li[class="logo"]');


var topnav=navbar.offsetTop;

function scrolled(){
    // console.log(window.scrollY);
    if(window.scrollY>=topnav){    
        navbar.classList.add("fixed");
        content.classList.add("fixed");
        lost.classList.add("fixed");
        document.body.style.paddingTop = navbar.offsetHeight + 'px'        
    }   
    if(window.scrollY<=(topnav)){
        lost.classList.remove("fixed");
        navbar.classList.remove("fixed");
        content.classList.remove("fixed");
        document.body.style.paddingTop = 0;

    }

}

document.addEventListener("scroll",scrolled);