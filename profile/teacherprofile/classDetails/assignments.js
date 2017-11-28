// Submit grade
const gradeBtns = document.querySelectorAll(".submit-grade");
const gradeContainers = document.querySelectorAll(".assignment");
const editGradeBtns = document.querySelectorAll(".edit-grade");

// Adds eventlistener to all submit-grade-buttons and toggles between show and hide class
editGradeBtns.forEach((button, index)=> {

  button.addEventListener('click',(e)=> {

    gradeContainers[index].classList.toggle("done-grade");
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





// Bring in elements from DOM, header-buttons, assignmentssections and 'arrows'
const assignmentHeaderBtn = document.querySelectorAll(".assignments-header h1");
const assignmentSections = document.querySelectorAll(".assignments-section");
const arrows = document.querySelectorAll(".assignments-header i");

// Adds eventlistener to all assignmentheader buttons
assignmentHeaderBtn.forEach((element, index)=> {

  element.addEventListener('click', (e)=> {

    // Toggles class for 'colapse'-feature for the sections and arrows
    if(assignmentSections[index].className == "assignments-section colapsed") {
      assignmentSections[index].className = "assignments-section";
    } else {
      assignmentSections[index].className = "assignments-section colapsed"
    }

    arrows[index].className == "fa fa-arrow-right" ? arrows[index].className = "fa fa-arrow-down" : arrows[index].className = "fa fa-arrow-right";

  })

});

// Create new assignment-form
const createAssignmentForm = document.querySelector(".create-new-assignment");

// Create assignment-button that toggles heigth for form
const createAssignmentBtn = document.querySelector(".create-new-assignment i");

// Eventlistener for create new assignment-form
createAssignmentBtn.addEventListener('click', function(){
  if(createAssignmentForm.style.height != "")
    createAssignmentForm.style.height = "";
  else
    createAssignmentForm.style.height = "70px";
})

// Brings in create-new-assignment-form from DOM
const createNewAssignmentform = document.querySelector("#newAssignmentForm");

// Returns markup for a new assignment and appends it to the assignments-section
function createAssignmentElement(header, description, g, vg) {

  let assignmentSection = document.createElement("div");
  assignmentSection.className = "assignments-section";

  let assignment = '<div class="assignments-header">' +

                      '<h1>' +
                        '<i class="fa fa-arrow-down" aria-hidden="true"></i> ' +
                          header +
                      '</h1>' +

                      '<div class="assignment-description">' +
                        '<p>' + description + '</p>' +

                      '<ul>' +
                        '<p>För betyg G:</p>' +
                        '<li>' + g + '</li>' +
                        '<p>För betyg VG:</p>' +
                        '<li>' + vg + '</li>' +
                      '</ul>' +

                    '</div>' +

                  '</div>';

    assignmentSection.innerHTML = assignment;

    let assignmentsWrapper = document.querySelector(".assignments-wrapper");

    assignmentsWrapper.appendChild(assignmentSection);

    return assignmentSection;

}

// Eventlistener for add-new-assignment-form-button
createNewAssignmentform.createAssignmentBtn.addEventListener('click',function(){

  const assignment = createAssignmentElement(createNewAssignmentform.assignmentName.value, createNewAssignmentform.assignmentDetails.value, createNewAssignmentform.gradeG.value, createNewAssignmentform.gradeVG.value);

  // Saves the assignmnet-header and assignment-arrow-icon
  const assignmentHeader = assignment.firstChild.firstChild;
  const arrow = assignment.firstChild.firstChild.firstChild;

  // Colapses create-assignment form
  createAssignmentForm.style.height = "70px";

  // Adds eventlistener for the newly created assignment and toggles the class (colaps-feature)
  assignmentHeader.addEventListener('click',function(){

    if(assignment.className == "assignments-section" && arrow.className == "fa fa-arrow-down") {
      arrow.className = "fa fa-arrow-right";
      assignment.className = "assignments-section colapsed";
    } else {
      arrow.className = "fa fa-arrow-down";
      assignment.className = "assignments-section";
    }

  })

})
