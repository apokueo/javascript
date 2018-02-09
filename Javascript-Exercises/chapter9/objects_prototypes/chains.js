var personA = {
	name: 'Ifa', age: 29
};

console.log(personA.name); // logs 'Ifa' 

var personB = Object.create(personA); 

console.log(personB.name = 'Ori'); 
personB.age; 
personB.gender; 
personB.hasOwnProperty(); // function sought for and only found in Object and returns function() {..}; 

// Classes/Prototype Inheritance 

var myClass = function(name, age) {
	this.name = name; 
	this.age = age; 
}; 

var instance1 = new myClass("Ptah", 30); 
var instance2 = new myClass("Amon", 40); 

console.log(instance1, instance2); 
