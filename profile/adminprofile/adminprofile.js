const buttons = document.querySelectorAll('.read-more1') //selecting all .readmore1
buttons.forEach(function (button) { //calls all buttons with class .readmore1
    button.addEventListener('click', function (e) { //this will happen when you call all buttons
        e.target.previousSibling.previousSibling.childNodes[5].classList.toggle('hidden')
        e.target.innerHTML = "Spara";
        // once you activate the function "buttons" "e" - the div "hidden" will toggle on and off 
    })
})

let articles = document.querySelectorAll(".editable")
console.log(articles)

function editableContent() {
    for (let i = 0; i < articles.length; i++) {
        (editableContent = true)
        articles[i].contentEditable = "true";
    }
}

let plus = document.getElementById('plus')
plus.addEventListener('click', function () {
    var newPost = document.getElementById('create-post');
    newPost.classList.add('visiblePost')
})

let trash = document.getElementById('removePost')
trash.addEventListener('click', function () {
    var removePost = document.getElementById('create-post');
    removePost.classList.remove('visiblePost')
})

let trashEs = document.querySelectorAll('.fa-trash')

trashEs.forEach(function (trashCan) {
    trashCan.addEventListener('click', function (e) {
        e.target.parentElement.style.display = "none"
        e.target.parentElement.classList.add('.')
        //eller
        // e.target.parentElement.classList.add('klassens-namn')
    })
})

function newPostSave() {
    document.getElementById("saveButton").style.backgroundColor = "#4C9900";
    document.getElementById("saveButton").style.borderColor = "#4C9900";
    document.getElementById("saveButton").innerHTML = "Sparat!";
}