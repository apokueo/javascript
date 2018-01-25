// Variables 

let languages = "python"; 

const relaxingLanguages = "ruby"; 

console.log(languages); 
console.log(relaxingLanguages); 


// truthy and falsy 
let heating = true; 
let cooling = false; 

console.log(heating === "true"); 

// Symbols 
const RED = Symbol(); 
const ORANGE = Symbol("The Color of a sunset!"); 
console.log(RED === ORANGE ); // evaluates as false: every symbol is unique

// when in doubt use null 
let currentTemp; 
const targetTemp = null;
currentTemp = 19.5; 
currentTemp = undefined; 

// Objects 
// const obj = {}; 
// obj.size; // undefined 
// obj.color = "yellow"; 

// computed member access operator 
// obj["not an identifier"] = 3; 
// obj["not an identifier"]; 
// obj["color"]; 

// const SIZE = Symbol(); 
// obj[SIZE] = 8; 
// obj[SIZE]; 

const eve = {
    name: 'Eve', 
    age: 4, 
}; 

const eve2 = { name: 'Eva', age: 23 }; // oneliner

const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia', 
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae', 
        subfamily: 'Felinae', 
        genus: 'Felis',
        species: 'catus', 
    }, 
}; 

// here are ways to access sam1

console.log(sam3.classification.family);
console.log(sam3["classification"].family); 
sam3.classification["family"]; 
sam3["classification"]["family"]; 

sam3.speak = function() { return "Roof!"; }; 
console.log(sam3.speak()); 

delete sam3.classification; 
delete sam3.speak;

//console.log(sam3.classification.family); 

// Array assignments
const a1 = [1,2,3,4]; 
const a2 = [1, 'two', 3, null]; 
const a3 = [
    "What the hammer?  What the chain", 
    "In the furnace was thy brain?", 
    "What the anvil? What dread grasp", 
    "Dare its deadly terrors clasp?", 
]; 

const a4 = [
    { name: "Ruby", hardness: 9 }, 
    { name: "Diamond", hardness: 10 }, 
    { name: "Topaz", hardness: 8 },
]; 

const a5 = [
    [1,3,5], 
    [2,4,6]
]; 

console.log(a1); 
console.log(a2);
console.log(a3); 
console.log(a4); 
console.log(a5); 

const arr = ['a', 'b', 'c']; 
console.log(arr.length); 


// Working with the date function 

const now = new Date(); 
console.log(now); 

// create a date initialized to a specific data (at 12:00am)

const halloween = new Date(2018, 9, 31); 
console.log(halloween); 

const halloweenParty = new Date(2018, 9, 31, 19, 0); 
console.log(halloweenParty);
 
console.log(halloweenParty.getFullYear()); 

// Conversion 
const numStr = "33.3"; 
const num = Number(numStr); 
console.log(num); 

const a = parseInt("16 volts", 10); 
console.log(a);

const b = parseFloat("15.5 kph"); 
console.log(b); 

// dates can be converted as well
    const d = new Date(); 
    const ts = d.valueOf(); 

    console.log(ts); 

    const g = true; 
    const n = g ? 1 : 0;

    console.log(n); 