/**
 * swatchnobs.js
 */



// Global Variables
var persons = Object.values(JSON.parse(localStorage.saveData || null) || {});
var pid= localStorage.pid;
var emotion;
console.log(pid);

// Functions
function setEmotion(id) {
	emotion = id;
}

function update() {
	var description = document.getElementById("exampleFormControlTextarea1").value;
	if (emotion !== undefined) {
		var timeStamp = new Date();

		persons[pid].emotion=emotion;
		persons[pid].description=description;
		persons[pid].timeStamp=timeStamp;

		console.log(persons[pid].timeStamp);
		localStorage.saveData = JSON.stringify(persons);
		localStorage.setItem('saveData', JSON.stringify(persons));	

		return true;

	} else {
		alert("Please Select an Emotion Above.");
		return false;
	}
}


