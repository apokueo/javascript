// for in 

const SYM = Symbol(); 

const o = { a: 1, b: 2, c: 3, [SYM]: 4 }; 

for(let prop in o) {
    if(!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`); 
}

/** enumerate the contents of o 
if the object 'o' does not have its own property - continue and note that 'this condition has to be true in order for it to continue' to next statement 
and log the properties of the object prop (o). The hasOwnProperty() method returns a boolean indicating whether the object 
has the specified property as own (not inherited) property.
**/
