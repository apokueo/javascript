// Closure - Closing the scope around the function. Example:

	let globalFunc;			// undefined global function
	{
		let blockVar = 'a';	// block - scoped variable
		globalFunc = function() {
			console.log(blockVar);

		}

	}
	globalFunc();			// logs "a"

// globalFunc is assigned a value within a block: that block ( and its parent scope, the
// global scope) form a closure.  No matter where you call globalFunc from, it will have access
// to the identifiers in that closure.
//
//  A closure is the combination of a function and the lexical environment within which that function was declared. This environment
//  consists of any local variables that were in-scope at the time the closure was created. 
//

	function init() {
		var name = 'Mozilla';	//name is a local variable created by init
		function displayName() { // displayName() is the inner function, a closure
			alert(name); // use variable declared in the parent function
		}
		displayName();
	
	}
	init();



	

	function makeFunc() {
		var name = "Bobby Hemmit";
		function displayName() {
			alert(name);
		}
		return displayName;
	}


	var myFunc = makeFunc();
	myFunc();
