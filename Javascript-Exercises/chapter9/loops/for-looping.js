/** in for-loops you iterate over arrays or array-like objects as arguments|HTMLCollection objects 

for (var i = 0; i < myarray.length; i++) {
	// do something with myarray[i] 
} 

you don't want to use this type of loop because it suboptimal and will slow down your code esp. if myarray is a HTMLCollection obj (objects returned by the DOM method such as 
* 
* document.getElementByName() 
* document.getElementsByClassName() 
* document.getElementsByTagName() 
*
* Its better to cache the length of the array (or collection) you're iterating over: see below
**/ 

var myarray = [1,2,3,4,5,6]; 

for (var a = 0; a < myarray.length; a++) {
	
	console.log('this is a loop'); 
} 

// Even better, take the var out of the loop -> 

function looper() {
	var i = 0, 
		max,
		myarray = []; 

	// ... 
	
	for (i = 0; max = myarray.length; i < max; i++) {
		console.log("So much fun"); 
	} 

} 

looper(); 


