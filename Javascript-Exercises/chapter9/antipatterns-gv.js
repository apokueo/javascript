// antipattern
function foo() {
	var a = b = 7;
	console.log(a); 
	console.log(b); 
} 

foo(); 

function exploits() {
	var a = (b = 7);
	console.log(a); 
	console.log(b); 
} 

exploits(); 
