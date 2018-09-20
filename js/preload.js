/* preload.js */


// Global Variables
var persons = Object.values(JSON.parse(localStorage.saveData || null) || {});
console.log(persons);

// Funcitons
function getInfo(person) { 
	// Retrieve info from local storage based on url parameter
	var name = document.getElementById("username").value;
    return person.name === name;
}


function checkLogin() {
	var person = persons.find(getInfo);
	if (person === undefined) {
		alert("Please Enter Valid Username or Password");
		document.getElementById("username").value = '';
		document.getElementById("password").value = '';
		return false;

	} else {
		localStorage.setItem('user', JSON.stringify(person.name));
		localStorage.setItem('pid', person.pid);
		return true;
	}
}
