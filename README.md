<p align="center">
  <a href="">
    <img src="https://lh3.googleusercontent.com/oFlHrHIHr3IT0KgbFVmNjCsI7PDzdm6YQj9WhXpaPiM7elyTXpHlNDLklr5RElpG3gM=h310" alt="" width=100 height=100>
  </a>

  <h3 align="center">Teamproject1 Lions</h3>

  <p align="center">
    Ett responsivt LMS för YH-skolor <br>
  <a href="https://trello.com/b/nOapM9nK/projektarbete">Trello</a>


  </p>
</p>

<br>


### Filestructure
```
teamproject1/					
  ├── index.html				
  ├── style.css				
  ├── login.js				
  ├── README.md				
  ├── img/			
  │	├── icon/		
  ├── font-awesome/			
  ├── profile/			
  	├── adminprofile/		
	│	├── adminTools/	
	├── studentprofile/
	│	├── myCourses/
	├── teacherprofile/		
		├── classDetails/
		├── myClasses/
```
# Walktrough

## First/Landing page
First page describes the service, shows information about the pricing and contact information.
Clients can sign in via the sign in box in top right corner.
### Technical

Login
* The login function have three hardcoded users, Student, Teacher and Admin
* The password is same as the username
* New users can be configured trough the login.js file

Smooth scroll
* The links on the navbar are linked to corresponding sections of the page whit a smooth scroll function

### Visual
* Background: #FFF
* Accent color: #5295DD
* Secondary accent color: F7F7F7
* Section border color: #D3D3D3
* Border radius general: 5px;
* Border radius pricing: 15px;


## Logged in
After logging in the user is greeted by corresponding profilepage depending if they are Student, Teacher or Admin they have a little difrent layout and functions.

### Technical

General: 

Tabs 
* Tabs used in course details (student), admin tools (admin) and class details (teacher) are controlled by the script.js-file. 
Each user tab-styling are divided into separate css stylesheets. 
```
Student:

Firstpage 
Report attendance module. 
* Student user can register attendance via an input field. Attendane code is generated from the teacher script-file. 

Daily mood rate section. 
* Student can rate their current mood and see a graph (provided from graph.js-library) over all students mood from that day. 

Weekly course rate section. 
* Students can rate the course in a weekly evaluation. 
```




### Visual
* Background on dashboard cards: #FFF
* Background BEHIND dashbord cards: #F2F2F2
* Border-color: #F2F2F2 
* Nav border color: #D6D6D6
* Orange color for buttons etc: #DD6925;
* Border radius: 5px;

