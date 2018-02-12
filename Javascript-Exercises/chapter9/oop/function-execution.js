function foo() {
    console.log("Hello")
} 

foo(); 

var obj = {}; 

obj.foo = function() {
    console.log('hello')

} 

obj.foo() 

new foo(); 
