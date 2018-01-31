//Function Scope and Hoisting
//



	// what you write

	var x = 3;
	if(x === 3) {
		var x = 2;
		console.log(x);
	}
	console.log(x);


	// how JavaScript interprets it
	
	var x;
	x = 3;
	if(x ===3) {
		x = 2;
		console.log(x);
	}
	console.log(x);


//Variables declared with var employ a mechanism called hoisting. JavaScript scans the entire scope (either a function or the global
// scope), and any variables declared with var are hoisted to the top.  What's important to understand is that only the declaration
// - not the assignment - is hoisted. 


// Function Hoisting
//
		f();				// logs "f"
		function f() {
			console.log('f');
		}


