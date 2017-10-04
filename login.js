// var admin = {"name":"John", "age":"34", "city":"Malmo","email":"John@gmail.com", "uname":"admin", "password":"admin", "usertype":"admin"};
// var teacher = {"name":"Fredrik", "age":"28", "city":"Stockholm", "email":"Fredrik@gmail.com", "uname":"teacher", "password":"teacher", "usertype":"teacher"};
var student = {"name":"Carl", "age":"19", "city":"Gothenburg", "email":"Carl@gmail.com", "uname":"student", "password":"student", "usertype":"student"};

document.getElementById('studentLoginButtonID').addEventListener("click", LoginStudent);
// document.getElementById('teacherLoginButtonID').addEventListener("click", LoginTeacher);
// document.getElementById('adminLoginButtonID').addEventListener("click", LoginAdmin);

var loginusername;
var loginpassword;

function LoginStudent(){
	loginusername = document.getElementById("username").value;
	loginpassword = document.getElementById("password").value;

	if(loginusername == student.uname && loginpassword == student.password){
			alert("Welcome, " + student.name);
			window.location="profile/studentprofile.html";
		}
	else{
			alert("Skriv in rätt användarnamn/lösenord");
		}
	}
// // function LoginTeacher(){
// 	username = document.getElementById("teacherInputUnameID").value;
// 	password = document.getElementById("teacherInputPwordID").value;
//
// 	if(username == teacher.uname && password == teacher.password){
// 			alert("Welcome, " + teacher.name);
// 			//window.location="teacherprofile.html";
// 		}
// 	else{
// 			alert("Skriv in rätt användarnamn/lösenord");
// 		}
// 	}
//
// function LoginAdmin(){
// 	username = document.getElementById("adminInputUnameID").value;
// 	password = document.getElementById("adminInputPwordID").value;
//
// 	if(username == admin.uname && password == admin.password){
// 			alert("Welcome, " + admin.name);
// 			//window.location="adminprofile.html";
// 		}
// 	else{
// 			alert("Skriv in rätt användarnamn/lösenord");
//
// 		}
// 	}
