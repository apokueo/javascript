// classic function creation

function foo() {
  console.log("Function foo called")
};


// function expressions

var bar = function() {
  console.log("Function bar called")
};

foo(); // invocation of foo
bar(); // invocation of bar


// Scopes -> dictates the portion of code where varibles make sense

var a = 10; // global

// restrict your code to scopes | Javascript supports function scopes not block scopes

var name = "khumut"

if (name === "khumut") {
  var department = "engineering";
}

console.log(name)
console.log(department)
