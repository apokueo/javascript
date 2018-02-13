const Car = (function() {
    
    const carProps = new WeakMap(); 

class Car {
    constructor(make, model) {
        this.make = make; 
        this.model = model; 
        this._userGears = ["P", "N", "R", "D"]; 
        carProps.set(this, { userGear: this._userGears[0] }); 

}

    getGears() {
        return carProps.get(this).userGear;
    } 

    setGears(value) {
        if(this._userGears.indexOf(value) < 0) 
            throw new Error(`Invalid Gear: ${value}`); 
        

        

