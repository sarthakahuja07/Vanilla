var hero=document.querySelector(".hero");
var heading=hero.querySelector("h1");
var row= document.querySelector(".row");
var max=20;
function shadow(e){
    e.preventDefault();
    var x=e.offsetX;
    var y=e.offsetY;

    
    if(this!=e.target){
        x=x+heading.offsetLeft;
        y=y+heading.offsetTop;
    }
   
    
    var xShadow=(-(max/hero.offsetWidth)*x + (max/2));
    var yShadow=(-(max/hero.offsetHeight)*y + (max/2));

    // console.log(xShadow);
    heading.style.textShadow=`${xShadow}px ${yShadow}px 0px rgb(0 0 0 / 17%)`;

}

window.addEventListener("load",function(){
    fetch('links.json')
    .then(response => response.json())
    .then((data) => {
  
      data.forEach(element => {
          console.log(element);
            var childDiv= this.document.createElement("div");
            
            childDiv.classList.add("cat","col-6", "col-md-4", "mb-5");
            childDiv.innerHTML=`<a href="${element.link}" class="">
                      <div class="content">
                          <img src=${element.img} width="100%"   alt="">
                          <div class="footer">
                              <h5>${element.name}</h5>
                          </div>
                      </div>        
                  </a>`;    
            //"col-6", "col-md-4", "cat mb-5"
            row.appendChild(childDiv);

    //       <div class="col-6 col-md-4 cat mb-5">
    //       <a href="#" class="">
    //           <div class="content">
    //               <img width="100%"  alt="">
    //               <div class="footer">
    //                   <h5>Project Name</h5>
    //               </div>
    //           </div>        
    //       </a>
    //   </div>
      });
      // console.log(data)   
    });
})

hero.addEventListener("mousemove",  shadow);
var contents= document.querySelectorAll(".content");

console.log(contents)



