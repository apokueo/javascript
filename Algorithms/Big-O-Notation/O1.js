function add(num1, num2, num3) {
	return num1 + num2 + num3; 
} 


add(1,2,3)

/* The above example, 'add' requires 2 addition operations - the size of the numbers doesn't affect how many additions need to be performed, so in this case the runtime isn't dependent on the size of inputs */

function sayHello() {
	for (var i = 0; i < 100; i++) {
		console.log("Hello"); 
	} 
} 


sayHello(); 

function logMultiples(num) {
	for (var i = 0; i < 10; i++) {
		console.log(i * num); 
	}
}


logMultiples(5); 

