editQuestionEvent(); 

function editQuestionEvent() {

    const questionEditBtns = document.querySelectorAll('.question i'); 
    const questions = document.querySelectorAll('.question'); 

    questionEditBtns.forEach(function(button, index){
        
        button.addEventListener('click', function(event){
            
            const paragraph = questions[index].children[0]; 
            const input = questions[index].children[1]; 
            const editBtn = questions[index].children[2]; 
            
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

    const i = document.createElement('i'); 
    i.className = "edit-button fa fa-pencil"; 

    div.appendChild(paragraph); 
    div.appendChild(input); 
    div.appendChild(i); 

    return div; 

}

const addQuestionBtns = document.querySelectorAll('.add-question p'); 

// Adds eventlistener to all add-new-question-buttons
addQuestionBtns.forEach(function(button, index){
    
    button.addEventListener('click', function(event){
        const newQuestion = Question(); 
        const editBtn = newQuestion.children[2]; 

        eventHandler(editBtn, 'click', function(){
            const paragraph = newQuestion.children[0]; 
            const input = newQuestion.children[1]; 
            
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