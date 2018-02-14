function evocation() { 
	console.log(this.spirit); 
} 

var obj = { 
	art: evocation, 
	spirit: function() {
		console.log('King Paiymon') 
	}, 
} 

let ether = obj.spirit

let bindFunc = ether.bind(evocation)

bindFunc(); 

