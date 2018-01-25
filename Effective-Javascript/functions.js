var obj = {
    toString: function() {
        return "[object myObject]"; 
    }, 
    valueOf: function() {
        return 17; 
    }
}; 
console.log("object: " + obj); 