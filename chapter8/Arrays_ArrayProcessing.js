// Arrays (unlike objects) are inherently ordered, with zero-based numeric indices.  Arrays in JavaScript can be nonhomogeneous, meaning 
// the elements in an array do not need to be the same type (it follows from this that arrays can have other arrays as elements, or objects).
// Literal arrays are construed with square brackets, and the same square brackets are used to access elements by index.  Every array has 
// a length property, which tells you how many elements are in the array.
//


	// array literals
	const arr1 = [1, 2, 3];					// array of numbers
	const arr2 = ["one", 2, "three"];			// nonhomogeneous array
	const arr3 = [[1, 2, 3], ["one", 2, "three"]];		// array containing arrays
	const arr4 = [
		{ name: "Fred", type: "object", luckyNumbers = [5, 7, 13] },
		[
			{ name: "Susan", type: "object" },
			{ name: "Tony", type: "object"},
		],
		1,
		function() { return "arrays can contain functions too"; },
		"three",
	];

	// accessing elements
	arr1[0];			// 1
	arr1[2];			// 3
	arr3[1];			// ["one", 2, "three"]
	arr4[1][0];			// { name: "Susan", type: "object" }

	
	// array length
	arr1.length;			// 3
	arr4.length;			// 5
	arr4[1].length;			// 2

	// increasing array size
	
