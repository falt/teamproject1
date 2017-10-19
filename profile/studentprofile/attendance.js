document.getElementById('attendanceButton').addEventListener("click",function(e){
    e.preventDefault()
    attendance()}
);

function attendance() {
    let attendanceInput = document.getElementById("attendanceInput").value;
    let textfield = document.getElementById("attendanceInput");
    let approved = document.getElementById("attendanceApproved");
    let button = document.getElementById("attendanceButton")

    if(attendanceInput == "abc123"){
        textfield.classList.toggle("attendanceChange");
        approved.classList.toggle("attendanceChange");
        button.classList.toggle("attendanceChange");
        console.log("rätt")
    } else {
        console.log("fel")
    }
}
