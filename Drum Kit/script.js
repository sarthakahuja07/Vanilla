window.addEventListener("keydown",function(e){
    var keyPressed = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!keyPressed){
        return;
    }
    keyPressed.currentTime=0;
    keyPressed.play();

    var keyDiv=document.querySelector(`.key[data-key="${e.keyCode}"]`)
    keyDiv.classList.add('playing');
    
    // setTimeout(function()
    // { 
    //     keyDiv.classList.remove('playing');
    // }, 100);
    console.log(keyDiv);
})

var keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", function(e){
    if(e.propertyName=='transform'){
        key.classList.remove('playing');
        console.log(e);
    }
          
}));

