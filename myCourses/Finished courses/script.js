let buttons = document.getElementsByClassName("button");
let containers = document.getElementsByClassName("container");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
    if (containers[i].style.display != "block")
         containers[i].style.display = "block";
     else 
         containers[i].style.display = "none";
    })
}
