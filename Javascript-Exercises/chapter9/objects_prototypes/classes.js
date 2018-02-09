function Person(firstname, lastname, age) {
	this.firstname = firstname; 
	this.lastname = lastname; 
	this.age = age; 
	this.getAge = function() {
		return this.age; 
	} 
	this.getFullname = function() { 
		return this.firstname + ' ' + this.lastname; 
	} 
} 

var kemet = new Person('Will', 'Smith', 44); 
var afrakhan = new Person('Fifty', 'Cents', 39); 
var Baba = new Person('Usiku', 'El', 60); 

console.log(kemet.getAge()) 
console.log(Baba.getAge()) 
console.log(afrakhan.getAge()) 


kemet.getFullname = function() { 
	return this.lastname + ', ' + this.firstname; 
} 

console.log(kemet.getFullname()); 
