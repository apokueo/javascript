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
