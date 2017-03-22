// File: app.js 
// Author: Tamara Howell
// Site: http://comp1073-a3.azurewebsites.net/
// Description: Contains JavaScript for Project 3

/* javascript lives here */
"use strict";

// IIFE - Immediately Invoked Function Expression

(function () { // Beginning of the IIFE
//console.log("App Started...");
  console.info(`Page Title: ${document.title}`); // string interpolation

//Begin switch case
//----------------------------------------------Home
  switch (document.title) {
    case "Home":

let data = {};

//Connect to get the things
let XMLConnect = new XMLHttpRequest();

//Retrieve the document
XMLConnect.open("GET", "../content.json", true);

//Send request
XMLConnect.send(null);

   // Check the ready state of server (until it's 4)
    XMLConnect.onreadystatechange = function() {
      if((this.readyState === 4) && (this.status === 200)) {
        // read the data
		//console.log(this.readyState);
		data = JSON.parse(this.responseText);
	  }
	};
//Check that everything is loaded
XMLConnect.addEventListener("load", function () {

//reference an html element
let aboutMe = document.getElementById("aboutMe");
//create variable that contains content
let aboutContent = data.myContent[0].paragraph;
//Assign the variable with content to the reference
aboutMe.textContent = aboutContent;


// About Me Heading
let aboutHeading = document.getElementById("aboutHeading");

let headerContent = data.myContent[0].heading;

aboutHeading.innerHTML = headerContent;

		 }
)

    break;
//-----------------------------------------------------------Projects
    case "Projects":
let projectData = {};
//Connect to get the things
let XMLConnect2 = new XMLHttpRequest();

//Retrieve the document
XMLConnect2.open("GET", "../content.json", true);

//Send request
XMLConnect2.send(null);

   // Check the ready state of server (until it's 4)
    XMLConnect2.onreadystatechange = function() {
      if((this.readyState === 4) && (this.status === 200)) {
        // read the data
		//console.log(this.readyState);
		projectData = JSON.parse(this.responseText);
	  }
	};
//Check that everything is loaded
XMLConnect2.addEventListener("load", function () {
//Page heading

let projectsHeading = document.getElementById("projectsHeading");

let projectHeadingContent = projectData.myContent[1].heading;

projectsHeading.textContent = projectHeadingContent;

//First project heading

let firstHeading = document.getElementById("firstProjectHeading");

let firstHeadingContent = projectData.myContent[1].heading2;

firstHeading.textContent = firstHeadingContent;

//First project info

let firstInfo = document.getElementById("firstProjectInfo");

let firstInfoContent = projectData.myContent[1].paragraph;

firstInfo.textContent = firstInfoContent;

//Second project heading

let secondHeading = document.getElementById("secondProjectHeading");

let secondHeadingContent = projectData.myContent[1].heading3;

secondHeading.textContent = secondHeadingContent;

//Second project info

let secondInfo = document.getElementById("secondProjectInfo");

let secondInfoContent = projectData.myContent[1].paragraph2;

secondInfo.textContent = secondInfoContent;

//Third project heading

let thirdHeading = document.getElementById("thirdProjectHeading");

let thirdHeadingContent = projectData.myContent[1].heading4;

thirdHeading.textContent = thirdHeadingContent;

//Third project info

let thirdInfo = document.getElementById("thirdProjectInfo");

let thirdInfoContent = projectData.myContent[1].paragraph3;
			
thirdInfo.textContent = thirdInfoContent;

}
)
	break;
//-----------------------------------------------------------Contact
	case "Contact":

let contactData = {};
//Connect to get the things
let XMLConnect3 = new XMLHttpRequest();

//Retrieve the document
XMLConnect3.open("GET", "../content.json", true);

//Send request
XMLConnect3.send(null);

   // Check the ready state of server (until it's 4)
    XMLConnect3.onreadystatechange = function() {
      if((this.readyState === 4) && (this.status === 200)) {
        // read the data
		//console.log(this.readyState);
		contactData = JSON.parse(this.responseText);
	  }
	};
//Check that everything is loaded
XMLConnect3.addEventListener("load", function () {
// Form Main Heading

let contactHeading = document.getElementById("contactHeading");

let contactHeadingContent = contactData.myContent[2].heading;

contactHeading.textContent = contactHeadingContent;

//------------------  Form h3's  ------------------------------

//Contact Name

let contactName = document.getElementById("name");

let nameHeading = contactData.myContent[2].heading2;

contactName.textContent = nameHeading;

//Contact Email

let contactEmail = document.getElementById("email");

let emailContent = contactData.myContent[2].heading3;

contactEmail.textContent = emailContent;

//Contact Message

let contactMessage = document.getElementById("message");

let messageContent = contactData.myContent[2].paragraph;

contactMessage.textContent = messageContent;

//Submit user inputs (From Assignment 2)

let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userMessage = document.getElementById("userMessage");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event) {
	event.preventDefault();

	console.log(userName.value);
	console.log(userEmail.value);
	console.log(userMessage.value);

}); 

}
)
break;

  }

})(); // end of the IIFE


