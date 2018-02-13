// Function Scoping cont'd from previous Scopes_Closure file.

var foo = "foo";

function bob() {
	var foo = "foo2";
	console.log(foo);	// "foo2"
}
bob();

console.log(foo);	// "foo"


// Need line 7 to invoke something ?
// To create a function which is a declaration such as up above, had to be given a name.
// In this case the name is Bob.
// We need this name to invoke the function. What is this called?


var foo = "foo";

function bob() {
	var foo = "foo2";
	console.log(foo);
}
( bob )();

console.log(foo);	// "foo"

// Took the function declaration and turned it into a function expression?
// The 'bob' expression gets evaluated first and then we call the function.
//
// What if we took the function bob and put it in placed of the variable on line 7 ?
// What if we made this from a function declaration to a function expression ?
//
// Difference between function declaration and function expression:  The main difference between a function expression and a function 
// statement is the function name, which can be omitted in function expressions to create anonymous functions. 
// A function expression can be used as a IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
//
// example of this:
//
function dark() {
	var light = "light";
	console.log(light);
}
dark();

// that is a function declaration.

(function light() {
	var darkness = "shadow";
	console.log(darkness);
})();
// IIFE(Immediately Invoked Function Expression) because the function doesn't need to be declared. The word function is not literally the 
// first word in the statement but the parenthesis is. Now bob will not be confused with an outer scope.
// The IIFE allows to create scopes in various places however only wanting that function for the purpose of
// scope and to be run one time and that's it.
