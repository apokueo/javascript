class Vehicle {
    constructor() { 
        this.passengers = []; 
        console.log("Vehicle created") 
    } 

    addPassenger(p) { 
        this.passengers.push(p)
    }
} 

class Car extends Vehicle { 
    constructor() {
        super() 
        console.log("Car created") 
    } 

    deployAirbags() {
        console.log("BWOOSH!") 
    } 
} 

class Motorcycle extends Vehicle {
    
   } 

const v = new Vehicle() 
const c = new Car() 
v.addPassenger('Djehuti')
v.addPassenger('Auset') 
console.log(v.passengers)
c.deployAirbags()
const m = new Motorcycle() 

console.log(m instanceof Vehicle)
console.log(m instanceof Motorcycle)
console.log(m instanceof Car) 
