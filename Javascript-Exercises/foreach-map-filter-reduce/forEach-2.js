// Create an array of Numbers 

var numbers = [1, 2, 3, 4, 5] 

// Create a variable to hold the sum

var sumOf = 0; 

// Loop over the array, incrementing the sum variable 

numbers.forEach(function(number) {
    sumOf += number; 
});  


// or 
// function adder(number) { sum += number}); and then numbers.forEach(adder); 

// print the sum variable 
console.log(sumOf); 
