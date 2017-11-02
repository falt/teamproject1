const buttons = document.querySelectorAll('.read-more1') //selecting all .readmore1
buttons.forEach( function(button) { //calls all buttons with class .readmore1
    button.addEventListener('click', function(e) { //this will happen when you call all buttons
        e.target.previousSibling.previousSibling.classList.toggle('hidden') // once you activate the function "buttons" "e" - the div
        //div "hidden" will toggle on and off
            
        
    })
})

let articles = document.querySelectorAll(".editable")

function editableContent() {
    for (let i = 0; i < articles.length; i++){
        articles[i].contentEditable = "true"
    }
}

let createPost = document.querySelector('createPost')
    function createPost() {
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
