var panels=document.querySelectorAll(".panel");
panels.forEach(element => {
    element.addEventListener("click" ,function my_func(e){
        this.classList.toggle("active");
        
    });

    element.addEventListener("transitionend",function func2(e){
        if(e.propertyName==="flex-grow")
        this.classList.toggle("text-appear");
    });

});