function createObjects(firstname, lastname, gender, designation) { 
    var newObject = {}; 
    newObject.firstname = firstname; 
    newObject.lastname = lastname; 
    newObject.gender = gender; 
    newObject.designation = designation; 
    return newObject; 
} 

var emp1 = createObjects("Amaru", "Shango", "male", "Priest")
console.log(emp1) 


