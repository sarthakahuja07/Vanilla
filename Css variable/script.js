const inputs=document.querySelectorAll("input");
inputs.forEach(ele => ele.addEventListener('input' , function(e){
    console.log(this.value);
    var r = document.querySelector(':root');
    console.log(this.dataset);
    var suffix=this.dataset.suffix;
    r.style.setProperty(`--${this.name}`,`${this.value}${suffix}`);    
}));