// index.js 


// Global Variables
var saveData = JSON.parse(localStorage.saveData || null) || {};
var persons = Object.values(saveData);



// Functions

(function () {
	// Sort array most recent to least recent
	persons.sort(function(a, b){
	    var keyA = new Date(a.timeStamp), keyB = new Date(b.timeStamp);
	    return keyB - keyA;
	});
})();

(function () {
	// Create Profile Elements Dynamically
	for (var i in persons) {
		var person = persons[i];
		$('#profiles').append('<div class="profile"><a href=profile.html><button class="bubble hvr-grow bubble-' + person.emotion + '" id="' + person.name + '" style="background-image: url(' + person.image + ')"></button></a><span>' + person.name + '</span></div>');
	}
})();

