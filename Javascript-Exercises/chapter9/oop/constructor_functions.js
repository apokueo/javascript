// this 

function createObjects(firstname, lastname, gender, designation) { 
    this.firstname = firstname; 
    this.lastname = lastname; 
    this.gender = gender; 
    this.designation = designation; 
} 

// the new keyword makes it so you don't have to do var createObjects = {} and then return createObjects (new is constructor) 

var emp1 = new createObjects("Amaru", "Shango", "male", "Priest")
console.log(emp1) 
