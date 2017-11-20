editQuestionEvent(); 

function editQuestionEvent() {

    const questionEditBtns = document.querySelectorAll('.question .edit-button'); 
    const removeBtn = document.querySelectorAll('.remove-button')
    const questions = document.querySelectorAll('.question'); 

    removeBtn.forEach((button, index)=> {
         button.addEventListener('click', (e)=>{
             console.log(button.parentNode, index, questions[index].parentNode); 
             const targetContainer = questions[index].parentNode;
             const targetQuestion = button.parentNode; 
             targetContainer.removeChild(targetQuestion); 
         })
    });

    questionEditBtns.forEach(function(button, index){
        
        button.addEventListener('click', function(event){

            console.dir(questions[index]); 
            
            const removeBtn = questions[index].children[0];             
            const paragraph = questions[index].children[1]; 
            const input = questions[index].children[2]; 
            const editBtn = questions[index].children[3];
            
            paragraph.className = "hidden"; 
            input.className = "edit"; 
            editBtn.classList.toggle('hidden');

            input.addEventListener('keypress', function(e){
                if(e.key === "Enter" && e.target.value.length > 0) {
                    paragraph.innerHTML = e.target.value; 
                    paragraph.className = ""; 
                    input.className = "edit hidden"; 
                    editBtn.className = "edit-button fa fa-pencil";                  
                } else {
                    // Error message
                }
            })
        })
    })

}

const evaluationHeadingBtns = document.querySelectorAll('.evaluation-heading'); 
const evaluationArrows = document.querySelectorAll('.evaluation-heading i'); 
const evaluations = document.querySelectorAll('.evaluation'); 

evaluationHeadingBtns.forEach(function(button, index){
    button.addEventListener('click', function(event){
        evaluations[index].classList.toggle('colapsed'); 
        if(evaluationArrows[index].className == "fa fa-arrow-right") {
            evaluationArrows[index].className = "fa fa-arrow-down"; 
        } else {
            evaluationArrows[index].className = "fa fa-arrow-right"; 
        }
    })
})


const questions = document.querySelectorAll('.questions'); 

// Returns markup for a new question 
function Question() {

    const div = document.createElement('div'); 
    div.className = "question"; 

    const paragraph = document.createElement('p'); 
    paragraph.innerHTML = 'Klicka för att redigera fråga'; 

    const input = document.createElement('input'); 
    input.type = "text"; 
    input.className = "edit hidden"; 

    const editBtn = document.createElement('i'); 
    editBtn.className = "edit-button fa fa-pencil"; 

    const removeBtn = document.createElement('i'); 
    removeBtn.className = "remove-button fa fa-trash"; 

    div.appendChild(removeBtn); 
    div.appendChild(paragraph); 
    div.appendChild(input); 
    div.appendChild(editBtn); 

    return div; 

}

const addQuestionBtns = document.querySelectorAll('.add-question p'); 

// Adds eventlistener to all add-new-question-buttons
addQuestionBtns.forEach(function(button, index){
    
    button.addEventListener('click', function(event){
        const newQuestion = Question(); 
        const removeBtn = newQuestion.children[0]; 
        const editBtn = newQuestion.children[3]; 

        removeBtn.addEventListener('click', function(e){
            const targetContainer = e.target.parentNode.parentNode; 
            const targetQuestion = e.target.parentNode; 
            targetContainer.removeChild(targetQuestion); 
        })

        eventHandler(editBtn, 'click', function(){
            const paragraph = newQuestion.children[1]; 
            const input = newQuestion.children[2]; 
            
            paragraph.className = "hidden"; 
            input.className = "edit"; 
            editBtn.classList.toggle('hidden');

            input.addEventListener('keypress', function(e){
                if(e.key === "Enter" && e.target.value.length > 0) {
                    paragraph.innerHTML = e.target.value; 
                    paragraph.className = ""; 
                    input.className = "edit hidden"; 
                    editBtn.className = "edit-button fa fa-pencil";                  
                } else {
                    // Error message
                }
            })
        }); 
        questions[index].appendChild(newQuestion); 
    })
})

const createNewEvalButton = document.querySelector('.create-new-evaluation button'); 
const evalNameInput = document.querySelector('#eval-name'); 
const evalSection = document.querySelector('.existing-evaluations'); 

createNewEvalButton.addEventListener('click', function(e){
    if(evalNameInput.value.length > 0) {
        let newEval = Evaluation(evalNameInput.value); 
        evalSection.appendChild(newEval); 
    } else {
        throw 'error'; 
    }
})

function eventHandler(nodelist, event, callback){
    
    try {
      nodelist.forEach(function(element, index){
        element.addEventListener(event, function(event){
          callback(element); 
        })
      })
    } catch(err) {
      nodelist.addEventListener(event, function(event){
        callback(event.target);
      }); 
    }
  
}

