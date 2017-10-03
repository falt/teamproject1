var admin1 = {"name":"John", "age":"31", "city":"Malmo","email":"John@gmail.com", "username":"admin", "password":"admin", "usertype":"admin"};
var teacher1 = {"name":"Fredrik", "age":"26", "city":"Stockholm", "email":"Fredrik@gmail.com", "username":"teacher", "password":"teacher", "usertype":"teacher"};
var student1 = {"name":"Carl", "age":"29", "city":"Gothenburg", "email":"Carl@gmail.com", "username":"student", "password":"student", "usertype":"student"};
var userJSON = JSON.stringify(admin1);

console.log("Hej");

//document.write('John has age ' + admin1.age);

//lite metadata
/*Lägg in if-satser som checkar användarnamn och lösenord mot arrayerna. Sedan skickar vi användaren till adressen som skickar till 
den separata sidan för admin/student/lärare
*/

var received;

document.getElementById('first').addEventListener("click", ImageSelector);
document.getElementById('second').addEventListener("click", ImageSelector);
document.getElementById('third').addEventListener("click", ImageSelector);

function ImageSelector(){

	var imgId=this.id;
	var type;
	//console.log(imgId);

	if(imgId=='first'){
		console.log("first")
		type= 1;
		received= LoginType(type);
	}
	else if(imgId=='second'){
		console.log("second")
		type=2;
		received= LoginType(type);
	}
	else if(imgId=='third'){
		console.log("third")
		type=3;
		received= LoginType(type);
		
	}

//vi valde en inloggningtyp och nu vill vi se till att matcha inloggningsuppgifterna med databasen

}

function LoginType(userType){
	
	if(userType==1){
		console.log("usertype is student");
		var uname= student1.usertype;
		return uname;
	}
	else if(userType==2){
		console.log("usertype is teacher");
		var uname= teacher1.usertype;
		return uname;
	}
	else if(userType==3){
		console.log("usertype is admin");
		var uname= admin1.usertype;
		return uname;
	}
}

document.getElementById("anvnamn").value;
document.getElementById("lösenord").value;
document.getElementById("submitLogin").addEventListener("click", Credentials);

function Credentials(){
	var username= document.getElementById("anvnamn").value;
	var password= document.getElementById("lösenord").value;

	if(username==student1.username&&password==student1.password){
		if(received=="student"){
			alert("Welcome, " +student1.name + ", " + student1.age);
		}
		else{
			console.log("Script failure.");
		}
	}

	else if(username==teacher1.username&&password==teacher1.password){
		if(received=="teacher"){
			alert("Welcome, " +teacher1.name + ", " + teacher1.age);
		}
		else{
			console.log("Script failure.");
		}
	}

	else if(username==admin1.username&&password==admin1.password){
		if(received=="admin"){
			alert("Welcome, " +admin1.name + ", " + admin1.age);
		}
		else{
			console.log("Script failure.");
		}
	}
	else{
		console.log("Script failure.");
		document.getElementById("anvnamn").value="";
		document.getElementById("lösenord").value="";
	}
}

function redirectToSite(){

}