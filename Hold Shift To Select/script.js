var inputs = document.querySelectorAll('input[type="checkbox"]');
var checkedId = 0;

function checkAll(start,end){
    if(end<start){
        var temp=start;
        start=end;
        end=temp;
    }
    console.log(start,end);
    for (let index = parseInt(start) + 1; index < end; index++) {
        var el=document.querySelector(`input[id="${index}"]` );
        el.checked=true;
    }
}
inputs.forEach((element) =>
element.addEventListener("click", (event) => {
    if (element.checked === false) {
        checkedId = 0;
        console.log(checkedId);
        return;
    }
    
    if(checkedId===0){
        checkedId = element.id;
        return;
    } 
        console.log(event);
        if(event.shiftKey===false){
            checkedId=element.id;
            return;
        }
        checkAll(checkedId,element.id);
        
    
})
);
