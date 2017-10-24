//document.getElementById("span").addEventListener("click", ExpandToggle)
//var d = document.getElementById("span");


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

        nav[j].style.borderTop = "1px solid white";
        nav[j].style.borderLeft = "1px solid white";
        nav[j].style.borderRight = "1px solid white";

        courseCategoryElem[j].style.display = "flex";
      } else {
        nav[j].style.background = "initial";
        courseCategoryElem[j].style.display = "none";
        nav[j].style.borderTop = "none";
        nav[j].style.borderLeft = "none";
        nav[j].style.borderRight = "none";
      }
    }

  });
}

/*Skapa något som tar in filnamnet till p-tagen istället för statiskt meddelande*/

var items = document.getElementsByClassName('uploadBtn');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', TaskComplete);
}

function TaskComplete(){
  console.log(this);
  document.getElementById("taskComplete").innerHTML="Inlämning.pdf<br>Uppgift klar!";
}

/* Tillbaka knappen */

function goBack() {
  window.history.back()
}