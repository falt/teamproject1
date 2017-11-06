const buttons = document.querySelectorAll('.read-more1') //selecting all .readmore1
buttons.forEach( function(button) { //calls all buttons with class .readmore1
    button.addEventListener('click', function(e) { //this will happen when you call all buttons
        e.target.previousSibling.previousSibling.classList.toggle('hidden') // once you activate the function "buttons" "e" - the div
        //div "hidden" will toggle on and off
            
        
    })
})

let articles = document.querySelectorAll(".editable")
console.log(articles)

function editableContent() {
    for (let i = 0; i < articles.length; i++){
            if (editableContent = true) {
                (articles[i].contentEditable = "true")
            } else {
                document.getElementById('fa fa-trash')
            }     
        }
    }

 function createPost() {
    var newPost = document.getElementById('create-post');
        if (newPost.style.display === "none") {
            newPost.style.display = "block";
        } else {
            newPost.style.display = "none";
        }
    }

    