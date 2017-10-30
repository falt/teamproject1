// function changeStyle(e) {
//     e.preventDefault();
//     var status = 1;
//     var button = document.getElementById("text");
    
//     if(status==1) {
//         button.style.color = 'green';
//         console.log("Skickat!")
//     }
    
//     else {
//         button.style.color = 'red';
//         console.log("Fyll i alla fält.")
//     }

const buttons = document.querySelectorAll('.read-more1')
buttons.forEach( function(button) {
    button.addEventListener('click', function(e) {
        e.target.previousSibling.previousSibling.classList.toggle('hidden')
            
        
    })
})

