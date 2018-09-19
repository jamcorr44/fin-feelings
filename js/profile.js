/* profile.js */



// Global Variables
var persons = Object.values(JSON.parse(localStorage.saveData || null) || {});
var emotions = {inspired: "#764394", sad: "#3277b5", happy: "#87b11d", surprised: "#ffcf14", friendly: "#f16729", angry: "#ea2a29", other: "#b0b2b7"};


// Functions
function getName() {
	// Get full name from the url parameters
	url = window.location.href;
	name = url.split('?')[1].substring(5).replace('+', ' ');
	return name;
}

function getInfo(person) { 
	// Retrieve info from local storage based on url parameter
	var name = getName();
    return person.name === name;
}

(function () {
	var person = persons.find(getInfo);
	console.log(person);
	document.getElementById("image").src = person.image;
	document.getElementById("name").innerHTML = person.name;
	document.getElementById("location").innerHTML = person.location;
	document.getElementById("description").innerHTML = person.description;
	document.getElementsByClassName("sonar-wave")[0].style.backgroundColor = emotions[person.emotion];
	console.log(document.getElementsByClassName("sonar-wave")[0].style.backgroundColor);

})();
