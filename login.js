// Array that holds all users
let allUsers = [];

// Constructor for user object
function User(fname, lname, email, username, password, usertype) {

	this.fname = fname;
	this.lname = lname;
	this.email = email;
	this.username = username;
	this.password = password;
	this.usertype = usertype;

	this.redirectHref = "";

	// Sets redirect-link according to usertype
	switch(usertype.toLowerCase()) {

		case "student":
			this.redirectHref = "profile/studentprofile/studentprofile.html"
			break;

		case "teacher":
			this.redirectHref = "profile/teacherprofile/teacherprofile.html"
			break;

		case "admin":
			this.redirectHref = "profile/adminprofile/adminprofile.html"
			break;

		default:
			break;

	}

}

// Function to add user to all-users array on the User-prototype
User.prototype.addUser = function() {
	allUsers.push(this);
}

// Login function that validates user input, loop trough array of all users
function login(username, password){

	for(let i = 0; i < allUsers.length; i++) {
		if(username == allUsers[i].username && password == allUsers[i].password) {
			window.location = allUsers[i].redirectHref; // Redirects to the corresponding href on the user-property
		} else {
			let element = document.getElementById("faultLogin");
			element.classList.toggle("showFault");
		}
	}
}

// Student user object
let studentUser = new User("Carl", "Andersson", "carl@gmail.com", "student", "student", "student");
studentUser.addUser();

// Teacher user object
let teacherUser = new User("Albin", "Mörner", "albin@gmail.com", "teacher", "teacher", "teacher");
teacherUser.addUser();

// Admin user object
let userTest = new User("Admin", "Andersson", "admin@gmail.com", "admin", "admin", "admin");
userTest.addUser();

// Event listener for login-button
document.getElementById('LoginButton').addEventListener("click", ()=> {
	login(document.getElementById("username").value, document.getElementById("password").value);
});



document.getElementById("expandBtn").onclick = function myFunction() {
    let element = document.getElementById("loginBox");
    element.classList.toggle("showLogin");
}



const businessBtns = document.querySelectorAll(".business .button");

// Smooth scroll for contact buttons
businessBtns.forEach((button, index)=> {
	button.addEventListener("click", ()=> {
		window.scrollTo({ top: "1851", left: 0, behavior: "smooth" });
	});
});

// Smooth scroll for header nav
const menuBtns = document.querySelectorAll("header .menuBtn");
const sections = document.querySelectorAll(".content");

menuBtns.forEach((button,index)=> {
	button.addEventListener("click", ()=> {
		const targetY = sections[index].offsetTop;

		scroll(targetY);

	});
});

// Smoooth scroll function
function scroll(targetY) {
	window.scrollTo({ top: targetY, left: 0, behavior: "smooth" });
}


const logoButton = document.querySelector(".logo");

logoButton.addEventListener("click", ()=> {
	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
