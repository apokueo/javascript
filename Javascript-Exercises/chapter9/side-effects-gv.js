// define 3 globals

"strict mode"; 

var global_var = 1; 
global_novar = 2;  // antipattern 
(function () {
	global_fromfunc = 3; // antipattern

	console.log(global_fromfunc); 
}()); 


// attempt to delete 
delete global_var; // false 
delete global_novar; // true
delete global_fromfunc; // true 

// test the deletion 
console.log(typeof global_var); // "number" 
console.log(typeof global_novar); // "number" 
console.log(typeof global_fromfunc); // "number" 
