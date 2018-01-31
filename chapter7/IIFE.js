// Immediately Invoked Function Expressions
//
//


// Function expressions allow us to create something called an immediately invoked function expression (IIFE).
// An IIFE declares a function and then runs it immediately. 
//
//
		(function() {
			// this is the IIFE body
		})();


		(function() {
			var spy = "James Bond";
			return spy;
		})();



	(function() {
		'use strict';
		// all of your code goes here... it
		// is executed in strict mode, but
		// the strict code mode won't contaminate
		// any other scripts that are combined
		// with this one
	})();

//Strict Mode (see above) in the form of an IIFE. 
