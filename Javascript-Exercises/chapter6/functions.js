// functional javascript
function sayHello() {
  console.log('heellooor');
}
sayHello();

function getGreeting() {
  console.log("hello");
}

const f = getGreeting;
f();

// or

const o = {};
o.f = getGreeting
o.f();

const arry = [1,2,3];
arry[1] = getGreeting;
arry[1]();

console.log('getting into that funky function'); 

function e(x) {
	console.log(`inside e: x=${x}`); 
	x = 5; 
	console.log(`inside e: x=${x} (after assignment)`); 
} 

var x = 3; 
console.log(`before alling e: x=${x}`); 
e(x); 
console.log(`after calling e: x=${x}`); 
