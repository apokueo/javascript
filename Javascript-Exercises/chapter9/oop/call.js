function Car(cadence, speed, gear, tirepressure) {
    this.cadence = cadence; 
    this.speed = speed; 
    this.gear = gear; 
    this.tirepressure = tirepressure; 
    this.inflatetires = function() { 
        this.tirepressure += 3
    } 

} 

// Calling the function in constructor mode 

var car1 = new Car(50, 20, 4, 25); 
car1.inflatetires(); 

var car2 = new Car(50, 20, 4, 30); 
car2.inflatetires(); 

function Mechanic(name) {
    this.name = name; 
} 

var hoodie = new Mechanic("hoodie"); 
hoodie.inflatetires = car1.inflatetires; 

hoodie.inflatetires.call(car1)
