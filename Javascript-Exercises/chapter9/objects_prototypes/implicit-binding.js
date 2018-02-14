function discern() {
    console.log( this.a ) 
}

var obj = {
    a: 2, 
    discern: discern 
}; 

obj.discern() 

function evocation() {
	console.log(this.spirit)
}  

let ether = {
	art: evocation, 
	spirit: function() {
		console.log('King Paiymon') 
	} 

evoking = ether.evocation() 
