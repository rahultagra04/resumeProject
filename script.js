var anchor=document.querySelectorAll("#nav-list a")
for(var i=0;i<anchor.length-1;i++){
    anchor[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetId = this.textContent.trim().toLowerCase();
      
       var section= document.getElementById(targetId);
       var scroll=setInterval(function(){
        var coOrdinates=section.getBoundingClientRect();
           if(coOrdinates.top<=0){
               clearInterval(scroll);
               return;
           }
           window.scrollBy(0,50);
    },30);

    });
}