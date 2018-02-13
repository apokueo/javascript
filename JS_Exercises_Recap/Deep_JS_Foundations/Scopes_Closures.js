//Scopes, Closures
//	Nested Scope
//	Hoisting
//	Closure
//	Modules
	
//	var clickHandler = function() {
		//..
//	};


// Function Scoping

var foo = "foo";

// ..

var foo = "foo2";
console.log(foo);	// "foo2"

// ..

console.log(foo);	// "foo2" -- oops!

// Creating a scope is to contain or encapsulate the variable declaration, around line 5 and 6 and to fix it by a function.
// His fix for this is below.

var foo = "foo";

function bob() {
	var foo = "foo2";
	console.log(foo);	// "foo2"
}
bob();

console.log(foo);	// "foo" -- phew!

// Scopes are used to prevent collisions with functions or just to protect it from access.
// JavaScript's unit of Scope is the function. Which means the scope's building blocks are accessible or viewed better within a function.