// Create new evaluation (sorry) 
function Evaluation(evaluationName) {

    const evalDiv = document.createElement('div'); 
    evalDiv.className = 'evaluation'; 

    const evalHeading = document.createElement('div'); 
    evalHeading.className = 'evaluation-heading flex-row-center'; 

    const arrow = document.createElement('i'); 
    arrow.className = 'fa fa-arrow-down'; 

    evalHeading.appendChild(arrow);
    evalDiv.appendChild(evalHeading);     

    // Header and eventlistener for expanding and colapsing 
    const header = document.createElement('h3'); 
    header.innerHTML = evaluationName;
    header.addEventListener('click', function(e){
        const targetEvaluation = e.target.parentNode.parentNode; 
        const targetArrow = targetEvaluation.querySelector('i'); 
        targetEvaluation.classList.toggle('colapsed'); 
        
        if(targetArrow.className == "fa fa-arrow-right") {
            targetArrow.className = "fa fa-arrow-down"; 
        } else {
            targetArrow.className = "fa fa-arrow-right"; 
        }
    })
    
    // Appends the header to evalHeading div 
    evalHeading.appendChild(header); 

    // Questions container 
    const questionsDiv = document.createElement('div'); 
    questionsDiv.className = 'questions'; 

    // Question 
    const question = document.createElement('div'); 
    question.className = 'question'; 

    // Remove button and eventlistener for removing question
    const removeBtn = document.createElement('i'); 
    removeBtn.className = 'remove-button fa fa-trash'; 
    removeBtn.addEventListener('click', function(e){ 
        const targetContainer = e.target.parentNode.parentNode;
        const targetQuestion = removeBtn.parentNode; 
        targetContainer.removeChild(targetQuestion); 

    })

    // Question paragraph 
    const questionParagraph = document.createElement('p'); 
    questionParagraph.innerHTML = 'Klicka för att redigera fråga'; 

    // Hidden input field 
    const input = document.createElement('input'); 
    input.className = 'edit hidden'; 
    input.type = 'text'; 

    // Edit button 
    const editBtn = document.createElement('i'); 
    editBtn.className = 'edit-button fa fa-pencil'; 
    editBtn.addEventListener('click', function(e){
        
        const paragraph = e.target.parentNode.children[1]; 
        const input = e.target.parentNode.children[2]; 
        console.log(input, paragraph); 
        
        paragraph.className = "hidden"; 
        input.className = "edit"; 
        editBtn.classList.toggle('hidden');

        input.addEventListener('keypress', function(e){
             if(e.key === "Enter" && e.target.value.length > 0) {
                paragraph.innerHTML = e.target.value; 
                paragraph.className = ""; 
                input.className = "edit hidden"; 
                editBtn.className = "edit-button fa fa-pencil";                  
                 } else {
                     // Error message
                 }
        })
    })


    // Appends elements to 'question' div 
    question.appendChild(removeBtn); 
    question.appendChild(questionParagraph);
    question.appendChild(input);
    question.appendChild(editBtn);

    // Appends question div to questions container 
    questionsDiv.appendChild(question); 

    evalDiv.appendChild(questionsDiv); 

    const addQuestionContainer = document.createElement('div'); 
    addQuestionContainer.className = 'add-question flex-row-center'; 

    // Add question button and eventlistener 
    const addQuestionBtn = document.createElement('p'); 
    addQuestionBtn.innerHTML = 'Lägg till fråga'; 
    addQuestionBtn.addEventListener('click', function(e){
        const newQuestion = Question(); 
        const removeBtn = newQuestion.children[0]; 
        const editBtn = newQuestion.children[3]; 

        removeBtn.addEventListener('click', function(e){
            const targetContainer = e.target.parentNode.parentNode; 
            const targetQuestion = e.target.parentNode; 
            targetContainer.removeChild(targetQuestion); 
        })

        eventHandler(editBtn, 'click', function(){
            const paragraph = newQuestion.children[1]; 
            const input = newQuestion.children[2]; 
            
            paragraph.className = "hidden"; 
            input.className = "edit"; 
            editBtn.classList.toggle('hidden');

            input.addEventListener('keypress', function(e){
                if(e.key === "Enter" && e.target.value.length > 0) {
                    paragraph.innerHTML = e.target.value; 
                    paragraph.className = ""; 
                    input.className = "edit hidden"; 
                    editBtn.className = "edit-button fa fa-pencil";                  
                } else {
                    // Error message
                }
            })
        })
        const targetContainer = e.target.parentNode.parentNode.querySelector('.questions');
        targetContainer.appendChild(newQuestion); 
    })

    addQuestionContainer.appendChild(addQuestionBtn); 

    evalDiv.appendChild(addQuestionContainer); 

    return evalDiv; 

}


