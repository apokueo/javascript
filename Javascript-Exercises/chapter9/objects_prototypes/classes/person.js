
class People {
        
        constructor(firstname, lastname, age, gender, position) {
                  this.firstname = firstname; 
                  this.lastname = lastname; 
                  this.age = age; 
                  this.gender = gender; 
                  this.position = position; 
              }
}  

const person1 = new People
person1.position = "engineer" 

console.log(person1.position)

