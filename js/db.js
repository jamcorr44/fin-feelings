var person1 = {pid: 0, name: "Jamie Corr", location: "Los Angeles", emotion: "happy", description: "", timeStamp: "2019-09-21T12:57:27+00:00", image: "images/girl0.jpeg"};
var person2 = {pid: 1, name: "Paul Pham", location: "Los Angeles", emotion: "surprised", description: "", timeStamp: "2019-09-20T11:57:27+00:00", image: "images/p1.jpeg"};
var person3 = {pid: 2, name: "Brynna Conway", location: "Chicago", emotion: "sad", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/p3.jpeg"};
var person4 = {pid: 3, name: "Christian Galang", location: "Houston", emotion: "angry", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/p2.jpeg"};
var person5 = {pid: 4, name: "Emma Fass", location: "DC", emotion: "other", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "http://kb4images.com/images/picture-girl/38191181-picture-girl.jpg"};
var person6 = {pid: 5, name: "Jewell Finder", location: "Houston", emotion: "friendly", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/p5.jpeg"};
var person7 = {pid: 6, name: "Katie Schermerhorn", location: "Chicago", emotion: "inspired", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/p6.jpeg"};
var person8 = {pid: 7, name: "Kendra Anderson", location: "Dallas", emotion: "happy", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/p7.jpeg"};
var person9 = {pid: 8, name: "Madison Wheeler", location: "New York", emotion: "happy", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/girl5.jpeg"};
var person10 = {pid: 9, name: "Marc Oelkers", location: "New York", emotion: "happy", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/p4.jpeg"};
var person11 = {pid: 10, name: "Ryan Ding", location: "Dallas", emotion: "happy", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/boy5.jpeg"};
var person12 = {pid: 11, name: "Sarah Drumm", location: "Chicago", emotion: "happy", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/girl4.jpeg"};
var person13 = {pid: 12, name: "Trevor Dixon", location: "Dallas", emotion: "happy", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/boy3.jpeg"};
var person14 = {pid: 13, name: "Alex Deany", location: "San Francisco", emotion: "happy", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/girl3.jpeg"};
var person15 = {pid: 14, name: "Joey Schutz", location: "San Francisco", emotion: "happy", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/boy4.jpeg"};
var person16 = {pid: 15, name: "Mitch Hussey", location: "New York", emotion: "happy", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/boy2.jpeg"};
var person17 = {pid: 16, name: "Rachel Hale", location: "Seattle", emotion: "happy", description: "", timeStamp: "2017-09-19T11:57:27+00:00", image: "images/girl1.jpg"};
var person18 = {pid: 17, name: "Tyler Wessels", location: "Chicago", emotion: "happy", description: "", timeStamp: "2019-09-19T11:57:27+00:00", image: "images/boy1.jpeg"};
var person19 = {pid: 18, name: "Maryam Hedayati", location: "New York", emotion: "happy", description: "", timeStamp: "2018-09-19T11:57:27+00:00", image: "images/girl2.jpeg"};




var people = {person1, person2, person3, person4, person5, person6, person7, person8, person9, person10, person11, person12, person13, person14, person15, person16, person17, person18, person19};

(function () {
	localStorage.saveData = JSON.stringify(people);
})();