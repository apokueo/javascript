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
	arr1.length;			//3
	arr4.length;			//5
	arr4[1].length;			//2

	// increasing array size
	arr1[4] = 5;
	arr1;				// [1, 2, 3, undefined, 5]
	arr1.length;			// 5


	// accessing (not assigning) an index larger than the array
	// does *not* change the size of the array
	arr2[10];			// undefined
	arr2.length;			// 3

	// Array constructor (rarely used)
	const arr5 = new Array();		// empty array
	const arr6 = new Array(1, 2, 3);	// [1, 2, 3]
	const arr7 = new Array(2);		// array of length 2 (all elements undefined)
	const arr8 = new Array("2"0;		// ["2"]

	

// Array Content Manipulation
	
	// Adding or Removing Single Elements at the Beginning or End

		// Push and unshift return the new length of the array after the new element has been added, and pop and shift return the 
		// element that was removed. Here are examples of these methods in action:

			const arr = ["b", "c", "d"];
			arr.push("e");				//returns 4; arr is now ["b", "c", "d", "e"]
			arr.pop();				//returns "e"; arr is now ["b", "c", "d"]
			arr.unshift("a");			//returns 4; arr is now ["a", "b", "c", "d"]
			arr.shift();				//returns "a"; arr is now ["b", "c", "d"]

	//Getting a Subarray: from an array, use slice.  slice takes up to two arguments.  The first argument is where the subarray begins, 
		//and the second argument is where the subarray ends.  If you omit the end argument, it returns everything up to the end of
		//string.  This method allows you to use negative indices to refer to elements with respect to the end of the string.
		//Examples:
		
			const arr = [1, 2, 3, 4, 5];
			arr.slice(3);				//returns [4, 5]; arr unmodified
			arr.slice(2, 4);			//returns [3, 4]; arr unmodified
			arr.slice(-2);				//returns [4, 5]; arr unmodified
			arr.slice(1, -2);			//returns [2, 3]; arr unmodified
			arr.slice(-2, -1);			//returns [4]; arr unmodified

	
	//Adding or Removing Elements at Any Position
		//Splice allows you to do in-place modification of the string, adding and/or removing elements from any index.  The first
		//argument is the index you want to start modifying; the second argument is the number of elements to remove any elements),
		// and the remaining arguments are the elements to be added.

			const arr = [1, 5, 7];
			arr.splice(1, 0, 2, 3, 4);		// returns[]; arr is now [1, 2, 3, 4, 5, 7]
			arr.splice(5, 0, 6);			// returns[]; arr is now [1, 2, 3, 4, 5, 5, 7]
			arr.splice(1, 2);			// returns[2, 3]; arr is now [1, 4, 5, 6, 7]
			arr.splice(2, 1, 'a', 'b');		// returns[5]; arr is now [1, 4, 'a', 'b', 6, 7]
	
	//Cutting and Replacing Within an Array
		//ES6 brings a new method, copyWithin, that takes a sequence of elements from an array and copies them, in place, to a
		//different part of the array, overwriting whatever elements are there.  The first argument is where to copy to (the target),
		//the second argument is where to start copying from, and the final (optional) argument is where to stop copying from.  As 
		//with slice, you can use negative numbers for the start and end indexes, and they count backward from the end of the array.

		const arr = [1, 2, 3, 4,];
		arr.copyWithin(1, 2);				// arr is now [1, 3, 4, 4]
		arr.copyWithin(2, 0, 2);			// arr is now [1, 3, 1, 3]
		arr.copyWithin(0, -3, -1);			// arr is now[3, 1, 1, 3]

	//Filling an Array with a Specific Value
		//ES6 brings a welcome new method, fill, which allows you to set any number of elements with a fixed value (in place).
		
		const arr = new Array(5).fill(1);		// arr initialized to [1, 1, 1, 1, 1]
		arr.fill = ("a");				// arr is now ["a", "a", "a", "a", "a"]
		arr.fill = ("b", 1);				// arr is now ["a", "b", "b", "b", "b"]
		arr.fill = ("c", 2, 4);				// arr is now ["a", "b", "c", "c", "b"]
		arr.fill = (5.5, -4);				// arr is now ["a", 5.5, 5.5, 5.5, 5.5]
		arr.fill =(0, -3, -1);				// arr is now ["a", 5.5, 0, 0, 5.5]

	//Reversing and Sorting Arrays
		//reverse is a simple as it gets; it reverses the order of the array in place:

		const arr = [1, 2, 3, 4, 5]
		arr.reverse();					// arr is now [5, 4, 3, 2, 1]
	
	sort sorts an array in place:

		const arr = [5, 2, 3, 4, 1];
		arr.sort();					// arr is now [1, 2, 3, 4, 5]

	//sort also allows you to specify a sort function, which can come in quite handy.  For example, there's no meaningful way to sort
	//objects:

		const arr = [{ name: "Suzanne"}, { name: "Jim" },
			{ name: "Trevor" }, { name: "Amanda" }];
		arr.sort();				//arr unchanged
		arr.sort((a, B) => a.name > b.name;	//arr sorted alphabetically
							//by name property
		arr.sort((a, b) => a.name < b.name;	//arr sorted reverse alphabetically
							//by second letter of name property
	
