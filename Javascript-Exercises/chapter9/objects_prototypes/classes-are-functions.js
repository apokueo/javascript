// ES5 syntax for what is now considered a class in ES6 

function Car(make, model) {
	this.make = make; 
	this.model = model; 
	this._userGears = ['P', 'N', 'R', 'D']; 
	this._userGear = this.userGears[0]; 
} 


class Car2 { 
	constructor(maker, modeler) { 
		
		this.maker = maker; 
		this.modeler = modeler; 

	} 
