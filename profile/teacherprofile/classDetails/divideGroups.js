const dropzone = document.querySelectorAll(".grid"); 
const droppables = document.querySelectorAll(".class-list ul li"); 

let selected; 

dropzone.forEach(function(grid){

    // Allows drop
    grid.ondragover = function(event) {

        return false; 
    }

    grid.ondrop = function(event) {

        event.preventDefault(); 

        const DROP_ZONE = event.target; 

        console.log(event.target.children); 

        console.dir(DROP_ZONE); 

        if(DROP_ZONE.nodeName == "UL") {
            DROP_ZONE.appendChild(selected);
        }
        

    }

})

droppables.forEach(function(droppable, index){
    droppable.addEventListener('mousedown', function(event) {
       
        selected = event.target;
        
        console.log(selected); 
    })
})

let classList = document.querySelectorAll(".class-list ul li");
let divideGroupsBtn = document.querySelector("#divide-groups-btn"); 
const assignmentName = document.querySelector(".assignment-header h1"); 
const assignmentNameInput = document.querySelector("#assignment-name"); 
const amountOfGroups = document.querySelector("#amount-of-groups"); 

divideGroupsBtn.addEventListener('click', function(event){
    addGroupsToDOM(); 

    console.log(amountOfGroups[amountOfGroups.options.selectedIndex].innerHTML); 

    divideGroupsBtn.innerHTML = "Slumpa grupper igen";
    document.querySelector(".class-list").style.display = "none"; 

    document.querySelector(".container").className = "container"; 
    assignmentName.innerHTML = assignmentNameInput.value; 
    
    dropzone.forEach(function(grid, index){
        grid.className = 'grid';
        document.querySelectorAll(".grid h2")[index].innerHTML = `Grupp ${(index + 1)}`;      
    })
}); 

// Creates array that holds arrays for groups 
function createArray(noOfGroups) {

    let arrayHolder = []; 

    for(let i = 0; i < noOfGroups; i++) {

        arrayHolder.push(new Array()); 

    }

    return arrayHolder; 
}


// Adds students to array that holds groups
function divideGroups(names) {

    // Sets amount of groups to 5 // PARAMETER GLOBAL VARIABLE, change at later stage
    let groupHolder = createArray(amountOfGroups[amountOfGroups.options.selectedIndex].innerHTML); 

    //console.log(groupHolder); 

    let arrayCounter = 0;

    for(let i = 0; i < names.length; i++) {

        //console.log(arrayCounter);         

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

// Adds lis with students to DOM
function addGroupsToDOM(){

    // Global variable
    classList = shuffle(classList);

    let Lis = divideGroups(classList); 

    // console.log(Lis); 

    for(let i = 0; i < Lis.length; i++) {

        for(let j = 0; j < Lis[i].length; j++) {
            //console.log(Lis[i][j]);

            groups[i].appendChild(Lis[i][j]); 
        }

    }

}


// Shuffles classlist 
function shuffle(list) {

    let temp; 

    // console.log(list.length); 

    for(let i = 0; i < list.length; i++) {
        let rand = Math.floor(Math.random() * i);
        
        temp = list[rand].innerHTML;
        list[rand].innerHTML = list[i].innerHTML; 
        list[i].innerHTML = temp; 
        
    }

    return list; 

}

