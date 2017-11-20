
// COURSE-NAV-BAR
const nav = document.querySelectorAll(".course-type-nav-bar li");
const courseCategoryElem = document.querySelectorAll(".articleClass");

for(let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", (e)=>{

    for(let j = 0; j < nav.length; j++) {
      if(e.target == nav[j]) {

        nav[j].style.background = "white";

        nav[j].style.borderTop = "1px solid white";
        nav[j].style.borderLeft = "1px solid white";
        nav[j].style.borderRight = "1px solid white";

        courseCategoryElem[j].style.display = "flex";
      } else {
        nav[j].style.background = "initial";
        courseCategoryElem[j].style.display = "none";
        nav[j].style.borderTop = "none";
        nav[j].style.borderLeft = "none";
        nav[j].style.borderRight = "none";
      }
    }

  });
}

/* Backbutton */
function goBack() {
  window.history.back()
}
/* Generates random password from string.*/
function passwordSampler() {
  var pWord = "";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö0123456789";
  for (var i = 0; i < 7; i++)
    pWord += chars.charAt(Math.floor(Math.random() * chars.length));
  return pWord;
}
/*Function call for password generator, runs at page load.*/
document.getElementById('pWordInput').value = passwordSampler();

/*Autofills username from fname, lname.*/
function userNameSampler() {

  var fNameField = document.getElementById('first-name').value;
  var lNameField = document.getElementById('last-name').value;
  var uNameField = document.getElementById('user-name').value;
  var string = "";
  if(fNameField.length > 0 && lNameField.length > 0) {
    string = fNameField.concat('.' + lNameField);
    var stringLow = string.toLowerCase();
    // console.log(stringLow);
    return stringLow;
  }
  else{return null;}
}

document.getElementById('user-name').addEventListener("click", function(){
  document.getElementById('user-name').value = userNameSampler();

  var uName = document.getElementById('user-name').value;
  var eMail = document.getElementById('e-mail');
  var uTypeSel = document.getElementById('user-type-select');
  var strUserType = uTypeSel.options[uTypeSel.selectedIndex].value;

  if(strUserType == "elev"){
    eMail.value = ((userNameSampler()) + '@student.kyh.se');
  }
  else if(strUserType == "lärare"){
    eMail.value = ((userNameSampler()) + '@teacher.kyh.se');
  }
  else if(strUserType == "admin"){
    eMail.value = ((userNameSampler()) + '@admin.kyh.se');
  }
  else{}
});

document.getElementById('form-complete-Btn').addEventListener("click", function(){
  this.value = "Klart!";
});
