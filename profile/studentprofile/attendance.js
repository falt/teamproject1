document.getElementById('attendanceButton').addEventListener("click", attendance);



function attendance() {
    let attendanceInput = document.getElementById("attendanceInput").value;
    let textfield = document.getElementById("attendanceInput");
    let approved = document.getElementById("attendanceApproved");
    let button = document.getElementById("attendanceButton")

    if(attendanceInput == "abc123"){
        // let textfield = document.getElementById("attendanceInput");
        // let approved = document.getElementById("attendanceApproved");
        textfield.classList.toggle("attendanceChange");
        approved.classList.toggle("attendanceChange");
        button.classList.toggle("attendanceChange")
        console.log("rätt")
    } else {
        console.log("fel")
    }
}
