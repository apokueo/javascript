class Car {
    constructor(make, model) {
        this.make = make; 
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
    }
    shift(gear) {
        if(this.users.indexOf(gear) < 0)
            throw new Error(`Invalid gear: ${gear}`);
        this.userGear = gear; 
    }
}

const car1 = new Car("Tesla", "Model S"); 
const car2 = new Car("Mazda", "3i");

console.log(car1.userGear);
console.log(car2.userGear);

console.log(car1 instanceof Car); 
console.log(car2 instanceof Car); 

