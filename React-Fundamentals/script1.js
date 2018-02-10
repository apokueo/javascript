function doStuff() {
    console.log("Hello, from scriptjs 1"); 
}   

function otherStuff() { 
    console.log('another function'); 
} 

exports.doStuff = doStuff
exports.otherStuff = otherStuff 

