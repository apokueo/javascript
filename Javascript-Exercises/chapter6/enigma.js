function f(o) {
	o.message = "set in f"; 
	o = {
		message: "new object!"
	}; 
	console.log(`inside of f: o.message="${o.message}"`);
}

let o = {
	message: 'initial value' 
};

console.log(`before calling f: o.message="${o.message}"`); 

f(o); 

console.log(`after calling f: o.message="${o.message}"`); 

