let cardButtons = document.getElementsByClassName("card-button");
let cardContainers = document.getElementsByClassName("card-container");
let arrows = document.getElementsByClassName("arrow");

for (let i = 0; i < cardButtons.length; i++) {
    cardButtons[i].addEventListener("click", function () {
        if (cardContainers[i].style.height != "300px") {
            cardContainers[i].style.height = "300px";
            arrows[i].className = "arrow fa fa-sort-asc";
        } else {
            cardContainers[i].style.height = "40px";
            arrows[i].className = "arrow fa fa-sort-desc";
        }
    });
}
