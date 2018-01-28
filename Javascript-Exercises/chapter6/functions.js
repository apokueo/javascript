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
arr[1] = getGreeting;
arr[1]();
