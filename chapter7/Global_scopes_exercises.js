// Example on global scope

//let user = {
//    name = "Jacob",
//    age  = 45,
//};

//function greet() {
//  console.log('Hello, ${user.name}!');
//}
//function getBirthYear() {
//  return new Date().getFullYear() - user.age;
//}

/*function greet(user){
    console.log(`Hello, ${user.name}!`);
}
function getBirthYear(user) {
    return new Date().getFullYear() - user.age;
}*/


//Variable Masking

	{
		// block 1
		const x = 'blue';
		console.log(x);		// logs "blue"
	}
	console.log(typeof x);		// "undefined"; x outt of scope
	{
		// block 2

		const x = 3;
		console.log(x);
	}
	console.log(typeof x);		// logs "undefined"; x out of scope

{
	// outer block
	let x = 'blue';
	console.log(x);			// logs "blue"
	{
		// inner block
		let x = 3;
		console.log(x);		// logs "3"
	}
	console.log(x);			// logs "blue"
}
console.log(typeof x);	// logs "undefined"; x out of scope

// Example above demonstrates variable masking.

{
	// outer block
	let x = { color: "blue"};
	let y = x;									// y and x refer to the same object
	let z = 3;
	{
		// inner block
		let x = 5;								// outer x now masked
		console.log(x);						// logs 5
		console.log(y.color);			// logs "blue"; object pointed to by
															// y (and x in the outer scope) is
															// still in scope
		y.color = "red";
		console.log(z);						// logs 3; z has not been masked
	}														//
	console.log(x.color);				// logs "red"; object modified in
															// inner scope
	console.log(y.color);				// logs "red"; x and y point to the
															// same object
	console.log(z);							// logs 3

}
//When a variable is masked, the masked variable is completely inaccessible
//that name.
//By realizing that scopes are hierarchical, you can enter a new scope
// without leaving the old one.  This establishes a 'scope chain' that
// determines what variables are in scope: all variables in the current
// scope chain are in scope, and can be accessed if not masked.
