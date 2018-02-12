var createBicycle = function(cadence, speed, gear) {
    this.cadence = cadence; 
    this.speed = speed; 
    this.gear = gear; 
} 

var bicycle1 = new createBicycle(50, 20, 4); 
console.log(bicycle1); 
