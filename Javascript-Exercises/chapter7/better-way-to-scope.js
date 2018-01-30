function greet(user) {
	console.log(`Hello, ${user.name}!`); 
}

greet('Larry'); 

function getBirthYear(user) {
	return new Date().getFullYear() - user.age; 
} 

getBirthYear('Lawrence'); // although this should be age.
