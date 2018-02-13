// Lexical Scope vs Dynamic Scope

function foo() {
	var bar  = "bar";

	function baz() {
		console.log(bar); // lexical!

	}
	baz();
}
foo();

// Lexical is my optimizable.  It is very straight forward.


// theoretical dynamic scoping
function foo() {
	console.log(bar); // dynamic!
}

function baz() {
	var bar = "bar";
	foo();
}

baz();

// In dynamic scope, it does NOT matter where the function was written or where or how it was called but where it is called From.
// The dynamic scope language is not as predictable as lexical however it is more flexible due to the rules. Where a function can be written
// and be reused in many different context.
