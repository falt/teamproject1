let cardButtons = document.getElementsByClassName("card-button"); 
let cardContainers = document.getElementsByClassName("card-container");
let arrows = document.getElementsByClassName("arrow");  

for(let i = 0; i < cardButtons.length; i++) {
    cardButtons[i].addEventListener("click", function(){
        if(cardContainers[i].style.height != "400px") {
            cardContainers[i].style.height = "400px";
            arrows[i].className = "arrow fa fa-sort-asc"; 
            arrows[i].style.top = "5px"
         
        } else {
            cardContainers[i].style.height = "40px"; 
            arrows[i].className = "arrow fa fa-sort-desc";
         	arrows[i].style.top = "-5px"   

        }
    });
}

	