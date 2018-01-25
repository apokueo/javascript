
const arry = [0, 1, 2];

const a2 = [1, "cat", 3, "Yomesh", "26"];

const a3 = ["cat dog frankford mismatch polywhirling segemented toxisic mean", " also some other words"]

const cats = [
  {species:"bengal tiger", sex: "male", age: "who the fuck knows", name: "Salset"},
  {species:"siberian tiger", sex: "female", age: "she isn'e about to disclose that", name: 'and I quote "you can get to know me first." '},
];
const aRayRay = [
  ["array content", 0, " something like this I guess", "21" ],
  [0, 5, 10],
];

const arr = [1, 2, 'c', 4, 5];
arr[2] = 3; // change the 2nd index of the arrays value to 3 instead of string 'c'. 



const date = new Date();
date;

const birthday = new Date(1990, 11, 27);

const birthdayPartyTime = new Date(2018, 11, 27, 19, 09, 0);
birthdayPartyTime.getFullYear();
birthdayPartyTime.getMonth();
birthdayPartyTime.getDate();
birthdayPartyTime.getHours();
birthdayPartyTime.getMinutes();
birthdayPartyTime.getDay();
birthdayPartyTime.getSeconds();
birthdayPartyTime.getMilliseconds();

//REGEX

// const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b 
// const phone = /(:?\+1)?(:?\(d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;

// Introduction to Map and Set 
/*
Map, like objects contains key value relationsip 
Sets are similar to arrays, except don't contain duplicates

converting numbers 
*/
const numStr = "33.3"
const num = Number(numStr);
const a = parseInt("16 volts", 10); 
const b = parseInt("3a", 16);  // parse hexidecimal result 58
const c = parseFloat("15.5 kph"); // 15.5
const d = new Date();
const t = d.valueOf();   // get the date in numeric value 

/*
Converting to string 
*/

const n = 33.5;
const s = n.toString();

console.log(arry.length);
console.log(a2);
console.log(cats);
console.log(aRayRay[0][0]);
console.log(aRayRay[1][2]); // drilling into arrays 
console.log(cats[cats.length - 1]); // retrieves the length minus 1 returning the value at the end of the array. Note: want to learn how to drill into object properties of arrays 
console.log(date);
console.log(birthdayPartyTime);
