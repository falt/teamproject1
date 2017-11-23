var fNamesArray = [
    'Julia',
    'Kiera',
    'Donkey',
    'Jedi',
    'Leif',
    'Mario',
    'Miss',
    'Bowser'
];
var lNamesArray = [
    'Knightley',
    'Anderson',
    'Kong',
    'Master',
    'G.W Persson',
    'Peach',
    'Riddick',
    'Roberts'
];

window.onload = function(){

  /*Function call*/
  clearList();

  /*Run 5 times, for each [i], append an option to select list.*/
  for(var i = 0; i < 5; i++) {
    var newOption = document.createElement('option');
    var selectList = document.getElementById('mySelect');
    var rdFName = randomFirstName();
    var rdLName = randomLastName();
    newOption.innerHTML = (rdFName + " " + rdLName);
    selectList.appendChild(newOption);
  }

  /*Function returns a random first name.*/
  function randomFirstName(){
    var randomIndex = Math.floor(Math.random()*fNamesArray.length);
    var valueAtSelIndex = fNamesArray[randomIndex];
    return valueAtSelIndex;
  };

  /*Function returns a random last name.*/
  function randomLastName(){
    var randomIndex = Math.floor(Math.random()*lNamesArray.length);
    var valueAtSelIndex = lNamesArray[randomIndex];
    return valueAtSelIndex;
  };

  /*Clear select list from ALL options*/
  function clearList(){
    if(document.getElementById('mySelect').options.length > 0){
    document.getElementById('mySelect').options.length = 0;
    }
    else{return}
  };
};

document.getElementById('sumbitBtn').addEventListener('click', function(){
  var newDiv = document.createElement('div');
  var selectBox = document.getElementById('mySelect');
  var sumbitToDiv = document.getElementById('submitted-courses');
  var isSelected = selectBox.options[selectBox.selectedIndex];
  var courseName = document.getElementById('course-name');
  var coursePlan = document.getElementById('course-plan');
  var createdCourses = document.getElementById('show');
  createdCourses.classList.remove("hidden");
  newDiv.className = 'block';
  newDiv.innerHTML = "<h3>Kursnamn:</h3>" + "<p>" + courseName.value + "</p>" + "<h3>Lärare:</h3>" + "<p>" + isSelected.value + "</p>" + "<h3>Kursplan:</h3>" + "<p>" + coursePlan.value + "</p>";
  sumbitToDiv.insertAdjacentElement('afterbegin', newDiv);

});
