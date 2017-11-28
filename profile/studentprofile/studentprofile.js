
const buttons = document.querySelectorAll('.read-more1')
buttons.forEach( function(button) {
    button.addEventListener('click', function(e) {
        e.target.previousSibling.previousSibling.classList.toggle('hidden')
        e.target.classList.toggle("hide");


    })
})
