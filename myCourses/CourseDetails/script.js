document.getElementById("span").addEventListener("click", ExpandToggle)
var d = document.getElementById("span");


function ExpandToggle(){
  var expand = document.getElementById("topic1");
  if(!expand)return true;
  if(expand.style.display=="none"){
    expand.style.display="block";
    d.innerHTML = "Visa mindre";
  }
  else{
    expand.style.display="none";
    d.innerHTML = "Visa mer...";
    window.scrollTo(0, 0);
  }
}


// COURSE-NAV-BAR
const nav = document.querySelectorAll(".course-type-nav-bar li"); 
const courseCategoryElem = document.querySelectorAll(".articleClass"); 

for(let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", (e)=>{
        
    for(let j = 0; j < nav.length; j++) {
      if(e.target == nav[j]) {
        nav[j].style.background = "white"; 
      } else {
        nav[j].style.background = "initial"; 
      }
    }

  }); 
}
