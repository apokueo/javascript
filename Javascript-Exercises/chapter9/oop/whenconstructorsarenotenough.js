function Bicycle(cadence, speed, gear, tirepressure) {
    this.cadence = cadence; 
    this.speed = speed; 
    this.gear = gear; 
    this.tirepressure = tirepressure; 
    this.inflatetires = function() { 
        this.tirepressure += 3
    } 

}

var bicycle1 = new Bicycle(50, 20, 4, 25); 
var Bicycle2 = new Bicycle(50, 20, 4, 25); 


// Class -> Object

    
