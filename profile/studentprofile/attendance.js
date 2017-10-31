//Attendance function, hiding/ showing elements and checking value for attendacne

document.getElementById('attendanceButton').addEventListener("click",function(e){
    e.preventDefault()
    attendance()
} );



function attendance() {
    let attendanceInput = document.getElementById("attendanceInput").value;
    let textfield = document.getElementById("attendanceInput");
    let approved = document.getElementById("attendanceApproved");
    let button = document.getElementById("attendanceButton")

    if(attendanceInput == "abc123"){
        textfield.classList.toggle("hide");
        approved.classList.toggle("hide");
        button.classList.toggle("hide")
        console.log("rätt")
    } else {
        console.log("fel")
        textfield.value = "skriv in rätt kod";
    }
}

//send button function
document.getElementById('sendButton').addEventListener("click",function(e){
    e.preventDefault()
    send()
} );

function send(){
    let button = document.getElementById("sendButton");
    let approved = document.getElementById("sendWeekly");
    button.classList.toggle("hide");
    approved.classList.toggle("hide");
}



