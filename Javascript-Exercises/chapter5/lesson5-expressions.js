// declaration statement  
// multiplication expression resolves to 15
// = is an assignment expression that assigns the value of 15 to x 

// let x, y; 
// console.log(y); 
// y = x = 3 * 5; 
// console.log(y)
// console.log(x)
// console.log(y)

let x = 2;
const r1 = x++ + x++; 
const r2 = ++x + ++x; 
const r3 = x++ + ++x; 
const r4 = ++x + x++; 
let y = 10;
const r5 = y-- + y--; 
const r6 = --y + --y; 
const r7 = y-- + --y; 
const r8 = --y + y--;
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
