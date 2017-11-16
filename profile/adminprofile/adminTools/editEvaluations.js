const editEvalButtons = document.querySelectorAll('.evaluation .edit-button'); 
const editEvalInputFields = document.querySelectorAll('.evaluation input');
const evalPara = document.querySelectorAll('.evaluation p'); 

// Adds eventlistener to all edit-buttons
editEvalButtons.forEach(function(button, index){

    // When clicked, toggles hidden class for paragraph elements and input elements 
    button.addEventListener('click', function(event){
       
        evalPara[index].className = "hidden"; 
        editEvalInputFields[index].className = "edit"; 
        editEvalButtons[index].classList.toggle('hidden'); 

        // Adds eventlistener to input-fields
        // If enter-button is pressed, sets corresponding paragraphs innerHTML to value of input-field
        // And toggles hidden class back 
        editEvalInputFields[index].addEventListener('keydown', function(e){
            if(e.key === "Enter" && e.target.value.length > 0) {
                evalPara[index].innerHTML = e.target.value; 
                evalPara[index].className = ""; 
                editEvalInputFields[index].className = "edit hidden"; 
                editEvalButtons[index].classList.toggle('hidden');                 
            } else {
                // Error message
            }
        })
    })
}); 

const evaluationHeadingBtns = document.querySelectorAll('.evaluation-heading i'); 
const evaluations = document.querySelectorAll('.evaluation'); 

evaluationHeadingBtns.forEach(function(button, index){
    button.addEventListener('click', function(event){
        evaluations[index].classList.toggle('colapsed'); 
        if(evaluationHeadingBtns[index].className == "fa fa-arrow-right") {
            evaluationHeadingBtns[index].className = "fa fa-arrow-down"; 
        } else {
            evaluationHeadingBtns[index].className = "fa fa-arrow-right"; 
        }
    })
})


const questions = document.querySelectorAll('.questions'); 

// Returns markup for a new question 
function Question() {
    return '<div class="question">' + 
                '<p>Klicka för att redigera fråga</p>' +
                '<input class="edit hidden" type="text">' +
                '<i class="edit-button fa fa-pencil" aria-hidden="true"></i>' +							
            '</div>'
}

const addQuestionBtns = document.querySelectorAll('.add-question p'); 

// Adds eventlistener to all add-new-question-buttons
addQuestionBtns.forEach(function(button, index){
    
    button.addEventListener('click', function(event){
        questions[index].innerHTML += Question(); 
    })
})