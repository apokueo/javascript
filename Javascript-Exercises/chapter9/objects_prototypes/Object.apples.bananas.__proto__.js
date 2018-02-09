// Objects 

var apple = { 
	color: 'red'
} 

var banana = {
	color: 'yellow'
} 


myFruit = {}; 

myFruit.__proto__ = apple; 

console.log(myFruit.color) 

myFruit.__proto__ = banana; 

console.log(myFruit.color) 

