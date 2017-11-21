// DOM Elements
let classList = document.querySelectorAll(".class-list ul li");
let divideGroupsBtn = document.querySelector("#divide-groups-btn"); 
const assignmentName = document.querySelector(".assignment-header h1"); 
const assignmentNameInput = document.querySelector("#assignment-name"); 
const amountOfGroups = document.querySelector("#amount-of-groups"); 

// Eventlistener for dividegroups-button 
divideGroupsBtn.addEventListener('click', function(event){
    
    addGroupsToDOM(); 

    divideGroupsBtn.innerHTML = "Slumpa grupper igen";
    document.querySelector(".class-list").style.display = "none"; 

    document.querySelector(".container").className = "container"; 
    assignmentName.innerHTML = assignmentNameInput.value; 

}); 

// Creates array that holds arrays for groups 
function createArray(noOfGroups) {

    // Checks if input is NaN and that each group has at least two students 
    if(isNaN(noOfGroups)) {
        amountOfGroups.value = "Ange ett nummer"; 
        throw "error: 'Not a number'"; 
    } else if (noOfGroups > (classList.length / 2)) {
        amountOfGroups.value = "Antal grupper måste vara större än antal elever / 2.";
        throw "error: 'Too many groups'"; 
    } else {

        let arrayHolder = []; 

        for(let i = 0; i < noOfGroups; i++) {

            arrayHolder.push(new Array()); 

        }

        return arrayHolder; 
    }
}


// Adds students to array that holds groups
function divideGroups(names) {

    // Creates array that holds X amount of arrays for groups 
    let groupHolder = createArray(amountOfGroups.value); 

    let arrayCounter = 0;

    // Divides into groups 
    for(let i = 0; i < names.length; i++) {

        if(i % 2 === 0) {
            if(arrayCounter > groupHolder.length - 1){
                arrayCounter = 0; 
            }

            groupHolder[arrayCounter].push(names[i]);
            arrayCounter++; 

        } else {
            
            if(arrayCounter > groupHolder.length - 1){
                arrayCounter = 0; 
            }

            groupHolder[arrayCounter].push(names[i]);
            arrayCounter++;         
        }

    }

    return groupHolder; 

}


let groups = document.querySelectorAll(".grid ul"); 

// Adds li's with students to DOM
function addGroupsToDOM(){

    // Throws error if no input value
    if(!amountOfGroups.value) {
        throw "error: 'Empty input field."; 
    }

    // Displays helper-message paragraph when clicked 
    document.querySelector(".divide-groups-info-container p").className = ""; 

    // Clears the assignmnets group-section
    document.querySelector(".assignment-groups").innerHTML = ""; 

    // Global variable
    classList = shuffle(classList);

    // Creates X amount of groups 
    let Lis = divideGroups(classList); 

    // Loops through group array and creates container elements for them
    for(let i = 0; i < Lis.length; i++) {

        let grid = document.createElement("div"); 
        grid.className = "grid"; 

        let groupHeading = document.createElement("h2"); 
        groupHeading.innerHTML = "Grupp " + (i + 1); 

        let groupUl = document.createElement("ul"); 

        grid.appendChild(groupHeading); 
        grid.appendChild(groupUl); 

        document.querySelector(".assignment-groups").appendChild(grid); 
        
        // APPENDS ELEMENTS TO DOM
        for(let j = 0; j < Lis[i].length; j++) {
            groupUl.appendChild(Lis[i][j]); 
        }

    }

    // Activates drag and drop function 
    let dragNdrop = dragAndDropHandler();
    dragNdrop(); 

}


// Returns shuffled classlist array
function shuffle(list) {

    let temp; 

    for(let i = 0; i < list.length; i++) {
        let rand = Math.floor(Math.random() * i);
        
        temp = list[rand].innerHTML;
        list[rand].innerHTML = list[i].innerHTML; 
        list[i].innerHTML = temp; 
        
    }

    return list; 

}

// Returns function that activates drag and drop-functionality
function dragAndDropHandler() {

    return function() {

        // Drop zone and dropable elements
        const dropzone = document.querySelectorAll(".grid"); 
        const droppables = document.querySelectorAll(".grid ul li"); 

        // Selected element to drag / drop initialized as empty 
        let selected; 
        
        // Applies drag and drop-functionality on all elements with 'grid'-class
        dropzone.forEach(function(grid){

            // Allows drop
            grid.ondragover = function(event) {

                return false; 
            }

            // Appends the dropped element to the target if target == UL-element
            grid.ondrop = function(event) {

                event.preventDefault(); 

                const DROP_ZONE = event.target; 

                if(DROP_ZONE.nodeName == "UL") {
                    DROP_ZONE.appendChild(selected);
                }
            }

        })

        // Applies eventlistener for for all dropabble elements and listens for mousedown-event
        droppables.forEach(function(droppable, index){
            droppable.addEventListener('mousedown', function(event) {
                
                // Assigns the drop-target to selected-variable
                selected = event.target;
                
            })
        })
    }
}