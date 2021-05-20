
var setClock =function () {
    var time=new Date();
    var secTime=time.getSeconds();
    var minTime=time.getMinutes();
    var hourTime=time.getHours();
    
    console.log(secTime);


    var sec=document.querySelector('.second-hand');
    sec.style.transform=`rotate(${90+secTime*6}deg)`;

    var min=document.querySelector('.min-hand');
    min.style.transform=`rotate(${90+minTime*6 + (secTime/10)}deg)`;

    var hour=document.querySelector('.hour-hand');
    hour.style.transform=`rotate(${90+hourTime*6 + (minTime/2)}deg)`;


    if(secTime==0 ){
        sec.style.transition='none';
    }else{
        sec.style.transition='all 0.1s';
    }

    if(minTime==0 ){
        min.style.transition='none';
    }else{
        min.style.transition='all 0.1s';
    }

    if(hourTime==0 ){
        hour.style.transition='none';
    }else{
        hour.style.transition='all 0.1s';
    }

}


setInterval(setClock, 1000);