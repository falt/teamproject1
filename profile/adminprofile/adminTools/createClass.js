//creating class
let className = document.getElementById("className");
let city = document.getElementById("city");
let adminName = document.getElementById("adminName");


//creating student
let studentName = document.getElementById("studentName");
let tel = document.getElementById("tel");
let email = document.getElementById("email");

//buttons
let classBtn = document.getElementById("classBtn");
let studentBtn = document.getElementById("studentBtn");


function createClass(className, city, adminName) {
    this.name = className;
    this.city = city;
    this.admin = adminName;
    this.students = [];
}

function createStudent(studentName, tel, email) {
    this.name = studentName;
    this.tel = tel;
    this.email = email;
}
function createStudentCard(studentName, tel, email) {
    const div = document.createElement("div")
    div.className = "newStudent";

    const h2 = document.createElement("h2");
    h2.className = "studentName";
    h2.innerHTML = "andreas"
    const pEmail = document.createElement("p");
    pEmail.className = "email";
    pEmail.innerHTML = "falt.andreas@gmail.com";
    const pTele = document.createElement("p");
    pTele.className = "tele";
    pTele.innerHTML = "0707";

    div.appendChild(h2);
    div.appendChild(pEmail);
    div.appendChild(pTele);
    console.log(div);
}

let c;
classBtn.addEventListener('click', function () {
    c = new createClass(className.value, city.value, adminName.value);
    document.getElementById('classNameH1').innerHTML = className.value;

});

studentBtn.addEventListener('click', function () {
    let s = new createStudent(studentName.value, tel.value, email.value);
    c.students.push(s);
    console.log(s);
    console.log(c);
});
