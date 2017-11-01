
// COURSE-NAV-BAR
const nav = document.querySelectorAll(".course-type-nav-bar li");
const courseCategoryElem = document.querySelectorAll(".articleClass");

for(let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", (e)=>{

    for(let j = 0; j < nav.length; j++) {
      if(e.target == nav[j]) {

        nav[j].style.background = "white";

        nav[j].style.borderTop = "1px solid white";
        nav[j].style.borderLeft = "1px solid white";
        nav[j].style.borderRight = "1px solid white";

        courseCategoryElem[j].style.display = "flex";
      } else {
        nav[j].style.background = "initial";
        courseCategoryElem[j].style.display = "none";
        nav[j].style.borderTop = "none";
        nav[j].style.borderLeft = "none";
        nav[j].style.borderRight = "none";
      }
    }

  });
}

/* Backbutton */
function goBack() {
  window.history.back()
}


// Submit grade 
const gradeBtns = document.querySelectorAll(".submit-grade");
const gradeContainers = document.querySelectorAll(".assignment");
const editGradeBtns = document.querySelectorAll(".edit-grade");   

// Adds eventlistener to all submit-grade-buttons and toggles between show and hide class
editGradeBtns.forEach((button, index)=> {
  
  button.addEventListener('click',(e)=> {
    
    gradeContainers[index].classList.toggle("done-grade");
    editGradeBtns[index].className = editGradeBtns[index].className == "edit-grade hide" ? editGradeBtns[index].className = "edit-grade show" : editGradeBtns[index].className = " edit-grade hide"; 

  })
}); 

const pendingGrades = document.querySelector(".assignments-pending"); 
const doneGrades = document.querySelector(".assignments-done"); 
const headerDoneGrade = document.querySelector(".assignments-done h2"); 



// Edit submited grade 
gradeBtns.forEach((button, index)=>{
  button.addEventListener('click', (e)=> {

    e.preventDefault(); 

    gradeContainers[index].classList.toggle("done-grade"); 

    editGradeBtns[index].className = editGradeBtns[index].className = "edit-grade show"; 
    
    // Saves the container to add "DONE-GRADE" to 
    const tagetContainer = e.target.parentNode.parentNode.parentNode.nextElementSibling;
    const targetHeading = e.target.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild;
    

    const containerToMove = e.target.parentNode.parentNode;  

    // Adds the targeted elements grandfather (whole container) to target container 
    tagetContainer.prepend(containerToMove); 

    // Prepends the heading so that it sits on top of all grades 
    tagetContainer.prepend(targetHeading); 
    
  }) 
}); 


const assignmentHeaderBtn = document.querySelectorAll(".assignments-header h1"); 
const assignmentSections = document.querySelectorAll(".assignments-section"); 
const arrows = document.querySelectorAll(".assignments-header i"); 

assignmentHeaderBtn.forEach((element, index)=> {
  element.addEventListener('click', (e)=> {

    assignmentSections[index].className == "assignments-section" ? assignmentSections[index].className = "assignments-section colapsed" : assignmentSections[index].className = "assignments-section"; 
    
    arrows[index].className == "fa fa-arrow-right" ? arrows[index].className = "fa fa-arrow-down" : arrows[index].className = "fa fa-arrow-right";


  })

}); 